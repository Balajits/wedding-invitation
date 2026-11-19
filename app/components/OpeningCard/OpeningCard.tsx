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

function CornerFloral({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M9 71C8 45 16 28 27 22M9 71C18 42 36 31 68 28" />
      <path d="M14 49C5 44 3 34 6 28C13 33 16 40 14 49ZM20 42C22 33 30 30 37 32C33 39 26 43 20 42ZM31 43C37 43 43 46 45 53C36 53 32 49 31 43ZM45 34C47 26 52 22 59 21C58 28 53 33 45 34ZM54 31C63 25 71 25 76 29C69 34 62 34 54 31Z" />
      <path d="M27 22C17 24 13 17 19 14C15 7 24 5 27 11C31 5 39 9 35 15C42 19 36 26 27 22Z" />
      <circle cx="27" cy="17" r="2" />
    </svg>
  );
}

export default function OpeningCard({ onOpen, onOpening }: OpeningCardProps) {
  const [opening, setOpening] = useState<boolean>(false);
  const { title, groom, bride, quote } = weddingData;

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
            <CornerFloral className={styles.cornerFloral} />
            <CornerFloral className={`${styles.cornerFloral} ${styles.cornerFloralBottom}`} />
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
            <CornerFloral className={styles.cornerFloral} />
            <CornerFloral className={`${styles.cornerFloral} ${styles.cornerFloralBottom}`} />
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
