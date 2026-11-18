"use client";

import { useEffect, useRef, useState } from "react";
import { getThemeCssVars } from "@/theme/cssVars";
import { activeTheme, themes, type ThemeName } from "@/theme/theme";
import FloatingFlowers from "./components/FloatingFlowers/FloatingFlowers";
import OpeningCard from "./components/OpeningCard/OpeningCard";
import HeroSection from "./components/HeroSection/HeroSection";
import EventsVenue from "./components/EventsVenue/EventsVenue";
import WeddingTimeline from "./components/WeddingTimeline/WeddingTimeline";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
// import HangingPhotoGallery from "./components/HangingPhotoGallery/HangingPhotoGallery";
import WeddingFooter from "./components/WeddingFooter/WeddingFooter";
import YouTubeMusic, { type YouTubeMusicHandle } from "./components/YouTubeMusic";
import styles from "./page.module.css";

export default function Home() {
  const [opening, setOpening] = useState<boolean>(false);
  const [opened, setOpened] = useState<boolean>(false);
  const [selectedTheme, setSelectedTheme] = useState<ThemeName>(activeTheme);
  const preset = themes[selectedTheme];

  const musicRef = useRef<YouTubeMusicHandle>(null);

  useEffect(() => {
    if (selectedTheme === activeTheme) return;

    const style = document.body.style;
    const variables = Object.entries(getThemeCssVars(preset.colors));
    for (const [name, value] of variables) style.setProperty(name, value);

    return () => {
      for (const [name] of variables) style.removeProperty(name);
    };
  }, [preset, selectedTheme]);

  return (
    <>
      <label className={styles.themePicker}>
        <span>Theme</span>
        <select
          value={selectedTheme}
          onChange={(event) => setSelectedTheme(event.currentTarget.value as ThemeName)}
        >
          {Object.entries(themes).map(([name, { label }]) => (
            <option key={name} value={name}>{label}</option>
          ))}
        </select>
      </label>
      <YouTubeMusic ref={musicRef} />
      {opened ? (
        <>
          <HeroSection petals={preset.petals} />
          <div className={styles.celebration}>
            <EventsVenue />
            <WeddingTimeline />
            <PhotoGallery />
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
