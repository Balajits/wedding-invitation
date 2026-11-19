"use client";

interface CalendarButtonProps {
  title: string;
  start: string;
  end?: string;
  location: string;
  description: string;
  classes?: { group: string; apple: string; google: string };
}
import './CalendarButton.css';

export default function CalendarButton({
  title,
  start,
  end,
  location,
  description,
  classes,
}: CalendarButtonProps) {
  const createICS = () => {
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Balaji & Harsa Wedding//EN",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `UID:${encodeURIComponent(title)}-${start}@balaji-harsa-wedding`,
      `DTSTAMP:${formatDate(new Date())}`,
      `DTSTART:${start}`,
      ...(end ? [`DTEND:${end}`] : []),
      `SUMMARY:${escapeCalendarText(title)}`,
      `LOCATION:${escapeCalendarText(location)}`,
      `DESCRIPTION:${escapeCalendarText(description)}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].map(foldCalendarLine).join("\r\n") + "\r\n";

    const blob = new Blob([ics], {
      type: "text/calendar;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${title.replace(/\s+/g, "-")}.ics`;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${start}/${end || start}&location=${encodeURIComponent(
    location
  )}&details=${encodeURIComponent(description)}`;

  return (
    <div className={classes?.group ?? "calendar-actions"}>

      <button
        type="button"
        className={classes?.apple ?? "calendar-button"}
        onClick={createICS}
      >
        Apple Calendar
      </button>

      <a
        href={googleCalendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={classes?.google ?? "google-calendar-link"}
      >
        Google Calendar
      </a>

    </div>
  );
}

function formatDate(date: Date) {
  const pad = (num: number) => String(num).padStart(2, "0");

  return (
    date.getUTCFullYear() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    "T" +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    "Z"
  );
}
function escapeCalendarText(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r\n|\r|\n/g, "\\n")
    .replace(/[,;]/g, "\\$&");
}

function foldCalendarLine(line: string) {
  const encoder = new TextEncoder();
  let bytes = 0;
  let folded = "";

  for (const character of line) {
    const width = encoder.encode(character).length;
    if (bytes + width > 75) {
      folded += "\r\n ";
      bytes = 1;
    }
    folded += character;
    bytes += width;
  }

  return folded;
}
