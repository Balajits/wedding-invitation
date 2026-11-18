import styles from "./NextSection.module.css";

export default function NextSection() {
  return (
    <main className={styles.wrap}>
      <h2 className={styles.heading}>Invitation details coming next</h2>
      <p className={styles.text}>Event schedule, venue and RSVP sections will go here.</p>
    </main>
  );
}
