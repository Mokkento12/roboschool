"use client";

import styles from "./ProgressBar.module.sass";

interface ProgressBarProps {
  currentIndex: number;
  totalSlides: number;
}

const ProgressBar = ({ currentIndex, totalSlides }: ProgressBarProps) => {
  const progress = ((currentIndex + 1) / totalSlides) * 100;

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progress}
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
