const SPREADSHEET_ID = "1ICs1nXgB028Lf2zUqB13b1cItjno3ZTPMQgGVucui8s";
const SHEET_NAME = "Wedding Wishes";
const HEADERS = ["Name", "Wish", "Date", "Time"];
const SUBMISSION_ID_COLUMN = 5;

function doGet() {
  return jsonResponse({ version: "wedding-wishes-receipt-v3" });
}

function doPost(event) {
  const { id = "", name: rawName = "", description: rawDescription = "" } = event?.parameter ?? {};
  const name = rawName.trim();
  const description = rawDescription.trim();
  if (!/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(id)) {
    return jsonResponse({ ok: false, code: "invalid-submission-id" });
  }
  if (!name || name.length > 80) return jsonResponse({ ok: false, code: "invalid-name" });
  if (!description) return jsonResponse({ ok: false, code: "empty-wish" });

  const lock = LockService.getScriptLock();
  let failureCode = "busy";
  try {
    lock.waitLock(10000);
    failureCode = "spreadsheet-access";
    const workbook = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = workbook.getSheetByName(SHEET_NAME);
    if (!sheet) return jsonResponse({ ok: false, code: "missing-tab" });
    failureCode = "sheet-write";
    if (!sheet.getLastRow()) {
      sheet.appendRow(HEADERS);
    }
    const headers = sheet.getRange(1, 1, 1, HEADERS.length).getDisplayValues()[0];
    if (!HEADERS.every((header, index) => headers[index].trim() === header)) {
      return jsonResponse({ ok: false, code: "wrong-headers" });
    }
    const idHeader = sheet.getRange(1, SUBMISSION_ID_COLUMN);
    if (idHeader.isBlank()) {
      idHeader.setValue("Submission ID");
      sheet.hideColumns(SUBMISSION_ID_COLUMN);
    } else if (idHeader.getValue() !== "Submission ID") {
      return jsonResponse({ ok: false, code: "occupied-id-column" });
    }
    const rowCount = sheet.getLastRow() - 1;
    const exists = rowCount > 0 && sheet.getRange(2, SUBMISSION_ID_COLUMN, rowCount, 1)
      .createTextFinder(id).matchEntireCell(true).findNext();

    if (!exists) {
      const now = new Date();
      const timeZone = workbook.getSpreadsheetTimeZone();
      sheet.appendRow([
        sheetText(name),
        sheetText(description),
        Utilities.formatDate(now, timeZone, "yyyy-MM-dd"),
        Utilities.formatDate(now, timeZone, "HH:mm:ss"),
        id,
      ]);
      SpreadsheetApp.flush();
    }
    const row = exists ? exists.getRow() : sheet.getLastRow();
    if (sheet.getRange(row, SUBMISSION_ID_COLUMN).getDisplayValue() !== id) {
      throw new Error("Could not verify the saved submission ID.");
    }
    console.info(`Saved submission ${id} in ${SHEET_NAME}, row ${row}.`);
    return jsonResponse({ ok: true, receipt: { id, sheet: SHEET_NAME, row } });
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false, code: failureCode });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function sheetText(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
