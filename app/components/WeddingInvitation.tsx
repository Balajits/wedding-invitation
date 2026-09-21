"use client";

import { motion } from "framer-motion";
import CalendarButton from "./CalendarButton";

export default function WeddingInvitation() {
    return (
        <main className="wedding-invitation">

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
                    TOGETHER WITH THEIR FAMILIES
                </p>

                <p className="intro-text">
                    invite you to celebrate
                    <br />
                    the beginning of their
                    <br />
                    forever
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
                    Two hearts, one beautiful journey
                </p>

            </motion.section>


            {/* =================================
                COUPLE PHOTO
            ================================= */}

            <motion.section
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

                        {/* Replace this later with your actual image */}

                        {/* <span>H & B</span> */}

                        
                        <img
                            src="/couple.jpg"
                            alt="Harsa and Balaji"
                        />
                       

                    </div>


                    {/* Floral decorations */}

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
                    Two hearts, one beautiful journey
                </p>

            </motion.section>


            {/* =================================
                RECEPTION
            ================================= */}

            {/* =================================
    EVENTS & CALENDAR
================================= */}

            <section className="events-section">

                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <span>✦</span>
                    <p>JOIN US</p>
                    <h2>
                        Save the
                        <br />
                        <em>date</em>
                    </h2>
                    <span>✦</span>
                </motion.div>


                {/* RECEPTION */}

                <motion.section
                    className="event-card"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1 }}
                >

                    <p className="event-label">
                        RECEPTION
                    </p>

                    <div className="event-ornament">
                        ❀
                    </div>

                    <h2>
                        13
                        <span>DECEMBER</span>
                        <small>2026</small>
                    </h2>

                    <div className="event-time">
                        6:00 PM onwards
                    </div>

                    <div className="event-line" />

                    <p className="venue-name">
                        Arunachalam Kamalambal
                    </p>

                    <p className="venue-type">
                        Reception Venue
                    </p>

                    <CalendarButton
                        title="Reception — Balaji & Harsa"
                        start="20261213T180000"
                        location="Arunachalam Kamalambal"
                        description="Reception celebration of Balaji & Harsa."
                    />

                </motion.section>


                {/* WEDDING */}

                <motion.section
                    className="event-card wedding-event"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1 }}
                >

                    <p className="event-label">
                        WEDDING CEREMONY
                    </p>

                    <div className="event-ornament">
                        ❀
                    </div>

                    <h2>
                        14
                        <span>DECEMBER</span>
                        <small>2026</small>
                    </h2>

                    <div className="event-time">
                        9:00 AM – 10:30 AM
                    </div>

                    <div className="event-line" />

                    <p className="venue-name">
                        Arunachalam Kamalambal
                    </p>

                    <p className="venue-type">
                        Wedding Venue
                    </p>

                    <CalendarButton
                        title="Wedding Ceremony — Balaji & Harsa"
                        start="20261214T090000"
                        end="20261214T103000"
                        location="Arunachalam Kamalambal"
                        description="Wedding ceremony of Balaji & Harsa."
                    />

                </motion.section>

            </section>

            {/* =================================
    VENUE & DIRECTIONS
================================= */}

            <motion.section
                className="venue-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.2 }}
            >

                <div className="venue-decoration">
                    ❀
                </div>

                <p className="venue-section-label">
                    OUR CELEBRATION
                </p>

                <h2 className="venue-title">
                    Where two families
                    <br />
                    <em>become one</em>
                </h2>

                <div className="venue-card">

                    <div className="venue-pin">
                        ♡
                    </div>

                    <p className="venue-card-label">
                        THE VENUE
                    </p>

                    <h3>
                        Arunachalam
                        <br />
                        Kamalambal
                    </h3>

                    <div className="venue-card-line" />

                    <p className="venue-description">
                        We would be delighted to have you
                        <br />
                        with us on our special day.
                    </p>

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

            </motion.section>

            {/* =================================
    FAMILY BLESSINGS
================================= */}

            <motion.section
                className="family-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.2 }}
            >

                <div className="family-flower">
                    ❀
                </div>

                <p className="family-label">
                    WITH THE BLESSINGS OF OUR FAMILIES
                </p>

                <h2 className="family-title">
                    Surrounded by
                    <br />
                    <em>love & blessings</em>
                </h2>


                <div className="family-divider">
                    <span>✦</span>
                </div>


                {/* BRIDE'S FAMILY */}

                <motion.div
                    className="family-card"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                >

                    <p className="family-card-label">
                        BRIDE'S FAMILY
                    </p>

                    <h3>
                        Suresh
                        <span>&</span>
                        Ashwin Rani
                    </h3>

                </motion.div>


                {/* GROOM'S FAMILY */}

                <motion.div
                    className="family-card"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.15 }}
                >

                    <p className="family-card-label">
                        GROOM'S FAMILY
                    </p>

                    <h3>
                        Sekar
                        <span>&</span>
                        Jothi
                    </h3>

                </motion.div>


                <div className="family-bottom-flower">
                    ✿
                </div>

            </motion.section>

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
                    will make our celebration
                    <br />
                    even more special.
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