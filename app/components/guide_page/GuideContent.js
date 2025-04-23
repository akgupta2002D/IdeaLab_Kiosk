import React from 'react';
import styles from './styles/GuideContent.module.css';

const GuideContent = ({ machine }) => {
  return (
    <section className={styles.guideContent}>
      <h2>{machine.name} Guide</h2>
      <p>{machine.guide}</p>
      <img className={styles.image} src={machine.image} alt="3d printer guide" />
    </section>
  );
};

export default GuideContent;
