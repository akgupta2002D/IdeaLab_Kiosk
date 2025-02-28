import React from 'react';
import styles from './styles/GuideContent.module.css';

const GuideContent = ({ machine }) => {
  return (
    <section className={styles.guideContent}>
      <h2>{machine.name} Guide</h2>
      <p>{machine.guide}</p>
    </section>
  );
};

export default GuideContent;
