import styles from "./OpenButton.module.css";

interface OpenButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function OpenButton({ onClick, disabled = false }: OpenButtonProps) {
  return (
    <button type="button" className={styles.button} onClick={onClick} disabled={disabled}>
      <span className={styles.shine} aria-hidden="true" />
      <span className={styles.label}>Open Invitation</span>
    </button>
  );
}
