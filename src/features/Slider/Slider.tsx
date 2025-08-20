// components/Trainers/Slider/Slider.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Slider.module.sass";
import SliderNav from "../SliderNav/SliderNav";
import SliderBtn from "../SliderBtn/SliderBtn";
import { trainers } from "@/data/trainers"; // Убедись, что путь правильный

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trainers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? trainers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        <div
          className={styles.slideContainer}
          style={{
            transform: `translateX(-${currentIndex * 360}px)`, // Сдвигаем контейнер
          }}
        >
          {trainers.map((trainer) => (
            <div key={trainer.id} className={styles.slide}>
              <div className={styles.card}>
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  width={360}
                  height={500}
                  className={styles.image}
                  unoptimized // Если используешь внешние изображения
                />
                <h3 className={styles.name}>{trainer.name}</h3>
                <p className={styles.role}>{trainer.role}</p>
                <button className={styles.button}>Подробнее</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.sliderFooter}>
        <SliderNav />
        <SliderBtn onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
};

export default Slider;
