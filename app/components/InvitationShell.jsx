"use client";

import { useCallback, useState } from "react";
import Hero from "./Hero/Hero";
import TempleDoor from "./TempleDoor/TempleDoor";

// Hero waits behind the temple doors. When the doors finish opening,
// `revealed` starts the Hero entrance; `introDone` removes the overlay.
export default function InvitationShell() {
  const [revealed, setRevealed] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  const handleReveal = useCallback(() => setRevealed(true), []);
  const handleDone = useCallback(() => setIntroDone(true), []);

  return (
    <>
      <Hero play={revealed} />
      {!introDone && <TempleDoor onReveal={handleReveal} onDone={handleDone} />}
    </>
  );
}