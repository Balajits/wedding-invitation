"use client";

import { useRef, useState, type FormEvent } from "react";
import FloatingHearts from "../FloatingHearts/FloatingHearts";
import styles from "./WeddingWishes.module.css";

const wishesEndpoint = process.env.NEXT_PUBLIC_WISHES_ENDPOINT;

const HEARTS = [[6, 9], [91, 12], [12, 37], [86, 43], [5, 70], [93, 68], [18, 91], [80, 92]] as const;
const DESCRIPTION_LIMIT = 1000;
const serviceErrors = new Map([
  ["invalid-input", "Enter a name and a wish, each up to 80 characters."],
  ["busy", "The wishes service is busy. Please try again."],
  ["spreadsheet-access", "Apps Script couldn’t open the spreadsheet. Check that the deployment runs as the sheet owner or an editor."],
  ["missing-tab", 'The spreadsheet needs a tab named "Wedding Wishes".'],
  ["wrong-headers", "Set columns A1–D1 in Wedding Wishes to Name, Wish, Date, and Time."],
  ["occupied-id-column", "Column E is in use. Move any existing data to another column so the script can store submission IDs."],
  ["sheet-write", "Apps Script opened the sheet but couldn’t write or verify the row. Check for sheet or range protections."],
]);
export default function WeddingWishes() {
  const [sendStatus, setSendStatus] = useState<"idle" | "pending" | "sent" | "invalid" | "error">("idle");
  const [sendError, setSendError] = useState("");
  const sending = useRef(false);
  const submission = useRef<{ id: string; name: string; description: string } | null>(null);

  async function sendWish(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    const name = String(fields.get("name") ?? "").trim();
    const description = String(fields.get("description") ?? "").trim();
    if (!name || !description || name.length > 80 || description.length > DESCRIPTION_LIMIT) {
      setSendStatus("invalid");
      return;
    }

    if (!wishesEndpoint) {
      setSendError("Wishes are temporarily unavailable.");
      setSendStatus("error");
      return;
    }

    if (submission.current?.name !== name || submission.current?.description !== description) {
      submission.current = { id: crypto.randomUUID(), name, description };
    }
    sending.current = true;
    setSendStatus("pending");
    try {
      const response = await fetch(wishesEndpoint, {
        method: "POST",
        // URLSearchParams sends a form-encoded request without a CORS preflight.
        body: new URLSearchParams(submission.current),
        signal: AbortSignal.timeout(25000),
      });
      if (!response.ok || !response.headers.get("content-type")?.includes("application/json")) {
        setSendError("The wishes service didn’t return a valid response. Check the Apps Script web app URL and access settings.");
        setSendStatus("error");
        return;
      }

      const result = await response.json();
      if (result?.ok !== true) {
        setSendError(serviceErrors.get(result?.code) ?? "The wishes service returned no error code. Deploy the latest Apps Script version to see why the save failed.");
        setSendStatus("error");
        return;
      }
      const receipt = result.receipt;
      if (receipt?.id !== submission.current.id || receipt.sheet !== "Wedding Wishes"
        || !Number.isInteger(receipt.row) || receipt.row < 2) {
        console.warn("Wedding wishes deployment check", {
          endpoint: wishesEndpoint,
          responseFields: Object.keys(result),
          receiptFields: receipt && typeof receipt === "object" ? Object.keys(receipt) : [],
          matchesSubmission: receipt?.id === submission.current.id,
          matchesSheet: receipt?.sheet === "Wedding Wishes",
          validRow: Number.isInteger(receipt?.row) && receipt.row >= 2,
        });
        setSendError("The service returned no matching Sheet receipt. Check the sheet before retrying and deploy the latest Apps Script version.");
        setSendStatus("error");
        return;
      }

      console.info(`Wish saved in Wedding Wishes, row ${receipt.row}.`);
      submission.current = null;
      form.reset();
      setSendStatus("sent");
    } catch (error) {
      console.error("Could not read the Apps Script submission response", error);
      setSendError("We couldn’t read the wishes service response. Check your connection and the Apps Script deployment URL.");
      setSendStatus("error");
    } finally {
      sending.current = false;
    }
  }

  return (
    <section className={styles.section} aria-labelledby="wishes-title">
      <FloatingHearts positions={HEARTS} />
      <div className={styles.content}>
        <header className={styles.header}>
          <h2 id="wishes-title">Send Your Wishes</h2>
          <p>Send a private message to the newlyweds.</p>
        </header>

        <form className={styles.form} onSubmit={sendWish}>
          <fieldset disabled={sendStatus === "pending"}>
            <label>
              Your name
              <input name="name" autoComplete="name" required maxLength={80} />
            </label>
            <label>
              Your wish
              <textarea name="description" required maxLength={DESCRIPTION_LIMIT} rows={3} />
            </label>
            <button type="submit">{sendStatus === "pending" ? "Sending…" : "Send wish"}</button>
          </fieldset>
          <p className={styles.status} role="status">
            {sendStatus === "sent" && "Your wish was sent. Thank you!"}
            {sendStatus === "invalid" && "Please enter your name and a wish."}
            {sendStatus === "error" && sendError}
            {sendStatus === "pending" && "Waiting for your wish to be saved."}
          </p>
        </form>

      </div>
    </section>
  );
}
