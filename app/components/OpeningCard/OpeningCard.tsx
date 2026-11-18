"use client";

import { useState, type CSSProperties } from "react";
import OpenButton from "../OpenButton/OpenButton";
import { weddingData } from "../../data/weddingData";
import styles from "./OpeningCard.module.css";

const PETALS: number[] = Array.from({ length: 14 }, (_, i) => i);

interface OpeningCardProps {
  onOpen?: () => void;
  onOpening?: () => void;
}

export default function OpeningCard({ onOpen, onOpening }: OpeningCardProps) {
  const [opening, setOpening] = useState<boolean>(false);
  const { title, groom, bride, quote, date } = weddingData;

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    onOpening?.();
    setTimeout(() => onOpen?.(), 2800); // flip (1.7s) + a moment on the back
  };

  return (
    <main className={`${styles.stage} ${opening ? styles.opening : ""}`}>
      {/* floater = gentle up/down movement, flipper = 3D flip. Kept separate so transforms don't clash */}
      <div className={styles.floater}>
        <div className={styles.flipper}>
          {/* FRONT */}
          <section className={`${styles.face} ${styles.front}`} aria-label="Wedding invitation cover">
            <div className={styles.frame} />
            <div className={styles.content}>
              <h1 className={styles.title}>{title}</h1>

              <div className={styles.names}>
                <span className={styles.name}>{groom}</span>
                <span className={styles.and}>&amp;</span>
                <span className={styles.name}>{bride}</span>
              </div>

              <p className={styles.quote}>
                {quote[0]}
                <br />
                {quote[1]}
              </p>

              {/* <p className={styles.date}></p> */}
            </div>
          </section>

          {/* BACK (revealed after flip) */}
          <section className={`${styles.face} ${styles.back}`} aria-hidden="true">
            <div className={styles.frameBack} />
            <div className={styles.backContent}>
              <span className={styles.monogram}>
                {groom[0]} <i>&amp;</i> {bride[0]}
              </span>
              <p className={styles.welcome}>Welcome to our wedding</p>
            </div>
          </section>
        </div>

        {/* petals bursting out during the flip */}
        {opening && (
          <div className={styles.burst} aria-hidden="true">
            {PETALS.map((i) => (
              <span
                key={i}
                className={styles.petal}
                style={
                  {
                    "--angle": `${(360 / PETALS.length) * i}deg`,
                    "--dist": `${150 + (i % 3) * 50}px`,
                    animationDelay: `${0.35 + (i % 4) * 0.06}s`,
                  } as CSSProperties
                }
              />
            ))}
          </div>
        )}
      </div>

      <div className={styles.action}>
        <OpenButton onClick={handleOpen} disabled={opening} />
      </div>
    </main>
  );
}
