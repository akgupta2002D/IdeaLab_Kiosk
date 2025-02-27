"use client";

import styles from "./styles/KioskButtons.module.css";

const KioskButtons = () => {
  return (
    <div className={styles.kioskButtons}>
      {/* Find Something Button */}
      <button className={`${styles.kioskButton} ${styles.primary}`}>
        Find Something
      </button>

      {/* AI Chat Bot Button */}
      <button className={`${styles.kioskButton} ${styles.warning} ${styles.ai}`}>
        Ask Our AI
      </button>

      {/* Guides Button */}
      <button className={`${styles.kioskButton} ${styles.primary}`}>
        GUIDES
      </button>
    </div>
  );
};

export default KioskButtons;