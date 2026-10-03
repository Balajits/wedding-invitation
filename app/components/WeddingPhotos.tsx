"use client";

import { motion } from "framer-motion";
import "./WeddingPhotos.css";

const photos = [
  {
    image: "/one.jpeg",
    alt: "Harsa and Balaji",
    caption: "It all started with a little moment…",
    rotation: "-6deg",
  },
  {
    image: "/two.jpeg",
    alt: "Harsa and Balaji",
    caption:
      "Somewhere along the way, you became my favourite person.",
    rotation: "4deg",
  },
  {
    image: "/three.jpeg",
    alt: "Harsa and Balaji",
    caption: "And then… we made it official. 💍",
    rotation: "-5deg",
  },
   {
    image: "/four.jpg",
    alt: "Harsa and Balaji",
    caption: "And then… we made it official. 💍",
    rotation: "-5deg",
  },
];

export default function WeddingPhotos() {
  return (
    <section className="wedding-photos">

      {/* =========================================
          HEADING
      ========================================= */}

      <motion.div
        className="wedding-photos-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.9,
        }}
      >
        <span className="photos-ornament">
          ✦
        </span>

        <p>OUR STORY</p>

        <h2>
          From Unofficial
          <span>to Official</span>
        </h2>

        <div className="photos-heading-line">
          <span></span>
          <i>♡</i>
          <span></span>
        </div>
      </motion.div>


      {/* =========================================
          MEMORY ROPE
      ========================================= */}

      <div className="memory-rope">

        {/* Smooth snake-shaped rope */}

        <svg
          className="rope-line"
          viewBox="0 0 100 1100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M 30 0
              C 72 100, 78 180, 55 275
              C 32 370, 28 455, 52 550
              C 76 645, 72 730, 48 820
              C 24 910, 28 1000, 55 1100
            "
          />
        </svg>


        {/* =========================================
            PHOTO 1
        ========================================= */}

        <motion.div
          className="memory memory-1"
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.9,
          }}
        >

          <div className="memory-caption">
            It all started with a little moment…
          </div>

          {/* <div className="memory-clip">
            <span className="clip-top"></span>
            <span className="clip-body"></span>
            <span className="clip-jaw"></span>
          </div> */}

          <div
            className="memory-frame"
            style={{
              transform: `rotate(${photos[0].rotation})`,
            }}
          >
            <div className="memory-photo">
              <img
                src={photos[0].image}
                alt={photos[0].alt}
              />
            </div>
            <div className="memory-captionss">
            It all started with a little moment…
          </div>
          </div>

        </motion.div>


        {/* =========================================
            PHOTO 2
        ========================================= */}

        <motion.div
          className="memory memory-2"
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
        >

          <div className="memory-caption">
            Somewhere along the way, you became my favourite person.
          </div>

          <div className="memory-clip">
            <span className="clip-top"></span>
            <span className="clip-body"></span>
            <span className="clip-jaw"></span>
          </div>

          <div
            className="memory-frame"
            style={{
              transform: `rotate(${photos[1].rotation})`,
            }}
          >
            <div className="memory-photo">
              <img
                src={photos[1].image}
                alt={photos[1].alt}
              />
            </div>
          </div>

        </motion.div>


        {/* =========================================
            PHOTO 3
        ========================================= */}

        <motion.div
          className="memory memory-3"
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.9,
            delay: 0.4,
          }}
        >

          <div className="memory-caption">
            And then… we made it official. 💍
          </div>

          <div className="memory-clip">
            <span className="clip-top"></span>
            <span className="clip-body"></span>
            <span className="clip-jaw"></span>
          </div>

          <div
            className="memory-frame"
            style={{
              transform: `rotate(${photos[2].rotation})`,
            }}
          >
            <div className="memory-photo">
              <img
                src={photos[2].image}
                alt={photos[2].alt}
              />
            </div>
          </div>

        </motion.div>

      </div>


      {/* =========================================
          CLOSING
      ========================================= */}

      <motion.div
        className="photos-closing"
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.4,
        }}
      >

        <span>✦</span>

        <p>Harsa & Balaji</p>

        <small>
          From unofficial to official.
        </small>

        <span>♡</span>

      </motion.div>

    </section>
  );
}