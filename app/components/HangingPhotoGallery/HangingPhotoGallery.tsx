"use client";

import { useState } from "react";
import FloatingHearts from "../FloatingHearts/FloatingHearts";
import { ClosingPrint, MemoryPrint, memories } from "../PhotoGallery/GalleryPrints";
import Reveal from "../Reveal/Reveal";
import styles from "./HangingPhotoGallery.module.css";

const heartPositions = [
  [5, 6], [16, 14], [84, 11], [94, 24], [4, 43],
  [96, 55], [8, 72], [91, 79], [17, 93], [79, 96],
] as const;

export default function HangingPhotoGallery() {
  const [zoomedPhoto, setZoomedPhoto] = useState<string | null>(null);

  return (
    <section className={styles.section} aria-labelledby="hanging-gallery-heading">
      <FloatingHearts positions={heartPositions} />
      <Reveal>
        <h2 className={styles.title} id="hanging-gallery-heading">Moments on a String</h2>
      </Reveal>

      <div className={styles.display}>
        {memories.map((memory, index) => (
          <div className={styles.slot} key={memory.src}>
            <MemoryPrint
              memory={memory}
              clipClassName={styles.binder}
              delay={(index % 3) * 0.12}
              isZoomed={zoomedPhoto === memory.src}
              onZoom={() => setZoomedPhoto(zoomedPhoto === memory.src ? null : memory.src)}
            />
          </div>
        ))}
        <div className={styles.slot}>
          <ClosingPrint clipClassName={styles.binder} />
        </div>
      </div>
    </section>
  );
}
