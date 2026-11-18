import {
  Camera, Flame, Flower2, Gem, HeartHandshake, Sparkles, Utensils,
  type LucideIcon,
} from "lucide-react";
import { weddingData, type TimelineMilestone } from "../../data/weddingData";
import FloatingHearts from "../FloatingHearts/FloatingHearts";
import Reveal from "../Reveal/Reveal";
import styles from "./WeddingTimeline.module.css";

const icons: Record<TimelineMilestone["icon"], LucideIcon> = {
  welcome: HeartHandshake,
  rings: Gem,
  photos: Camera,
  meal: Utensils,
  flowers: Flower2,
  ceremony: Flame,
  blessings: Sparkles,
};

const heartPositions = [
  [4, 9], [18, 2], [79, 4], [93, 10], [3, 39],
  [95, 53], [5, 75], [93, 84], [25, 96], [72, 97],
] as const;

const eventDate = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  weekday: "long",
  day: "numeric",
  month: "long",
});

const milestoneTime = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Kolkata",
  hour: "numeric",
  minute: "2-digit",
});

export default function WeddingTimeline() {
  return (
    <section className={styles.section} aria-labelledby="wedding-timeline">
      <FloatingHearts positions={heartPositions} />
      <Reveal>
        <header className={styles.heading}>
          <div className={styles.flourish} aria-hidden="true">♡</div>
          <h2 id="wedding-timeline">Wedding Timeline</h2>
          <p>Proposed schedule</p>
        </header>
      </Reveal>

      <div className={styles.cards}>
        {weddingData.events.map(({ id, title, start, timeline }) => timeline?.length ? (
          <Reveal key={id} y={18} className={styles.cardWrap}>
            <article className={styles.card}>
              <header className={styles.cardHeading}>
                <time dateTime={start}>{eventDate.format(new Date(start))}</time>
                <h3>{title}</h3>
              </header>

              <ol className={styles.timeline} role="list">
                {timeline.map(({ title, icon, start }) => {
                  const Icon = icons[icon];
                  return (
                    <li key={title} className={styles.milestone}>
                      <span className={styles.icon} aria-hidden="true">
                        <Icon size={30} strokeWidth={1.45} />
                      </span>
                      <div className={styles.milestoneText}>
                        <time dateTime={start}>{milestoneTime.format(new Date(start))}</time>
                        <span>{title}</span>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </article>
          </Reveal>
        ) : null)}
      </div>
    </section>
  );
}
