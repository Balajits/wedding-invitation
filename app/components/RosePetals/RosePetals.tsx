import type { CSSProperties } from "react";
import type { ThemePreset } from "@/theme/theme";
import styles from "./RosePetals.module.css";

interface PetalConfig {
  x: number;     // start position (%)
  s: number;     // size (px)
  d: number;     // fall seconds
  delay: number; // negative start offset
  sway: number;  // sideways drift (px)
  c: number;     // index into petalGradients (theme/theme.ts)
}

// Fixed values (not random) so server and client markup match
const PETALS: PetalConfig[] = [
  { x: 2,  s: 22, d: 13,   delay: 0,    sway: 40, c: 0 },
  { x: 8,  s: 16, d: 10,   delay: 6,    sway: 30, c: 2 },
  { x: 13, s: 28, d: 16,   delay: 3,    sway: 55, c: 1 },
  { x: 19, s: 18, d: 11,   delay: 9,    sway: 35, c: 3 },
  { x: 25, s: 24, d: 14,   delay: 1.5,  sway: 50, c: 0 },
  // { x: 31, s: 14, d: 9,    delay: 7,    sway: 28, c: 2 },
  // { x: 37, s: 30, d: 17,   delay: 4.5,  sway: 60, c: 1 },
  // { x: 43, s: 20, d: 12,   delay: 11,   sway: 38, c: 3 },
  // { x: 49, s: 16, d: 10,   delay: 2,    sway: 32, c: 0 },
  // { x: 55, s: 26, d: 15,   delay: 8,    sway: 52, c: 2 },
  // { x: 61, s: 18, d: 11,   delay: 5,    sway: 36, c: 1 },
  // { x: 67, s: 32, d: 18,   delay: 0.8,  sway: 64, c: 3 },
  { x: 73, s: 15, d: 9.5,  delay: 10,   sway: 30, c: 0 },
  { x: 79, s: 24, d: 13,   delay: 3.5,  sway: 46, c: 2 },
  { x: 85, s: 20, d: 12,   delay: 7.5,  sway: 40, c: 1 },
  { x: 91, s: 28, d: 16,   delay: 1,    sway: 56, c: 3 },
  { x: 96, s: 16, d: 10.5, delay: 6.5,  sway: 30, c: 0 },
  { x: 22, s: 12, d: 8,    delay: 4,    sway: 26, c: 1 },
  { x: 52, s: 13, d: 8.5,  delay: 12,   sway: 28, c: 3 },
  { x: 88, s: 13, d: 9,    delay: 9.5,  sway: 26, c: 2 },
];

// a soft rose petal: rounded body, slight notch at the top edge
const PETAL_PATH =
  "M20 3 C24 1 28 3 30 6 C38 12 40 24 32 34 C28 39 12 39 8 34 C0 24 2 12 10 6 C12 3 16 1 20 3 Z";

export default function RosePetals({ gradients }: { gradients: ThemePreset["petals"] }) {
  const count = gradients.length;

  return (
    <div className={styles.field} aria-hidden="true">
      {/* gradients defined once, reused by every petal */}
      <svg width="0" height="0" style={{ position: "absolute" }} focusable="false">
        <defs>
          {gradients.map(([from, to], i) => (
            <linearGradient key={i} id={`petalGrad${i}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={from} />
              <stop offset="1" stopColor={to} />
            </linearGradient>
          ))}
        </defs>
      </svg>

      {PETALS.map((p, i) => (
        <span
          key={i}
          className={styles.petal}
          style={
            {
              left: `${p.x}%`,
              width: p.s,
              height: p.s * 1.1,
              animationDuration: `${p.d}s`,
              animationDelay: `-${p.delay}s`,
              "--sway": `${p.sway}px`,
            } as CSSProperties
          }
        >
          <svg
            viewBox="0 0 40 40"
            className={styles.tumble}
            style={{ animationDuration: `${p.d / 3}s` }}
          >
            <path d={PETAL_PATH} fill={`url(#petalGrad${p.c % count})`} />
            <path d="M20 6 C19 16 19 26 20 35" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />
          </svg>
        </span>
      ))}
    </div>
  );
}
