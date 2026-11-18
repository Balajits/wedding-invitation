import RosePetals from "../RosePetals/RosePetals";
import Countdown from "../Countdown/Countdown";
import { weddingData } from "../../data/weddingData";
import type { ThemePreset } from "@/theme/theme";
import styles from "./HeroSection.module.css";

export default function HeroSection({ petals }: { petals: ThemePreset["petals"] }) {
  const { eyebrow, invite, groomName, brideName, tagline } = weddingData.hero;

  return (
    <section className={styles.hero} aria-label="Wedding invitation">
      {/* photo + overlay + petals stay fixed on screen while the text scrolls over them */}
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.photo} />
        <div className={styles.overlay} />
        <RosePetals gradients={petals} />
      </div>

      {/* screen 1: names */}
      <div className={styles.first}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <p className={styles.invite}>{invite}</p>

          <h1 className={styles.names}>
            <span className={styles.groom}>{groomName}</span>
            <span className={styles.weds}>Weds</span>
            <span className={styles.bride}>{brideName}</span>
          </h1>

          <p className={styles.tagline}>{tagline}</p>
        </div>

        {/* little arrow so guests know there is more below */}
        <svg className={styles.scrollHint} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 9l7 7 7-7" />
        </svg>
      </div>

      {/* screen 2: countdown */}
      <div className={styles.second}>
        <Countdown />
      </div>
    </section>
  );
}
