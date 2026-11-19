import Image from "next/image";
import { weddingData } from "../../data/weddingData";
import FloatingHearts from "../FloatingHearts/FloatingHearts";
import styles from "./WeddingFooter.module.css";

const heartPositions = [
  [5, 18], [16, 8], [30, 20], [72, 12], [87, 8], [94, 25],
  [9, 50], [18, 70], [84, 54], [92, 69], [29, 88], [74, 86],
] as const;

const signatureHearts = [[12, 24], [77, 20], [18, 70], [79, 76]] as const;

export default function WeddingFooter() {
  const { groom, bride } = weddingData;

  return (
    <footer className={styles.footer}>
      <FloatingHearts positions={heartPositions} />

      <div className={styles.card}>
        <div className={styles.message}>
          <div className={styles.flourish} aria-hidden="true">♡</div>
          <h2 className={styles.title}>See you at the wedding</h2>
          <p className={styles.welcome}>
            We can’t wait to welcome you. Having you there to celebrate and bless
            our marriage would mean the world to us.
          </p>
          <blockquote className={styles.quote}>
            “Of all the days we’ll share, we’ll always remember the one that began
            with ‘I do.’”
          </blockquote>
        </div>
        <div className={styles.signature}>
          <FloatingHearts positions={signatureHearts} />
          <p>With love,</p>
          <Image
            src="/logo.png"
            alt={`${groom} & ${bride}`}
            width={294}
            height={254}
            className={styles.logo}
          />
        </div>
      </div>
    </footer>
  );
}
