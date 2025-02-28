import Link from "next/link";
import styles from "./styles/KioskButtons.module.css";

const KioskButtons = () => {
  return (
    <div className={styles.kioskButtons}>
      {/* Find Something Button */}
      <Link href="/find-something">
        <button className={`${styles.kioskButton} ${styles.primary}`}>
          Find Something
        </button>
      </Link>

      {/* AI Chat Bot Button */}
      <Link href="/ai-chat">
        <button className={`${styles.kioskButton} ${styles.warning} ${styles.ai}`}>
          Ask Our AI
        </button>
      </Link>

      {/* Guides Button */}
      <Link href="/guides">
        <button className={`${styles.kioskButton} ${styles.primary}`}>
          GUIDES
        </button>
      </Link>
    </div>
  );
};

export default KioskButtons;
