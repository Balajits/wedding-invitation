"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./TempleDoor.module.css";

// Images live in /public/images
const DEITY_SRC = "/temple2.jpg"; // <- you still need to save this one
const DEITY_ALT = "Lord Venkateswara with Goddess Padmavathi";
const DOOR_LEFT = "/door-left.jpg";
const DOOR_RIGHT = "/door-right.jpg";
const DOOR_FULL = "/door-full.jpg";

const EASE = [0.65, 0, 0.35, 1];

// Timeline (seconds after clicking "Open invitation")
const OPEN_DURATION = 2.4; // doors swing open
const HOLD = 2.2; // deity stays on screen before fading to Hero

function Leaf({ side, open, reduce }) {
  const angle = side === "left" ? 100 : -100;

  const variants = {
    closed: { rotateY: 0, opacity: 1 },
    open: reduce
      ? { opacity: 0, transition: { duration: 0.6 } }
      : { rotateY: angle, transition: { duration: OPEN_DURATION, ease: EASE } },
  };

  return (
    <motion.div
      className={`${styles.leaf} ${styles[side]}`}
      style={{ backgroundImage: `url(${side === "left" ? DOOR_LEFT : DOOR_RIGHT})` }}
      variants={variants}
      initial={false}
      animate={open ? "open" : "closed"}
    >
      {/* leaf darkens as it swings away from the light */}
      <motion.span
        className={styles.shade}
        variants={{
          closed: { opacity: 0 },
          open: {
            opacity: reduce ? 0 : 0.85,
            transition: { duration: OPEN_DURATION, ease: EASE },
          },
        }}
      />
    </motion.div>
  );
}

export default function TempleDoor({ onReveal, onDone }) {
  const reduce = useReducedMotion();
  const [opening, setOpening] = useState(false);

  const openTime = reduce ? 0.6 : OPEN_DURATION;
  const hold = reduce ? 1.4 : HOLD;
  const revealAt = openTime + hold;

  // Lock page scroll while the intro is on screen.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Start the Hero entrance as the whole intro begins to fade out.
  useEffect(() => {
    if (!opening) return;
    const t = setTimeout(onReveal, revealAt * 1000);
    return () => clearTimeout(t);
  }, [opening, revealAt, onReveal]);

  return (
    <motion.div
      className={styles.overlay}
      role="dialog"
      aria-label="Wedding invitation cover"
      initial={false}
      animate={{ opacity: opening ? 0 : 1 }}
      transition={{
        duration: reduce ? 0.8 : 1.2,
        delay: opening ? revealAt : 0,
        ease: "easeInOut",
      }}
      style={{ pointerEvents: opening ? "none" : "auto" }}
      onAnimationComplete={() => {
        if (opening) onDone();
      }}
    >
      {/* Layer 1: the deity, waiting behind the doors */}
      <motion.div
        className={styles.deity}
        initial={false}
        animate={{ scale: opening && !reduce ? 1 : 1.12 }}
        transition={{ duration: 4, ease: "easeOut" }}
      >
        <Image
          src={DEITY_SRC}
          alt=""
          fill
          sizes="100vw"
          priority
          className={styles.deityBackdrop}
        />
        <Image
          src={DEITY_SRC}
          alt={DEITY_ALT}
          fill
          sizes="100vw"
          priority
          className={styles.deityImg}
        />
        {/* golden light flooding out as the doors open */}
        <motion.div
          className={styles.glow}
          initial={false}
          animate={{ opacity: opening ? 0 : 1 }}
          transition={{ duration: 2.4, delay: 0.2 }}
        />
        <motion.p
          className={styles.blessing}
          initial={false}
          animate={{ opacity: opening ? 1 : 0 }}
          transition={{ duration: 1, delay: opening ? openTime - 0.2 : 0 }}
        >
          Om Namo Venkatesaya
        </motion.p>
      </motion.div>

      {/* Layer 2: blurred door photo fills the screen around the door
          (only visible on screens wider than the door), then fades away */}
      <motion.div
        className={styles.surround}
        style={{ backgroundImage: `url(${DOOR_FULL})` }}
        initial={false}
        animate={{ opacity: opening ? 0 : 1 }}
        transition={{ duration: reduce ? 0.6 : 1.6, delay: opening && !reduce ? 0.5 : 0 }}
      />

      {/* Layer 3: the two golden door leaves */}
      <div className={styles.doorsWrap}>
        <div className={styles.doors}>
          <Leaf side="left" open={opening} reduce={reduce} />
          <Leaf side="right" open={opening} reduce={reduce} />
        </div>
      </div>

      {/* Layer 4: invitation card, centred on the door */}
      <div className={styles.inviteWrap}>
        <motion.div
          className={styles.invite}
          initial={false}
          animate={{ opacity: opening ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.lead}>With the blessings of God and our elders</p>
          <h2 className={styles.title}>We invite you to our wedding</h2>
          <button
            type="button"
            className={styles.cta}
            onClick={() => setOpening(true)}
            disabled={opening}
          >
            Open invitation
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}