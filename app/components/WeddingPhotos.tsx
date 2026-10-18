"use client";

import { useEffect, type CSSProperties, type ReactNode } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import "./WeddingPhotos.css";

/* =========================================
   DATA
========================================= */

type Memory = {
  image: string;
  alt: string;
  caption: string;
  /** resting angle of the photo (deg) */
  tilt: number;
  /** how far it swings either side of the tilt (deg) */
  swing: number;
  /** seconds for one full swing cycle */
  duration: number;
  /** negative delay so the photos never swing in sync */
  delay: number;
};

const memories: Memory[] = [
  {
    image: "/photo1.jpeg",
    alt: "Our first memory",
    caption: "Our first unofficial moment- The meet that made us travel into one single journey <3",
    tilt: -2.5,
    swing: 1.6,
    duration: 5.6,
    delay: -1.2,
  },
  {
    image: "/photo2.jpeg",
    alt: "A favourite memory together",
    caption: "From normal temple visit to stepping into our official journey (family meet up)",
    tilt: 2,
    swing: 1.3,
    duration: 6.4,
    delay: -3.1,
  },
  {
    image: "/photo3.jpeg",
    alt: "A beautiful moment together",
    caption: "⁠All the way planning for the event and a kutty hangout for us",
    tilt: -2,
    swing: 1.5,
    duration: 5.9,
    delay: -0.4,
  },
  // {
  //   image: "/photo4.jpeg",
  //   alt: "Our official beginning",
  //   caption: "⁠Finally we got hitched 🥳🥰",
  //   tilt: 2.5,
  //   swing: 1.4,
  //   duration: 6.8,
  //   delay: -2.3,
  // },
  {
    image: "/photo5.jpeg",
    alt: "Our official beginning",
    caption: "Officially we got hitched 🥳🥰",
    tilt: 2.5,
    swing: 1.4,
    duration: 6.8,
    delay: -2.3,
  },
];

/* =========================================
   ROPE GEOMETRY

   Everything (rope, nails, photos) lives in one
   600-wide coordinate system. The container keeps
   the same aspect ratio as the SVG viewBox, and the
   photos are positioned in % of that box, so the
   clips stay exactly on the rope on every screen.
========================================= */

const ROWS = memories.length + 1; // photo rows + the final "coming soon" card
const VB_W = 600;
const X_LEFT = 40;
const X_RIGHT = 560;
const TOP = 60;
const ROW_PITCH = 560; // vertical distance between rope rows
const SAG = 150; // how deep each rope swag hangs
const SAG_SWAY = 7; // rope "breathing" in the breeze
const CLIP_T = 0.36; // where along each swag the photo hangs (0–1)
const TURN_BULGE = 44; // how far the rope loops out at each nail
const CHARM_T = 0.82; // where the little heart charms hang on each swag
const COMING_T = 0.5; // the final card hangs from the middle of the last swag
const COMING_CARD_H = 500; // approx height of the final card (viewBox units)
const HEART_PATH =
  "M0 0 C -4 -5 -12 -2 -12 4 C -12 10 -4 14 0 19 C 4 14 12 10 12 4 C 12 -2 4 -5 0 0 Z";
const VB_H = TOP + ROW_PITCH * (ROWS - 1) + SAG + COMING_CARD_H + 30;

const WEDDING_DATE_LABEL = "14 / 12 / 2026";
const WEDDING_DATE_ISO = "2026-12-14";

const rowY = (row: number) => TOP + row * ROW_PITCH;
const isLeftToRight = (row: number) => row % 2 === 0;
const n = (value: number) => value.toFixed(2);

/** One continuous rope: swag → loop round a nail → swag … → final nail */
function ropePath(sag: number) {
  let d = `M ${X_LEFT} ${n(rowY(0))}`;

  for (let row = 0; row < ROWS; row++) {
    const y = rowY(row);
    const ltr = isLeftToRight(row);
    const xEnd = ltr ? X_RIGHT : X_LEFT;

    d += ` Q ${VB_W / 2} ${n(y + sag * 2)} ${xEnd} ${n(y)}`;

    if (row < ROWS - 1) {
      const out = xEnd + (ltr ? TURN_BULGE : -TURN_BULGE);
      d += ` C ${out} ${n(y + 60)} ${out} ${n(rowY(row + 1) - 60)} ${xEnd} ${n(
        rowY(row + 1)
      )}`;
    }
  }

  return d;
}

