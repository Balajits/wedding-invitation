import Image from "next/image";
import CalendarButton from "../CalendarButton";
import FloatingHearts from "../FloatingHearts/FloatingHearts";
import type { EventItem, VenueInfo } from "../../data/weddingData";
import styles from "./EventCard.module.css";

// fixed time zone so server and browser always show the same text
const fmt = (iso: string, opts: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Kolkata", ...opts }).format(new Date(iso));

const toCalendarStamp = (iso: string) =>
  new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

const heartPositions = [[7, 16], [87, 12], [12, 48], [89, 58], [8, 84], [85, 89]] as const;

interface EventCardProps {
  event: EventItem;
  venue: VenueInfo;
}

export default function EventCard({ event, venue }: EventCardProps) {
  const { title, tagline, start, end, place, image } = event;
  const contentPosition = event.contentPosition ?? (event.id === "engagement" ? "top" : "bottom");

  const destinationQuery =
    event.mapQuery || venue.coordinates || venue.mapQuery || venue.name || place;
  const mapUrl =
    venue.mapLink ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destinationQuery)}`;
  const directionsUrl =
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destinationQuery)}`;

  const endIso =
    end ||
    new Date(new Date(start).getTime() + 3 * 60 * 60 * 1000).toISOString();

  const timeDisplay =
    event.time ||
    (end
      ? `${fmt(start, { hour: "numeric", minute: "2-digit" })} – ${fmt(end, { hour: "numeric", minute: "2-digit" })}`
      : `${fmt(start, { hour: "numeric", minute: "2-digit" })} onwards`);

  return (
    <article className={styles.card} data-content-position={contentPosition}>
      {image && (
        <div className={styles.art} aria-hidden="true">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1040px) 465px, (min-width: 760px) 46vw, (min-width: 540px) 500px, 92vw"
            className={styles.image}
          />
        </div>
      )}

      <div className={styles.body}>
        <FloatingHearts positions={heartPositions} />
        <time className={styles.date} dateTime={start}>
          <span className={styles.dateCaption}>{fmt(start, { weekday: "long" })}</span>
          <span className={styles.dateScript}>{fmt(start, { month: "long", day: "numeric" })}</span>
          <span className={styles.dateCaption}>{fmt(start, { year: "numeric" })}</span>
        </time>
        <div className={styles.dateFlourish} aria-hidden="true">♡</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.tagline}>{tagline}</p>

        {/* Time and location details */}
        <div className={styles.details}>
          <p className={styles.row}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <span>{timeDisplay}</span>
          </p>
          <div className={styles.venue}>
            <p className={styles.venueLabel}>Venue</p>
            <p className={styles.row}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21s-7-6.2-7-11.2A7 7 0 0 1 19 9.8C19 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.8" r="2.4" />
              </svg>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.place}
              >
                {place || venue.name}
              </a>
            </p>
          </div>
        </div>

        <div className={styles.actions}>
          <p className={styles.calendarLabel}>Add to calendar</p>
          <CalendarButton
            title={`${title} - Balaji & Harsa`}
            start={toCalendarStamp(start)}
            end={toCalendarStamp(endIso)}
            location={place || venue.name}
            description={`Join us to celebrate the ${title} of Balaji & Harsa at ${place || venue.name}.\nMap: ${mapUrl}`}
            classes={{ group: styles.calendar, apple: styles.calendarLink, google: styles.calendarLink }}
          />
          <a
            className={styles.directions}
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>
      </div>
    </article>
  );
}
