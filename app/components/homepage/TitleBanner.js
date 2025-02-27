import styles from "./styles/Topbar.module.css";

const TitleBanner = () => {
  return (
    <div className={styles.titleBanner}>
      <h1 className={styles.title}>Idea Lab Kiosk</h1>
      <p className={styles.tagline}>Empowering Creativity and Innovation</p>
    </div>
  );
};

export default TitleBanner;