/** Point on a swag at position t (0–1), for clips and charms. */
function swagPoint(row: number, t: number, sag: number) {
  const ltr = isLeftToRight(row);
  const x0 = ltr ? X_LEFT : X_RIGHT;
  const x1 = ltr ? X_RIGHT : X_LEFT;

  return {
    x: x0 + (x1 - x0) * t,
    y: rowY(row) + 4 * sag * t * (1 - t),
  };
}

const clipPoint = (row: number, sag: number) => swagPoint(row, CLIP_T, sag);

const nails = Array.from({ length: ROWS }).flatMap((_, row) => [
  { x: X_LEFT, y: rowY(row), key: `l-${row}` },
  { x: X_RIGHT, y: rowY(row), key: `r-${row}` },
]);

/** every little heart charm: which swag, and where along it */
const charms = [
  ...memories.map((_, row) => ({ row, t: CHARM_T })),
  { row: ROWS - 1, t: 0.1 },
  { row: ROWS - 1, t: 0.9 },
];

/* =========================================
   ANIMATED HEARTS
========================================= */

/** tiny hearts that drift up and fade, then repeat */
function FloatingHearts({ delay, count = 2 }: { delay: number; count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <g
          key={i}
          className="float-heart"
          style={
            {
              animationDelay: `${delay + i * 2.3}s`,
              "--dx": `${i % 2 ? 12 : -12}px`,
            } as CSSProperties
          }
        >
          <path d={HEART_PATH} transform="scale(0.6)" fill="url(#wp-heart)" />
        </g>
      ))}
    </>
  );
}

/** a small heart hanging from the rope; it follows the rope's sway */
function HeartCharm({
  row,
  t,
  delay,
  wind,
}: {
  row: number;
  t: number;
  delay: number;
  wind: MotionValue<number>;
}) {
  const { x } = swagPoint(row, t, SAG);
  const y = useTransform(wind, (w) => swagPoint(row, t, SAG + w * SAG_SWAY).y);

  return (
    <motion.g style={{ x, y }}>
      <g className="heart-charm" style={{ animationDelay: `${delay}s` }}>
        <line className="charm-string" x1="0" y1="0" x2="0" y2="26" />
        <g transform="translate(0 26) scale(1.5)">
          <path
            className="charm-heart"
            d={HEART_PATH}
            fill="url(#wp-heart)"
            style={{ animationDelay: `${delay}s` }}
          />
        </g>
      </g>
      <g transform="translate(0 40)">
        <FloatingHearts delay={delay} />
      </g>
    </motion.g>
  );
}

/* =========================================
   A CARD HANGING FROM THE ROPE
========================================= */

type SwingConfig = {
  tilt: number;
  swing: number;
  duration: number;
  delay: number;
};

function HangingCard({
  row,
  t,
  order,
  config,
  className,
  wind,
  children,
}: {
  row: number;
  t: number;
  order: number;
  config: SwingConfig;
  className: string;
  wind: MotionValue<number>;
  children: ReactNode;
}) {
  const { x } = swagPoint(row, t, SAG);

  // The clip rides the rope as it gently breathes
  const top = useTransform(
    wind,
    (w) => `${(swagPoint(row, t, SAG + w * SAG_SWAY).y / VB_H) * 100}%`
  );

  const swingVars = {
    "--tilt": `${config.tilt}deg`,
    "--swing": `${config.swing}deg`,
    "--swing-duration": `${config.duration}s`,
    "--swing-delay": `${config.delay}s`,
  } as CSSProperties;

  return (
    <motion.article
      className={`memory ${className}`}
      style={{
        left: `${(x / VB_W) * 100}%`,
        top,
        x: "-50%",
        originX: 0.5,
        originY: 0,
      }}
      initial={{ opacity: 0, y: -26, rotate: order % 2 ? -9 : 9 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        opacity: { duration: 0.6, delay: order * 0.1 },
        y: { duration: 0.8, delay: order * 0.1, ease: "easeOut" },
        // spring = the card drops, swings and settles like it's on a real pin
        rotate: {
          type: "spring",
          stiffness: 38,
          damping: 5,
          delay: order * 0.1,
        },
      }}
    >
      <div className="memory-swing" style={swingVars}>
        {/* WOODEN CLOTHESPIN */}
        <div className="memory-clip" aria-hidden="true">
          <span className="pin-prong pin-prong-left" />
          <span className="pin-prong pin-prong-right" />
          <span className="pin-spring" />
        </div>

        {children}
      </div>
    </motion.article>
  );
}

/* =========================================
   A NORMAL PHOTO
========================================= */

