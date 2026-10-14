
"use client";

import { motion } from "framer-motion";
import "./WeddingPhotos.css";

const memories = [
  {
    image: "/photo1.jpeg",
    alt: "Our first memory",
    caption: "It all started with a little moment…",
    rotation: -5,
  },
  {
    image: "/photo2.jpeg",
    alt: "A favourite memory together",
    caption: "Somewhere along the way, you became my favourite person.",
    rotation: 4,
  },
  {
    image: "/photo3.jpeg",
    alt: "A beautiful moment together",
    caption: "With you, every moment felt more beautiful.",
    rotation: -4,
  },
  {
    image: "/photo4.jpeg",
    alt: "Our official beginning",
    caption: "And then… we made it official. ♡",
    rotation: 5,
  },
];

const stages = [
  { title: "Blooming", symbol: "🌷" },
  { title: "Growing", symbol: "🌱" },
  { title: "Flourishing", symbol: "🌸" },
  { title: "Almost There", symbol: "🦋" },
  { title: "Forever", symbol: "♡" },
];

export default function WeddingPhotos() {
  return (
    <section className="wedding-photos">
      {/* SECTION HEADING */}
      <motion.header
        className="wedding-photos-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="photos-ornament">✦</span>
        <p>OUR STORY</p>

        <h2>
          From Unofficial
          <span>to Official</span>
        </h2>

        <div className="photos-heading-line">
          <span />
          <i>♡</i>
          <span />
        </div>
      </motion.header>

      {/* FOUR PHOTOS ON ONE CONTINUOUS S-CURVE ROPE */}
      <div className="memory-rope">
        <svg
          className="rope-line"
          viewBox="0 0 100 1200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="wedding-rope-gradient"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#c5a1a0" />
              <stop offset="48%" stopColor="#94736d" />
              <stop offset="100%" stopColor="#d4b4a8" />
            </linearGradient>
          </defs>

          <path
            className="rope-shadow"
            d="
              M 28 0
              C 70 70, 78 115, 60 170
              S 23 280, 45 360
              S 80 470, 57 550
              S 20 660, 43 740
              S 79 850, 57 930
              S 25 1060, 48 1200
            "
          />

          <path
            className="rope-main"
            d="
              M 28 0
              C 70 70, 78 115, 60 170
              S 23 280, 45 360
              S 80 470, 57 550
              S 20 660, 43 740
              S 79 850, 57 930
              S 25 1060, 48 1200
            "
          />
        </svg>

        {memories.map((memory, index) => (
          <motion.article
            key={memory.image}
            className={`memory memory-${index + 1}`}
            initial={{ opacity: 0, y: 35, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              ease: "easeOut",
            }}
          >
            {/* REALISTIC WOODEN CLIP */}
            <div className="memory-clip" aria-hidden="true">
              {/* <span className="clip-loop" />
              <span className="clip-body" />
              <span className="clip-jaw" /> */}
            </div>

            {/* POLAROID FRAME + CAPTION */}
            <div
              className="memory-frame"
              style={{
                "--photo-rotation": `${memory.rotation}deg`,
              } as React.CSSProperties}
            >
              <div className="memory-photo">
                <img
                  src={memory.image}
                  alt={memory.alt}
                  loading="lazy"
                />
              </div>

              <p className="memory-caption">{memory.caption}</p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* FIVE ANIMATED FLOWER & BUTTERFLY STAGES */}
      <motion.div
        className="wedding-journey"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <span className="journey-ornament">✦</span>
        <p className="journey-eyebrow">THE NEXT CHAPTER</p>
        <h2>Our Wedding Is Coming...</h2>

        <div className="journey-divider">
          <span />
          <i>♡</i>
          <span />
        </div>

        <div className="journey-stages">
          <div className="journey-progress-line">
            <motion.div
              className="journey-progress-fill"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              className={`journey-stage journey-stage-${index + 1}`}
              initial={{ opacity: 0, y: 18, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.65,
                delay: index * 0.18,
              }}
            >
              <motion.div
                className="journey-flower"
                animate={{
                  y: [0, -5, 0],
                  rotate: index === 3 ? [-5, 5, -5] : [0, 3, 0],
                }}
                transition={{
                  duration: 3 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span>{stage.symbol}</span>
                <i className="flower-sparkle sparkle-one">✦</i>
                <i className="flower-sparkle sparkle-two">✧</i>
              </motion.div>

              <p className="journey-stage-number">
                0{index + 1}
              </p>
              <h3>{stage.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="journey-butterflies" aria-hidden="true">
          <motion.span
            animate={{ x: [0, 12, 0], y: [0, -8, 0], rotate: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            🦋
          </motion.span>
          <motion.span
            animate={{ x: [0, -10, 0], y: [0, 7, 0], rotate: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            🦋
          </motion.span>
        </div>
      </motion.div>

      {/* CLOSING */}
      <motion.footer
        className="photos-closing"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>✦</span>
        <p>Harsa & Balaji</p>
        <small>From unofficial to official.</small>
        <span className="closing-heart">♡</span>
      </motion.footer>
    </section>
  );
}
