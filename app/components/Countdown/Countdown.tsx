"use client";

import { useEffect, useState } from "react";
import Reveal from "../Reveal/Reveal";
import { weddingData } from "../../data/weddingData";
import styles from "./Countdown.module.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: string): TimeLeft {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
}

function Unit({ value, label }: { value: number | null; label: string }) {
  return (
    <div className={styles.unit}>
      <span className={styles.number}>{value === null ? "--" : String(value).padStart(2, "0")}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

function Heart() {
  return (
    <svg className={styles.heart} viewBox="0 0 24 22" aria-hidden="true">
      <path d="M12 21C5 15 1 11.6 1 7.2 1 4 3.5 1.6 6.6 1.6c2 0 4 1 5.4 3 1.4-2 3.4-3 5.4-3C20.5 1.6 23 4 23 7.2 23 11.6 19 15 12 21z" />
    </svg>
  );
}

export default function Countdown() {
  const { targetDate, lead, between, announce } = weddingData.countdown;
  const [t, setT] = useState<TimeLeft | null>(null); // null on first render so server and client match

  useEffect(() => {
    setT(getTimeLeft(targetDate));
    const id = setInterval(() => setT(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <div className={styles.wrap}>
      <Reveal>
        <p className={styles.lead}>
          <span>{lead[0]}</span> <span>{lead[1]}</span>
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <p className={styles.between}>
          <span>{between[0]}</span> <span>{between[1]}</span>
        </p>
      </Reveal>

      {/* <Reveal delay={0.1} y={36}>
        <p className={styles.closer}>{closer}</p>
      </Reveal> */}

      <Reveal delay={0.1}>
        <div className={styles.announceWrap}>
          <Heart />
          <p className={styles.announce}>
            <span>{announce[0]}</span>
            <br />
            <span className={styles.announceNames}>&quot;{announce[1]}&quot;</span>
            <br />
            <span>{announce[2]}</span>
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2} y={40}>
        <div className={styles.timer} role="timer" aria-live="off">
          <Unit value={t ? t.days : null} label="Days" />
          <Unit value={t ? t.hours : null} label="Hours" />
          <Unit value={t ? t.minutes : null} label="Minutes" />
          <Unit value={t ? t.seconds : null} label="Seconds" />
        </div>
      </Reveal>
    </div>
  );
}
