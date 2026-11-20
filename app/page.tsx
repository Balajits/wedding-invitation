"use client";

import { useRef, useState } from "react";
import { petalGradients } from "@/theme/theme";
import FloatingFlowers from "./components/FloatingFlowers/FloatingFlowers";
import OpeningCard from "./components/OpeningCard/OpeningCard";
import HeroSection from "./components/HeroSection/HeroSection";
import EventsVenue from "./components/EventsVenue/EventsVenue";
import WeddingTimeline from "./components/WeddingTimeline/WeddingTimeline";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import HangingPhotoGallery from "./components/HangingPhotoGallery/HangingPhotoGallery";
import WeddingWishes from "./components/WeddingWishes/WeddingWishes";
import WeddingFooter from "./components/WeddingFooter/WeddingFooter";
import YouTubeMusic, { type YouTubeMusicHandle } from "./components/YouTubeMusic";
import styles from "./page.module.css";

export default function Home() {
  const [opening, setOpening] = useState<boolean>(false);
  const [opened, setOpened] = useState<boolean>(false);
  const musicRef = useRef<YouTubeMusicHandle>(null);
  return (
    <>
      <YouTubeMusic ref={musicRef} />
      {opened ? (
        <>
          <HeroSection petals={petalGradients} />
          <div className={styles.celebration}>
            <EventsVenue />
            <WeddingTimeline />
            <PhotoGallery />
            <WeddingWishes />
            {/* <HangingPhotoGallery /> */}
            <WeddingFooter />
          </div>
        </>
      ) : (
        <>
          <FloatingFlowers burst={opening} />
          <OpeningCard
            onOpening={() => {
              setOpening(true);
              musicRef.current?.play();
            }}
            onOpen={() => setOpened(true)}
          />
        </>
      )}
    </>
  );
}
