"use client";

import Image from "next/image";
import styles from "./SliderBtn.module.sass";

interface SliderBtnProps {
  onPrev: () => void;
  onNext: () => void;
}

const SliderBtn = ({ onPrev, onNext }: SliderBtnProps) => {
  return (
    <div className={styles.buttons}>
      <button className={styles.prevButton} onClick={onPrev}>
        <Image
          src={"/image/slider/arrow-left.svg"}
          width={40}
          height={40}
          alt="arrow"
        />
      </button>
      <button className={styles.nextButton} onClick={onNext}>
        <Image
          src={"/image/slider/arrow-right.svg"}
          width={40}
          height={40}
          alt="arrow"
        />
      </button>
    </div>
  );
};

export default SliderBtn;
