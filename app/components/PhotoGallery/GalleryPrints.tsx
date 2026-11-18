"use client";

import Image from "next/image";
import { useRef, type CSSProperties, type ReactNode } from "react";
import { Heart } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import styles from "./PhotoGallery.module.css";

export const memories = [
  {
    src: "/photo1.jpeg",
    alt: "Balaji and Harsa taking a selfie together",
    caption: "Our first unofficial moment- The meet that made us travel into one single journey <3",
    position: "70% center",
    tilt: -3,
  },
  {
    src: "/photo2.jpeg",
    alt: "The couple in traditional clothes at the temple",
    caption: "From normal temple visit to stepping into our official journey (family meet up)",
    tilt: 2,
  },
  {
    src: "/gallery/photo3.webp",
    alt: "The couple smiling at each other in front of a brick wall",
    caption: "⁠All the way planning for the event and a kutty hangout for us",
    position: "50% 75%",
    tilt: -2.5,
  },
  // {
  //   src: "/photo4.jpeg",
  //   alt: "A black-and-white silhouette of the couple by a window",
  //   caption: "A quiet moment, just the two of us.",
  //   tilt: 2.5,
  // },
  {
    src: "/gallery/photo5.webp",
    alt: "Balaji and Harsa holding hands in their engagement outfits",
    caption: "Officially we got hitched 🥳🥰",
    position: "50% 38%",
    tilt: -2,
  },
];

function HangingPrint({
  tilt = 0,
  clipClassName = styles.clip,
  delay = 0,
  children,
}: {
  tilt?: number;
  clipClassName?: string;
  delay?: number;
  children: ReactNode;
}) {
  const printRef = useRef<HTMLElement>(null);
  const inView = useInView(printRef, { amount: "some" });
  const reduceMotion = useReducedMotion();

  return (
    <motion.figure
      ref={printRef}
      className={styles.print}
      style={{ "--print-tilt": `${tilt}deg` } as CSSProperties}
      data-in-view={inView}
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, ease: "easeOut", delay: reduceMotion ? 0 : delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className={clipClassName} aria-hidden="true" />
      {children}
    </motion.figure>
  );
}

interface MemoryPrintProps {
  memory: (typeof memories)[number];
  isZoomed: boolean;
  onZoom: () => void;
  clipClassName?: string;
  delay?: number;
}

export function MemoryPrint({ memory, isZoomed, onZoom, clipClassName, delay }: MemoryPrintProps) {
  const { src, alt, caption, position, tilt } = memory;

  return (
    <HangingPrint tilt={tilt} clipClassName={clipClassName} delay={delay}>
      <button
        type="button"
        className={styles.photo}
        aria-label={`Zoom photo: ${alt}`}
        aria-pressed={isZoomed}
        onClick={onZoom}
      >
        <Image src={src} alt={alt} fill style={{ objectPosition: position }} />
      </button>
      <figcaption>{caption}</figcaption>
    </HangingPrint>
  );
}

export function ClosingPrint({ clipClassName, delay }: { clipClassName?: string; delay?: number }) {
  return (
    <HangingPrint clipClassName={clipClassName} delay={delay}>
      <div className={styles.loadingPhoto} aria-hidden="true">
        <div className={styles.loadingMark}>
          <span className={styles.loadingRing} />
          <Heart width="48%" height="48%" strokeWidth={1.4} />
        </div>
        <span className={styles.loadingLabel}>Loading…</span>
      </div>
      <figcaption className={styles.ending}>
        <h3>Our wedding is coming...</h3>
        <p>
          The journey of I and YOU is all set to become US just waiting for
          the perfect moment to tie the knots and make it mine 🥰 ♡
        </p>
      </figcaption>
    </HangingPrint>
  );
}
