"use client";

interface CalendarButtonProps {
  title: string;
  start: string;
  end?: string;
  location: string;
  description: string;
}

export default function CalendarButton({
  title,
  start,
  end,
  location,
  description,
}: CalendarButtonProps) {
  const createICS = () => {
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Balaji & Harsa Wedding//EN",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `UID:${Date.now()}@balaji-harsa-wedding`,
      `DTSTAMP:${formatDate(new Date())}`,
      `DTSTART:${start}`,
      ...(end ? [`DTEND:${end}`] : []),
      `SUMMARY:${title}`,
      `LOCATION:${location}`,
      `DESCRIPTION:${description}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

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
    URL.revokeObjectURL(url);
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${start}/${end || start}&location=${encodeURIComponent(
    location
  )}&details=${encodeURIComponent(description)}`;

  return (
    <div className="calendar-actions">

      <button
        type="button"
        className="calendar-button"
        onClick={createICS}
      >
        <span className="calendar-icon">＋</span>
        Add to Calendar
      </button>

      <a
        href={googleCalendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="google-calendar-link"
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