"use client";

import { useState, type ReactNode } from "react";
import { ClosingPrint, MemoryPrint, memories } from "./GalleryPrints";
import FloatingHearts from "../FloatingHearts/FloatingHearts";
import Reveal from "../Reveal/Reveal";
import styles from "./PhotoGallery.module.css";

const ropeArc = "M 8 0 Q 50 200 92 0";
const ropeTurns = [
  "M 92 0 C 99 12 99 88 92 100",
  "M 8 0 C 1 12 1 88 8 100",
];

const heartPositions = [
  [3, 4], [10, 10], [19, 2], [30, 5], [68, 3], [81, 6], [92, 4],
  [8, 18], [94, 19], [4, 28], [86, 32], [14, 37], [96, 42],
  [6, 49], [89, 55], [12, 58], [98, 64], [5, 70], [83, 74],
  [16, 79], [95, 85], [9, 90], [90, 95], [26, 97], [73, 98],
] as const;

function RopeRow({ turn, children }: { turn?: string; children: ReactNode }) {
  return (
    <div className={styles.line}>
      {turn && (
        <svg className={styles.ropeTurn} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path className={styles.ropeStrand} d={turn} />
          <path className={styles.ropeTwist} d={turn} />
        </svg>
      )}
      <svg className={styles.ropeArc} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path className={styles.ropeStrand} d={ropeArc} />
        <path className={styles.ropeTwist} d={ropeArc} />
      </svg>
      <span className={styles.charm} aria-hidden="true">♥</span>
      {children}
    </div>
  );
}

export default function PhotoGallery() {
  const [zoomedPhoto, setZoomedPhoto] = useState<string | null>(null);

  return (
    <section className={styles.section} aria-labelledby="photo-gallery-heading">
      <FloatingHearts positions={heartPositions} />

      <Reveal>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>Our Story</p>
          <h2 id="photo-gallery-heading">From Unofficial to Official</h2>
          <span className={styles.flourish} aria-hidden="true">♡</span>
        </header>
      </Reveal>

      <div className={styles.gallery}>
        {memories.map((memory, index) => {
          const isZoomed = zoomedPhoto === memory.src;

          return (
            <RopeRow key={memory.src} turn={ropeTurns[index % 2]}>
              <MemoryPrint
                memory={memory}
                isZoomed={isZoomed}
                onZoom={() => setZoomedPhoto(isZoomed ? null : memory.src)}
              />
            </RopeRow>
          );
        })}
        <RopeRow>
          <ClosingPrint />
        </RopeRow>
      </div>
    </section>
  );
}
