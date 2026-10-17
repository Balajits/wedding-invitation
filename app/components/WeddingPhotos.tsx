"use client";

import { useEffect, type CSSProperties } from "react";
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
    caption: "It all started with a little moment…",
    tilt: -2.5,
    swing: 1.6,
    duration: 5.6,
    delay: -1.2,
  },
  {
    image: "/photo2.jpeg",
    alt: "A favourite memory together",
    caption: "Somewhere along the way, you became my favourite person.",
    tilt: 2,
    swing: 1.3,
    duration: 6.4,
    delay: -3.1,
  },
  {
    image: "/photo3.jpeg",
    alt: "A beautiful moment together",
    caption: "With you, every moment felt more beautiful.",
    tilt: -2,
    swing: 1.5,
    duration: 5.9,
    delay: -0.4,
  },
  {
    image: "/photo4.jpeg",
    alt: "Our official beginning",
    caption: "And then… we made it official. ♡",
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

const ROWS = memories.length;
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
const TAIL_GAP = 600; // rope drop after the last photo row
const TAIL_Y = TOP + ROW_PITCH * (ROWS - 1) + TAIL_GAP;
const KNOT = { x: VB_W / 2, y: TAIL_Y + 60 }; // where the rope finally ends
const PENDANT_STRING = 26;
const PENDANT_SCALE = 2.1;
const HEART_PATH =
  "M0 0 C -4 -5 -12 -2 -12 4 C -12 10 -4 14 0 19 C 4 14 12 10 12 4 C 12 -2 4 -5 0 0 Z";
const VB_H = KNOT.y + PENDANT_STRING + 19 * PENDANT_SCALE + 14;

const rowY = (row: number) => TOP + row * ROW_PITCH;
const isLeftToRight = (row: number) => row % 2 === 0;
const n = (value: number) => value.toFixed(2);

/** One continuous rope: swag → loop round a nail → swag … → knot at the end */
function ropePath(sag: number) {
  let d = `M ${X_LEFT} ${n(rowY(0))}`;

  for (let row = 0; row < ROWS; row++) {
    const y = rowY(row);
    const ltr = isLeftToRight(row);
    const xEnd = ltr ? X_RIGHT : X_LEFT;
    const nextY = row < ROWS - 1 ? rowY(row + 1) : TAIL_Y;

    d += ` Q ${VB_W / 2} ${n(y + sag * 2)} ${xEnd} ${n(y)}`;

    const out = xEnd + (ltr ? TURN_BULGE : -TURN_BULGE);
    d += ` C ${out} ${n(y + 60)} ${out} ${n(nextY - 60)} ${xEnd} ${n(nextY)}`;
  }

  // final stretch: rope runs to the centre and ends above "The Next Chapter"
  d += ` Q ${(X_LEFT + KNOT.x) / 2} ${n(TAIL_Y + 110 + (sag - SAG))} ${KNOT.x} ${n(
    KNOT.y
  )}`;

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

const nails = [
  ...Array.from({ length: ROWS }).flatMap((_, row) => [
    { x: X_LEFT, y: rowY(row), key: `l-${row}` },
    { x: X_RIGHT, y: rowY(row), key: `r-${row}` },
  ]),
  { x: X_LEFT, y: TAIL_Y, key: "tail" },
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
  delay,
  wind,
}: {
  row: number;
  delay: number;
  wind: MotionValue<number>;
}) {
  const { x } = swagPoint(row, CHARM_T, SAG);
  const y = useTransform(
    wind,
    (w) => swagPoint(row, CHARM_T, SAG + w * SAG_SWAY).y
  );

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

/** where the rope ends: a brass hook holding a big beating heart */
function EndPendant() {
  return (
    <g transform={`translate(${KNOT.x} ${KNOT.y})`}>
      <circle className="nail-shadow" r="8" cx="1.5" cy="3" />
      <circle r="6.4" fill="url(#wp-brass)" />
      <circle r="1.8" cx="-1.8" cy="-2" fill="rgba(255,255,255,0.75)" />

      <g className="heart-charm end-pendant">
        <line className="charm-string" x1="0" y1="4" x2="0" y2={PENDANT_STRING} />
        <g transform={`translate(0 ${PENDANT_STRING}) scale(${PENDANT_SCALE})`}>
          <path
            className="charm-heart"
            d={HEART_PATH}
            fill="url(#wp-heart-deep)"
          />
        </g>
      </g>

      <g transform={`translate(0 ${PENDANT_STRING + 22})`}>
        <FloatingHearts delay={0.6} count={3} />
      </g>
    </g>
  );
}

/* =========================================
   ONE PHOTO ON THE ROPE
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
  const { x } = clipPoint(index, SAG);

  // The clip rides the rope as it gently breathes
  const top = useTransform(
    wind,
    (w) => `${(clipPoint(index, SAG + w * SAG_SWAY).y / VB_H) * 100}%`
  );

  const swingVars = {
    "--tilt": `${memory.tilt}deg`,
    "--swing": `${memory.swing}deg`,
    "--swing-duration": `${memory.duration}s`,
    "--swing-delay": `${memory.delay}s`,
  } as CSSProperties;

  return (
    <motion.article
      className={`memory memory-${index + 1}`}
      style={{
        left: `${(x / VB_W) * 100}%`,
        top,
        x: "-50%",
        originX: 0.5,
        originY: 0,
      }}
      initial={{ opacity: 0, y: -26, rotate: index % 2 ? -9 : 9 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        opacity: { duration: 0.6, delay: index * 0.1 },
        y: { duration: 0.8, delay: index * 0.1, ease: "easeOut" },
        // spring = the photo drops, swings and settles like it's on a real pin
        rotate: {
          type: "spring",
          stiffness: 38,
          damping: 5,
          delay: index * 0.1,
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

        {/* POLAROID */}
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
      </div>
    </motion.article>
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
          {memories.map((memory, row) => (
            <HeartCharm
              key={`charm-${memory.image}`}
              row={row}
              delay={row * 0.7}
              wind={wind}
            />
          ))}

          {/* the rope ends here, leading into "The Next Chapter" */}
          <EndPendant />
        </svg>

        {memories.map((memory, index) => (
          <MemoryCard
            key={memory.image}
            memory={memory}
            index={index}
            wind={wind}
          />
        ))}
      </div>

      {/* THE NEXT CHAPTER */}
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