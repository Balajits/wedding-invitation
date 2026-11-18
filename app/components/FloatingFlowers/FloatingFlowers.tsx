import styles from "./FloatingFlowers.module.css";

interface FlowerConfig {
  left: string;
  size: number;
  delay: number;
  dur: number;
  tone: 1 | 2 | 3;
}

// Fixed values (not random) so server and client render the same markup
const FLOWERS: FlowerConfig[] = [
  { left: "3%",  size: 30, delay: 0,   dur: 14,   tone: 1 },
  { left: "10%", size: 18, delay: 6,   dur: 11,   tone: 2 },
  { left: "17%", size: 26, delay: 2.5, dur: 16,   tone: 3 },
  { left: "25%", size: 16, delay: 9,   dur: 12,   tone: 1 },
  { left: "33%", size: 34, delay: 4,   dur: 17,   tone: 2 },
  { left: "41%", size: 20, delay: 11,  dur: 13,   tone: 3 },
  { left: "49%", size: 14, delay: 1,   dur: 12,   tone: 1 },
  { left: "57%", size: 28, delay: 7.5, dur: 15,   tone: 2 },
  { left: "65%", size: 18, delay: 3,   dur: 11.5, tone: 3 },
  { left: "72%", size: 32, delay: 10,  dur: 16,   tone: 1 },
  { left: "80%", size: 22, delay: 5,   dur: 13,   tone: 2 },
  { left: "87%", size: 16, delay: 8,   dur: 12,   tone: 3 },
  { left: "94%", size: 30, delay: 1.8, dur: 15,   tone: 1 },
];

function Flower({ tone }: { tone: 1 | 2 | 3 }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={styles[`tone${tone}`]}>
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx="20" cy="11" rx="6" ry="10" transform={`rotate(${r} 20 20)`} />
      ))}
      <circle cx="20" cy="20" r="4" className={styles.center} />
    </svg>
  );
}

export default function FloatingFlowers({ burst = false }: { burst?: boolean }) {
  return (
    <div className={`${styles.field} ${burst ? styles.burst : ""}`} aria-hidden="true">
      {FLOWERS.map((f, i) => (
        <span
          key={i}
          className={styles.flower}
          style={{
            left: f.left,
            width: f.size,
            height: f.size,
            animationDelay: `-${f.delay}s`,
            animationDuration: `${f.dur}s`,
          }}
        >
          <Flower tone={f.tone} />
        </span>
      ))}
    </div>
  );
}
