"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import MagicalOpening from "./components/MagicalOpening";
import WeddingInvitation from "./components/WeddingInvitation";

export default function Home() {
  const [showInvitation, setShowInvitation] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!showInvitation ? (
        <motion.div
          key="opening"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MagicalOpening
            onOpenComplete={() => setShowInvitation(true)}
          />
        </motion.div>
      ) : (
        <motion.div
          key="invitation"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <WeddingInvitation />
        </motion.div>
      )}
    </AnimatePresence>
  );
}