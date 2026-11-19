import type { CSSProperties } from "react";
import styles from "./FloatingHearts.module.css";

interface FloatingHeartsProps {
  positions: readonly (readonly [number, number])[];
}

export default function FloatingHearts({ positions }: FloatingHeartsProps) {
  return (
    <div className={styles.hearts} aria-hidden="true">
      {positions.map(([left, top], index) => (
        <span
          key={index}
          className={styles.heart}
          style={{
            left: `${left}%`,
            top: `${top}%`,
            "--heart-size": `${1.1 + (index % 4) * 0.55}rem`,
            "--heart-delay": `${-index * 1.3}s`,
            "--heart-duration": `${9 + (index % 5)}s`,
          } as CSSProperties}
        >
          {index % 2 === 0 ? "♡" : "♥"}
        </span>
      ))}
    </div>
  );
}
