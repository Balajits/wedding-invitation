"use client";

import { useEffect, useLayoutEffect, useRef, useState, type FormEvent } from "react";
import { FirebaseError, getApps, initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, limit, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import FloatingHearts from "../FloatingHearts/FloatingHearts";
import styles from "./WeddingWishes.module.css";

const firebaseConfig = {
  apiKey: "AIzaSyD3h-yAxbVXlqteiLKESSckUxOWjpk8Mdw",
  authDomain: "bh-wedding-8b35a.firebaseapp.com",
  projectId: "bh-wedding-8b35a",
  storageBucket: "bh-wedding-8b35a.firebasestorage.app",
  messagingSenderId: "987964615403",
  appId: "1:987964615403:web:7d0a00dc80e0c57925acae",
};

function getWishes() {
  const appName = "wedding-guestbook";
  const app = getApps().find(({ name }) => name === appName)
    ?? initializeApp(firebaseConfig, appName);
  return collection(getFirestore(app), "wishes");
}

const HEARTS = [[6, 9], [91, 12], [12, 37], [86, 43], [5, 70], [93, 68], [18, 91], [80, 92]] as const;
const DESCRIPTION_LIMIT = 80;
const PREVIEW_LIMIT = 60;

interface Wish {
  id: string;
  name: string;
  description: string;
}

function WishCard({ wish }: { wish: Wish }) {
  const [expanded, setExpanded] = useState(false);
  const characters = Array.from(wish.description);
  const canExpand = characters.length > PREVIEW_LIMIT;
  const description = canExpand && !expanded
    ? `${characters.slice(0, PREVIEW_LIMIT).join("").trimEnd()}…`
    : wish.description;
  const descriptionId = `wish-description-${wish.id}`;

  return (
    <li>
      <p>{wish.name}</p>
      <blockquote id={descriptionId} className={expanded ? styles.expanded : undefined}>
        {description}
      </blockquote>
      {canExpand && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={descriptionId}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </li>
  );
}

export default function WeddingWishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loadStatus, setLoadStatus] = useState<"loading" | "ready" | "error">("loading");
  const [sendStatus, setSendStatus] = useState<"idle" | "pending" | "sent" | "invalid" | "error">("idle");
  const [sendError, setSendError] = useState("");
  const sending = useRef(false);
  const wishList = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const list = wishList.current;
    const scrollArea = list?.parentElement;
    const thirdCard = list?.children[2];
    if (!list || !scrollArea || !thirdCard || wishes.length <= 3) return;

    function fitThreeCards() {
      if (!list || !scrollArea || !thirdCard) return;
      const height = thirdCard.getBoundingClientRect().bottom - list.getBoundingClientRect().top;
      scrollArea.style.maxHeight = `${height}px`;
    }

    fitThreeCards();
    const observer = new ResizeObserver(fitThreeCards);
    Array.from(list.children).slice(0, 3).forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
      scrollArea.style.removeProperty("max-height");
    };
  }, [wishes]);

  useEffect(() => {
    const latest = query(getWishes(), orderBy("createdAt", "desc"), limit(50));
    return onSnapshot(latest, { includeMetadataChanges: true }, (snapshot) => {
      setWishes(snapshot.docs.flatMap((doc) => {
        const { name, description } = doc.data();
        return !doc.metadata.hasPendingWrites && typeof name === "string" && typeof description === "string"
          ? [{ id: doc.id, name, description }]
          : [];
      }));
      if (!snapshot.metadata.fromCache) setLoadStatus("ready");
    }, () => setLoadStatus("error"));
  }, []);

  async function sendWish(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    const name = String(fields.get("name") ?? "").trim();
    const description = String(fields.get("description") ?? "").trim();
    if (!name || !description || name.length > 80 || description.length > DESCRIPTION_LIMIT) {
      setSendStatus("invalid");
      return;
    }

    sending.current = true;
    setSendStatus("pending");
    try {
      await addDoc(getWishes(), { name, description, createdAt: serverTimestamp() });
      form.reset();
      setSendStatus("sent");
    } catch (error) {
      const code = error instanceof FirebaseError ? error.code : "unknown";
      console.error("Firestore guestbook submission failed", error);
      setSendError(
        code === "permission-denied"
          ? "Firestore denied this submission. Please ask the couple to check the guestbook permissions."
          : `Your wish couldn’t be sent (${code}). Please try again.`
      );
      setSendStatus("error");
    } finally {
      sending.current = false;
    }
  }

  return (
    <section className={styles.section} aria-labelledby="wishes-title">
      <FloatingHearts positions={HEARTS} />
      <div className={styles.content}>
        <header className={styles.header}>
          <h2 id="wishes-title">Send Your Wishes</h2>
          <p>Leave a little love for the newlyweds.</p>
        </header>

        <form className={styles.form} onSubmit={sendWish}>
          <fieldset disabled={sendStatus === "pending"}>
            <label>
              Your name
              <input name="name" autoComplete="name" required maxLength={80} />
            </label>
            <label>
              Your wish (up to {DESCRIPTION_LIMIT} characters)
              <textarea name="description" required maxLength={DESCRIPTION_LIMIT} rows={3} />
            </label>
            <button type="submit">{sendStatus === "pending" ? "Sending…" : "Send wish"}</button>
          </fieldset>
          <p className={styles.status} role="status">
            {sendStatus === "sent" && "Your wish was sent. Thank you!"}
            {sendStatus === "invalid" && "Please enter your name and a wish."}
            {sendStatus === "error" && sendError}
            {sendStatus === "pending" && "Waiting for your wish to be saved."}
          </p>
        </form>

        <div className={styles.messages}>
          <h3 id="guest-wishes-title">Wishes from Our Guests</h3>
          <div role="status">
            {loadStatus === "loading" && wishes.length === 0 && <p>Loading wishes…</p>}
            {loadStatus === "error" && <p>Wishes couldn’t be loaded. Please refresh to try again.</p>}
            {loadStatus === "ready" && wishes.length === 0 && <p>Be the first to leave a wish.</p>}
          </div>
          {wishes.length > 0 && (
            <div
              className={styles.wishScroll}
              role="region"
              aria-labelledby="guest-wishes-title"
              tabIndex={0}
            >
              <ul className={styles.list} ref={wishList}>
                {wishes.map((wish) => <WishCard key={wish.id} wish={wish} />)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
