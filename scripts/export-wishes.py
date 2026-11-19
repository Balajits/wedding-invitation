"""Export the private wedding guestbook to an Excel-compatible CSV."""

import argparse
import csv
import json
import subprocess
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import urlencode
from urllib.request import Request, urlopen

WISHES_URL = (
    "https://firestore.googleapis.com/v1/projects/bh-wedding-8b35a"
    "/databases/(default)/documents/wishes"
)


def spreadsheet_text(value):
    # Treat guest input as text even if it starts with a spreadsheet formula.
    if value.startswith(("\t", "\r", "\n")) or value.lstrip().startswith(("=", "+", "-", "@")):
        return "'" + value
    return value


def fetch_wishes(token):
    params = {"pageSize": 300, "orderBy": "createdAt desc"}
    while True:
        url = f"{WISHES_URL}?{urlencode(params)}"
        request = Request(url, headers={"Authorization": f"Bearer {token}"})
        with urlopen(request, timeout=30) as response:
            page = json.load(response)

        for doc in page.get("documents", []):
            fields = doc["fields"]
            yield (
                spreadsheet_text(fields.get("name", {}).get("stringValue", "")),
                spreadsheet_text(fields.get("description", {}).get("stringValue", "")),
                fields.get("createdAt", {}).get("timestampValue", ""),
            )

        if not page.get("nextPageToken"):
            break
        params["pageToken"] = page["nextPageToken"]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("output", type=Path, help="Path for a new CSV file")
    args = parser.parse_args()
    try:
        token = subprocess.check_output(
            ["gcloud", "auth", "application-default", "print-access-token"],
            text=True,
        ).strip()
        wishes = list(fetch_wishes(token))
        with args.output.open("x", encoding="utf-8-sig", newline="") as output:
            writer = csv.writer(output)
            writer.writerow(["Name", "Wish", "Submitted at (UTC)"])
            writer.writerows(wishes)
    except HTTPError as error:
        parser.exit(1, f"Firestore returned HTTP {error.code}. Check your project's IAM access.\n")
    except (OSError, subprocess.CalledProcessError) as error:
        parser.exit(1, f"Export failed: {error}\n")
    print(f"Exported {len(wishes)} wishes to {args.output}")


if __name__ == "__main__":
    main()
