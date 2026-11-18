import FloatingHearts from "../FloatingHearts/FloatingHearts";
import Reveal from "../Reveal/Reveal";
import EventCard from "../EventCard/EventCard";
import { weddingData } from "../../data/weddingData";
import styles from "./EventsVenue.module.css";

const heartPositions = [
  [8, 12], [19, 3], [34, 18], [69, 13], [83, 6], [93, 20],
  [4, 34], [13, 48], [88, 39], [96, 57], [6, 72], [17, 88],
  [39, 94], [63, 83], [85, 93], [94, 76],
] as const;

export default function EventsVenue() {
  const { eventsSection, events, venue } = weddingData;

  return (
    <section className={styles.section} aria-label="Wedding events and venue">
      <FloatingHearts positions={heartPositions} />

      <Reveal>
        <header className={styles.header}>
          <p className={styles.eyebrow}>{eventsSection.eyebrow}</p>
          <h2 className={styles.title}>{eventsSection.title}</h2>
          <p className={styles.note}>{eventsSection.note}</p>
        </header>
      </Reveal>

      <div className={styles.cards}>
        {events.map((event) => (
          <Reveal key={event.id} y={24} className={styles.cardWrap}>
            <EventCard event={event} venue={venue} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
