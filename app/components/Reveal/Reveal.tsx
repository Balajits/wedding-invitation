"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import styles from "./Reveal.module.css";

interface RevealProps {
  children: ReactNode;
  /** seconds, use it to stagger items */
  delay?: number;
  /** start offset in px (vertical) */
  y?: number;
  /** start offset in px (horizontal), e.g. -60 slides in from the left */
  x?: number;
  className?: string;
}

/** Wrap anything in <Reveal> to fade + slide it in when it scrolls into view. */
export default function Reveal({ children, delay = 0, y = 28, x = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect(); // animate once
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.visible : ""} ${className}`}
      style={{ "--delay": `${delay}s`, "--y": `${y}px`, "--x": `${x}px` } as CSSProperties}
    >
      {children}
    </div>
  );
}
