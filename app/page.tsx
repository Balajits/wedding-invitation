"use client";

import { useState } from "react";
import FloatingFlowers from "./components/FloatingFlowers/FloatingFlowers";
import OpeningCard from "./components/OpeningCard/OpeningCard";
import HeroSection from "./components/HeroSection/HeroSection";
import EventsVenue from "./components/EventsVenue/EventsVenue";
import WeddingTimeline from "./components/WeddingTimeline/WeddingTimeline";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
// import HangingPhotoGallery from "./components/HangingPhotoGallery/HangingPhotoGallery";
import WeddingFooter from "./components/WeddingFooter/WeddingFooter";
import styles from "./page.module.css";

export default function Home() {
  const [opening, setOpening] = useState<boolean>(false);
  const [opened, setOpened] = useState<boolean>(false);

  if (opened)
    return (
      <>
        <HeroSection />
        <div className={styles.celebration}>
          <EventsVenue />
          <WeddingTimeline />
          <PhotoGallery />
          {/* <HangingPhotoGallery /> */}
          <WeddingFooter />
        </div>
      </>
    );

  return (
    <>
      {/* opening card keeps the small flower background */}
      <FloatingFlowers burst={opening} />
      <OpeningCard onOpening={() => setOpening(true)} onOpen={() => setOpened(true)} />
    </>
  );
}
