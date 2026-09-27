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
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
      >
        ✦
      </motion.div>
      <motion.div
        className="countdown-story"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="story-lines">
          <strong>Diwali will fill the skies with light,</strong>
          <br />
          <strong>and the New Year will bring a new beginning.</strong>
        </p>

        <p className="story-transition">
          And somewhere between all these beautiful <br />
          <br className="desktop-break" />
          celebrations...
        </p>

        <h2 className="story-highlight">
          our own celebration is getting closer. 💍
        </h2>
      </motion.div>


      {/* DECORATION */}

      {/* <motion.div
        className="countdown-decoration"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
      >
        ✦
      </motion.div> */}


      {/* COUNTDOWN TITLE */}

      <motion.p
        className="countdown-label"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.4,
        }}
      >
        The countdown to Harsa & Balaji
      </motion.p>

      <motion.h2
        className="countdown-title"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.5,
        }}
      >
          has officially begun.
        
      </motion.h2>


      {/* TIMER */}

      <div className="countdown-timer">

        {values.map((item) => (
          <div
            className="countdown-item"
            key={item.label}
          >
            <motion.div
              className="countdown-number"
              key={item.value}
              initial={{
                opacity: 0.5,
                y: -5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.25,
              }}
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