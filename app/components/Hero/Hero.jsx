"use client";

import { motion, useReducedMotion } from "framer-motion";
import { wedding } from "../../data/wedding";
import styles from "./Hero.module.css";

export default function Hero({ play = true }) {
  const reduce = useReducedMotion();

  // One orchestrated entrance: arch draws in, then names, then details.
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.35, delayChildren: 0.1 },
    },
  };

  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const arch = {
    hidden: { opacity: 0, scale: reduce ? 1 : 0.92 },
    show: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  return (
    <section className={styles.hero} aria-label="Wedding invitation cover">
      <motion.div
        className={styles.stage}
        variants={container}
        initial="hidden"
        animate={play ? "show" : "hidden"}
      >
        <motion.div className={styles.archOuter} variants={arch}>
          <div className={styles.archInner}>
            <motion.p className={styles.tagline} variants={rise}>
              {wedding.tagline}
            </motion.p>

            <motion.h1 className={styles.names} variants={rise}>
              <span className={styles.name}>{wedding.bride}</span>
              <span className={styles.amp} aria-hidden="true">
                &amp;
              </span>
              <span className={styles.name}>{wedding.groom}</span>
            </motion.h1>

            <motion.div className={styles.details} variants={rise}>
              <time dateTime={wedding.dateISO} className={styles.date}>
                {wedding.dateLabel}
              </time>
              <span className={styles.city}>{wedding.city}</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}