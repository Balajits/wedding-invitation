"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CalendarButton from "./CalendarButton";
import Countdown from "./Countdown";

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
export default function WeddingInvitation() {
    const [opening, setOpening] = useState(false);

    return (
        <main className="wedding-invitation is-opening">
            {/* <main className={`magical-opening ${opening ? "is-opening" : ""}`}> */}

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



            {/* =================================
                AMBIENT BACKGROUND
            ================================= */}

            <div className="wedding-ambience">

                {/* Floating flowers */}
                <div className="floating-flower flower-1">✿</div>
                <div className="floating-flower flower-2">✿</div>
                <div className="floating-flower flower-3">✿</div>
                <div className="floating-flower flower-4">✿</div>

                {/* Butterflies */}
                <div className="wedding-butterfly butterfly-1">🦋</div>
                <div className="wedding-butterfly butterfly-2">🦋</div>
                <div className="wedding-butterfly butterfly-3">🦋</div>

                {/* Glowing particles */}
                <div className="glow-dot dot-1" />
                <div className="glow-dot dot-2" />
                <div className="glow-dot dot-3" />
                <div className="glow-dot dot-4" />

            </div>


            {/* =================================
                BACKGROUND GLOW
            ================================= */}

            <div className="invitation-glow invitation-glow-one" />
            <div className="invitation-glow invitation-glow-two" />

            {/* Floating petals */}
            <div className="invitation-petal petal-a" />
            <div className="invitation-petal petal-b" />
            <div className="invitation-petal petal-c" />


            {/* =================================
                TOP FLORAL DECORATION
            ================================= */}

            <motion.div
                className="floral-header"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                <span>❀</span>
                <span>✿</span>
                <span>❀</span>
            </motion.div>


            {/* =================================
                INTRO
            ================================= */}

            <motion.section
                className="invitation-intro"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1.2,
                    delay: 0.2,
                }}
            >

                <p className="intro-small">
                    WITH LOVE & BLESSINGS
                </p>

                <p className="intro-text">
                    We invite you to celebrate
                    <br />
                    the beautiful beginning
                    <br />
                    of our forever.
                </p>

            </motion.section>


            {/* =================================
                COUPLE NAMES
            ================================= */}

            <motion.section
                className="couple-section"
                initial={{
                    opacity: 0,
                    scale: 0.92,
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
                transition={{
                    duration: 1.3,
                }}
            >

                <h1>
                    Harsa Vardine
                    <span>&</span>
                    Balaji
                </h1>

                <div className="couple-divider">
                    <span>✦</span>
                </div>

                <p className="couple-message">
                    From this moment, for all our tomorrows.
                </p>

            </motion.section>


            {/* =================================
                COUPLE PHOTO
            ================================= */}

            {/* <motion.section
                className="couple-photo-section"
                initial={{
                    opacity: 0,
                    y: 60,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.25,
                }}
                transition={{
                    duration: 1.2,
                    ease: "easeOut",
                }}
            >

                <div className="photo-frame">

                    <div className="photo-placeholder">

                       


                        <img
                            src="/couple.jpg"
                            alt="Harsa and Balaji"
                        />


                    </div>



                    <div className="photo-flower flower-top-left">
                        ✿
                    </div>

                    <div className="photo-flower flower-top-right">
                        ✿
                    </div>

                    <div className="photo-flower flower-bottom-left">
                        ✿
                    </div>

                    <div className="photo-flower flower-bottom-right">
                        ✿
                    </div>

                </div>


                <p className="photo-caption">
                    The first page of our forever.
                </p>
                <div className="heading-line">
                    <span></span>
                    <i>♡</i>
                    <span></span>
                </div>

            </motion.section> */}

            <Countdown />
            {/* EVENTS */}
            {/* EVENTS */}
            <section className="events-section">

                <motion.div
                    className="events-heading"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="heading-ornament">✦</span>

                    <p>JOIN US</p>

                    <h2>The Celebration Begins</h2>

                    <div className="heading-line">
                        <span></span>
                        <i>♡</i>
                        <span></span>
                    </div>
                </motion.div>


                {/* RECEPTION */}
                <motion.article
                    className="event-card"
                    initial={{ opacity: 0, y: 45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                >
                    <div className="event-card-glow"></div>

                    <div className="event-top-ornament">
                        ✦
                    </div>

                    <p className="event-label">
                        THE RECEPTION
                    </p>

                    <h3 className="event-date">
                        13
                        <span>DECEMBER</span>
                        <small>2026</small>
                    </h3>

                    <div className="event-time">
                        6:00 PM onwards
                    </div>

                    <div className="event-divider">
                        <span></span>
                        <i>♡</i>
                        <span></span>
                    </div>

                    <div className="event-venue">
                        <div className="venue-icon">
                            ♡
                        </div>

                        <p>THE VENUE</p>

                        <h4>
                            Arunachalam Kamalambal
                        </h4>
                    </div>

                    <div className="event-actions">

                        <CalendarButton
                            title="Harsa & Balaji - Reception"
                            start="20261213T180000"
                            end="20261213T210000"
                            location="Arunachalam Kamalambal"
                            description="Reception celebration of Harsa & Balaji."
                        />

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Arunachalam+Kamalambal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="directions-button"
                        >
                            <span>⌖</span>
                            View Location
                        </a>

                    </div>

                    <div className="event-bottom-ornament">
                        ✦
                    </div>
                </motion.article>


                {/* WEDDING */}
                <motion.article
                    className="event-card wedding-card"
                    initial={{ opacity: 0, y: 45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.15 }}
                >
                    <div className="event-card-glow"></div>

                    <div className="event-top-ornament">
                        ✦
                    </div>

                    <p className="event-label">
                        THE WEDDING
                    </p>

                    <h3 className="event-date">
                        14
                        <span>DECEMBER</span>
                        <small>2026</small>
                    </h3>

                    <div className="event-time">
                        9:00 AM – 10:30 AM
                    </div>

                    <div className="event-divider">
                        <span></span>
                        <i>♡</i>
                        <span></span>
                    </div>

                    <div className="event-venue">
                        <div className="venue-icon">
                            ♡
                        </div>

                        <p>THE VENUE</p>

                        <h4>
                            Arunachalam Kamalambal
                        </h4>
                    </div>

                    <div className="event-actions">

                        <CalendarButton
                            title="Harsa & Balaji - Wedding"
                            start="20261214T090000"
                            end="20261214T103000"
                            location="Arunachalam Kamalambal"
                            description="Wedding ceremony of Harsa & Balaji."
                        />

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Arunachalam+Kamalambal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="directions-button"
                        >
                            <span>⌖</span>
                            View Location
                        </a>

                    </div>

                    <div className="event-bottom-ornament">
                        ✦
                    </div>
                </motion.article>

            </section>


            {/* =================================
    FAMILY BLESSINGS
================================= */}

            {/* FAMILY BLESSINGS */}
            <section className="family-section">

                <motion.div
                    className="family-heading"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="family-ornament">✦</span>

                    <p>WITH THE BLESSINGS</p>

                    <h2>
                        OF OUR FAMILIES
                    </h2>

                    <div className="family-heading-line">
                        <span></span>
                        <i>♡</i>
                        <span></span>
                    </div>

                    <div className="family-subtitle">
                        Surrounded by love & blessings
                    </div>
                </motion.div>


                <div className="family-container">

                    {/* BRIDE FAMILY */}
                    <motion.div
                        className="family-card"
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="family-flower">
                            ❀
                        </div>

                        <p className="family-label">
                            BRIDE'S FAMILY
                        </p>

                        <h3>
                            Suresh
                            <span>&</span>
                            Ashwinrani
                        </h3>

                        <div className="family-card-line">
                            ✦
                        </div>
                    </motion.div>


                    {/* CENTER ORNAMENT */}
                    <motion.div
                        className="family-center-ornament"
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        ♡
                    </motion.div>


                    {/* GROOM FAMILY */}
                    <motion.div
                        className="family-card"
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="family-flower">
                            ❀
                        </div>

                        <p className="family-label">
                            GROOM'S FAMILY
                        </p>

                        <h3>
                            Sekar
                            <span>&</span>
                            Jothi
                        </h3>

                        <div className="family-card-line">
                            ✦
                        </div>
                    </motion.div>

                </div>

            </section>

            {/* =================================
    FINAL CLOSING
================================= */}

            <motion.section
                className="final-closing"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.4 }}
            >

                {/* Floating butterflies */}

                <div className="final-butterfly final-butterfly-one">
                    🦋
                </div>

                <div className="final-butterfly final-butterfly-two">
                    🦋
                </div>


                {/* Floral ornament */}

                <div className="final-ornament">
                    ❀
                </div>


                <p className="final-small">
                    WE CAN'T WAIT TO CELEBRATE
                </p>


                <h2 className="final-title">
                    See you
                    <br />
                    <em>there</em>
                </h2>


                <div className="final-divider">
                    <span>✦</span>
                </div>


                <p className="final-message">
                    Your presence and blessings
                    <br />

                    mean the world to us.
                    {/* <br /> */}
                    {/* world to us. */}
                </p>


                <p className="final-date">
                    13 · 14 DECEMBER 2026
                </p>

                <h3>
                    With love,
                </h3>
                <div className="final-names">
                    {/* Harsa <span>&</span> Balaji */}
                    <img src='logo.png' />
                </div>


                <div className="final-bottom-flower">
                    ✿
                </div>

            </motion.section>


        </main>
    );
}