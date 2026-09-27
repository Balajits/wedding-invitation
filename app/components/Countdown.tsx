"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const weddingDate = new Date(
  "2026-12-14T09:00:00+05:30"
).getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [weddingDay, setWeddingDay] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const difference = weddingDate - Date.now();

      if (difference <= 0) {
        setWeddingDay(true);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  if (weddingDay) {
    return (
      <motion.section
        className="countdown-section wedding-day-message"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="countdown-decoration">✦</div>

        <p className="countdown-label">
          THE DAY HAS ARRIVED
        </p>

        <h2>And our forever begins...</h2>

        <div className="countdown-quote">
          “Two hearts, one journey,
          <br />
          and a lifetime of tomorrows.”
        </div>

        <div className="countdown-date">
          14 · 12 · 2026
        </div>

        <div className="countdown-decoration">✦</div>

        <div className="countdown-done">
          <span>♡</span>
          DONE
          <span>♡</span>
        </div>

        <p className="countdown-names">
          Harsa & Balaji
        </p>

        <p className="countdown-forever">
          Forever begins here. ❤️
        </p>
      </motion.section>
    );
  }

  const values = [
    {
      value: timeLeft.days,
      label: "DAYS",
    },
    {
      value: timeLeft.hours,
      label: "HOURS",
    },
    {
      value: timeLeft.minutes,
      label: "MINUTES",
    },
    {
      value: timeLeft.seconds,
      label: "SECONDS",
    },
  ];

  return (
    <section className="countdown-section">
      <motion.div
        className="countdown-decoration"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        ✦
      </motion.div>

      <motion.p
        className="countdown-label"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        THE COUNTDOWN BEGINS
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Until we say “I do”
      </motion.h2>

      <div className="countdown-timer">
        {values.map((item) => (
          <div
            className="countdown-item"
            key={item.label}
          >
            <motion.div
              className="countdown-number"
              key={item.value}
              initial={{ opacity: 0.5, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {String(item.value).padStart(2, "0")}
            </motion.div>

            <div className="countdown-unit">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <div className="countdown-date">
        14 · 12 · 2026
      </div>

      <div className="countdown-decoration">
        ✦
      </div>
    </section>
  );
}