function MemoryCard({
  memory,
  index,
  wind,
}: {
  memory: Memory;
  index: number;
  wind: MotionValue<number>;
}) {
  return (
    <HangingCard
      row={index}
      t={CLIP_T}
      order={index}
      config={memory}
      className={`memory-${index + 1}`}
      wind={wind}
    >
      <div className="memory-frame">
        <div className="memory-photo">
          <img
            src={memory.image}
            alt={memory.alt}
            width={600}
            height={600}
            loading="lazy"
            decoding="async"
          />
        </div>

        <p className="memory-caption">{memory.caption}</p>
      </div>
    </HangingCard>
  );
}

/* =========================================
   THE LAST CARD: "OUR WEDDING IS COMING"
========================================= */

function ComingCard({ wind }: { wind: MotionValue<number> }) {
  return (
    <HangingCard
      row={ROWS - 1}
      t={COMING_T}
      order={ROWS - 1}
      config={{ tilt: 0, swing: 1.2, duration: 6.2, delay: -2 }}
      className="memory-coming"
      wind={wind}
    >
      <div className="memory-frame">
        {/* a "photo" that is still loading */}
        <div
          className="memory-photo loading-photo"
          role="img"
          aria-label="A photo is still loading: our wedding is coming"
        >
          <div className="loading-glow" />

          <div className="loading-center">
            <svg className="loading-ring" viewBox="0 0 100 100" aria-hidden="true">
              <circle className="ring-track" cx="50" cy="50" r="44" />
              <circle className="ring-progress" cx="50" cy="50" r="44" />
            </svg>
            <span className="loading-heart">♡</span>
          </div>

          <p className="loading-label" aria-hidden="true">
            LOADING<span>.</span>
            <span>.</span>
            <span>.</span>
          </p>
        </div>

        <div className="memory-caption coming-caption">
          <h3>Our wedding is coming…</h3>
          {/* <time dateTime={WEDDING_DATE_ISO}>{WEDDING_DATE_LABEL}</time> */}
          <p>The journey of I and YOU is all set to become US just waiting for the perfect moment to tie the knots and make it mine 🥰 ♡</p>
        </div>
      </div>
    </HangingCard>
  );
}

/* =========================================
   SECTION
========================================= */

export default function WeddingPhotos() {
  const reduceMotion = useReducedMotion();

  // -1 → 1 → -1 … a slow breeze that drives the rope sag
  const wind = useMotionValue(-1);

  useEffect(() => {
    if (reduceMotion) {
      wind.set(0);
      return;
    }

    const controls = animate(wind, [-1, 1], {
      duration: 4.8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    });

    return () => controls.stop();
  }, [reduceMotion, wind]);

  const ropeD = useTransform(wind, (w) => ropePath(SAG + w * SAG_SWAY));

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

      {/* FOUR PHOTOS ON ONE CONTINUOUS ROPE */}
      <div
        className="memory-rope"
        style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
      >
        <svg
          className="rope-line"
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="wp-brass" cx="0.35" cy="0.3" r="0.85">
              <stop offset="0%" stopColor="#fbeec8" />
              <stop offset="55%" stopColor="#c99f5e" />
              <stop offset="100%" stopColor="#7d5a30" />
            </radialGradient>
            <linearGradient id="wp-heart" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f6b3cb" />
              <stop offset="100%" stopColor="#d9709a" />
            </linearGradient>
            <linearGradient id="wp-heart-deep" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#eb8db0" />
              <stop offset="100%" stopColor="#b94574" />
            </linearGradient>
          </defs>

          {/* layered strands = a twisted jute rope */}
          <motion.path className="rope-drop" d={ropeD} />
          <motion.path className="rope-contact" d={ropeD} />
          <motion.path className="rope-base" d={ropeD} />
          <motion.path className="rope-twist-light" d={ropeD} />
          <motion.path className="rope-twist-dark" d={ropeD} />
          <motion.path className="rope-highlight" d={ropeD} />

          {/* brass nails the rope is hooked on */}
          {nails.map((nail) => (
            <g key={nail.key} transform={`translate(${nail.x} ${nail.y})`}>
              <circle className="nail-shadow" r="8" cx="1.5" cy="3" />
              <circle r="6.2" fill="url(#wp-brass)" />
              <circle r="1.8" cx="-1.8" cy="-2" fill="rgba(255,255,255,0.75)" />
            </g>
          ))}

          {/* animated hearts hanging along the rope */}
          {charms.map((charm, i) => (
            <HeartCharm
              key={`charm-${i}`}
              row={charm.row}
              t={charm.t}
              delay={i * 0.7}
              wind={wind}
            />
          ))}
        </svg>

        {memories.map((memory, index) => (
          <MemoryCard
            key={memory.image}
            memory={memory}
            index={index}
            wind={wind}
          />
        ))}

        <ComingCard wind={wind} />
      </div>

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