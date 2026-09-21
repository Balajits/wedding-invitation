"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


interface MagicalOpeningProps {
  onOpenComplete: () => void;
}

const flowers = [
  { className: "flower flower-1", delay: 0.2, size: "large" },
  { className: "flower flower-2", delay: 0.5, size: "small" },
  { className: "flower flower-3", delay: 0.8, size: "medium" },
  { className: "flower flower-4", delay: 1.1, size: "small" },
  { className: "flower flower-5", delay: 0.6, size: "medium" },
  { className: "flower flower-6", delay: 1.3, size: "large" },
  { className: "flower flower-7", delay: 0.9, size: "small" },
  { className: "flower flower-8", delay: 1.5, size: "medium" },
];

const petals = Array.from({ length: 16 });
const stars = Array.from({ length: 24 });

export default function MagicalOpening({
  onOpenComplete,
}: MagicalOpeningProps) {
  const [opening, setOpening] = useState(false);
  const [invitation, setInvitation] = useState(false);

  const openInvitation = () => {
  if (opening) return;

  setOpening(true);

  setTimeout(() => {
    onOpenComplete();
  }, 2400);
};

  return (
    <main className={`magical-opening ${opening ? "is-opening" : ""}`}>

      {/* ================================
          BACKGROUND
      ================================= */}

      <div className="purple-glow purple-glow-one" />
      <div className="purple-glow purple-glow-two" />
      <div className="purple-glow purple-glow-three" />

      <motion.div
        className="ambient-light"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================================
          SPARKLES
      ================================= */}

      <div className="stars">
        {stars.map((_, index) => (
          <motion.span
            key={index}
            className={`star star-${index + 1}`}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5 + (index % 4),
              delay: (index % 8) * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.span>
        ))}
      </div>

      {/* ================================
          FALLING PETALS
      ================================= */}

      <div className="petals">
        {petals.map((_, index) => (
          <motion.span
            key={index}
            className={`petal petal-${index + 1}`}
            animate={{
              y: "115vh",
              opacity: [0, 0.8, 0.7, 0],
              rotate: [0, 90, 180, 270],
              x: [0, 30, -25, 20],
            }}
            transition={{
              duration: 8 + (index % 5),
              delay: index * 0.6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* ================================
          VINES
      ================================= */}

      <motion.div
        className="vine vine-left"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
      >
        <span />
        <span />
        <span />
        <span />
      </motion.div>

      <motion.div
        className="vine vine-right"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
      >
        <span />
        <span />
        <span />
        <span />
      </motion.div>

      {/* ================================
          FLOWERS
      ================================= */}

      <div className="flowers">
        {flowers.map((flower, index) => (
          <motion.div
            key={index}
            className={`${flower.className} ${flower.size}`}
            initial={{
              opacity: 0,
              scale: 0,
              rotate: -20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1.2,
              delay: flower.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flower-center" />
            <i />
            <i />
            <i />
            <i />
            <i />
          </motion.div>
        ))}
      </div>

      {/* ================================
          BUTTERFLY 1
      ================================= */}

      <motion.div
        className="butterfly butterfly-one"
        animate={
          opening
            ? {
                x: "35vw",
                y: "8vh",
                scale: 1.2,
                opacity: 0,
              }
            : {
                x: [0, 80, 20, 0],
                y: [0, -30, 20, 0],
                rotate: [-5, 8, -5, 5],
              }
        }
        transition={
          opening
            ? {
                duration: 2,
                ease: "easeInOut",
              }
            : {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        <span className="wing wing-left" />
        <span className="wing wing-right" />
        <span className="butterfly-body" />
      </motion.div>

      {/* ================================
          BUTTERFLY 2
      ================================= */}

      <motion.div
        className="butterfly butterfly-two"
        animate={
          opening
            ? {
                x: "-35vw",
                y: "5vh",
                scale: 1.2,
                opacity: 0,
              }
            : {
                x: [0, -70, -20, 0],
                y: [0, 25, -20, 0],
                rotate: [5, -8, 5, -5],
              }
        }
        transition={
          opening
            ? {
                duration: 2,
                ease: "easeInOut",
              }
            : {
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        <span className="wing wing-left" />
        <span className="wing wing-right" />
        <span className="butterfly-body" />
      </motion.div>

      {/* ================================
          INVITATION CARD
      ================================= */}

      <motion.section
        className="invitation-wrapper"
        animate={
          opening
            ? {
                scale: 1.12,
                rotateY: -75,
                opacity: 0,
                y: -20,
              }
            : {
                scale: 1,
                rotateY: 0,
                opacity: 1,
                y: [0, -6, 0],
              }
        }
        transition={
          opening
            ? {
                duration: 1.8,
                ease: [0.65, 0, 0.35, 1],
              }
            : {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        <div className="invitation-card">
          <div className="card-border">
            <div className="card-content">

              <p className="eyebrow">
                A BEAUTIFUL BEGINNING
              </p>

              <div className="card-ornament">
                ✦
              </div>

              <h1>
                Balaji
                <span>&</span>
                Harsa
              </h1>

              <div className="card-divider" />

              <p className="card-message">
                Together with their families
                <br />
                invite you to celebrate
                <br />
                their wedding
              </p>

              <p className="wedding-date">
                14 · 12 · 2026
              </p>

            </div>
          </div>
        </div>
      </motion.section>

      {/* ================================
          OPEN BUTTON
      ================================= */}

      <AnimatePresence>
        {!opening && (
          <motion.button
            className="open-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={{
              delay: 4.8,
              duration: 0.8,
            }}
            onClick={openInvitation}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.94,
            }}
          >
            <span>Open Invitation</span>
            <b>✦</b>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ================================
          MAGIC FLASH
      ================================= */}

      <AnimatePresence>
        {opening && (
          <>
            <motion.div
              className="magic-flash"
              initial={{
                opacity: 0,
                scale: 0.2,
              }}
              animate={{
                opacity: [0, 0.9, 0],
                scale: [0.2, 1, 2.5],
              }}
              transition={{
                duration: 2.4,
                ease: "easeOut",
              }}
            />

            <motion.div
              className="magic-ring"
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 4,
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2.2,
                ease: "easeOut",
              }}
            />

            <motion.div
              className="petal-burst"
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 2,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
            >
              🌸
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================================
          PAGE 2
      ================================= */}

      <AnimatePresence>
        {invitation && (
          <motion.div
            className="wedding-page"
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          >
            <div className="wedding-page-content">
              <p>THE WEDDING OF</p>

              <h2>
                Balaji
                <span>&</span>
                Harsa
              </h2>

              <div className="page-line" />

              <p className="page-date">
                14 DECEMBER 2026
              </p>

              <p className="coming-soon">
                Our beautiful invitation continues...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}