"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Slider.module.sass";
import SliderBtn from "../SliderBtn/SliderBtn";
import { trainers } from "@/data/trainers";
import ProgressBar from "../ProgressBar/ProgressBar";
import Modal from "../Modal/Modal";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTrainer, setSelectedTrainer] = useState<
    null | (typeof trainers)[0]
  >(null);

  const slideWidth = 360;
  const visibleSlides = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;

      return newIndex >= trainers.length - visibleSlides + 1 ? 0 : newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;

      return newIndex < 0 ? trainers.length - visibleSlides : newIndex;
    });
  };

  const openModal = (trainer: (typeof trainers)[0]) => {
    setSelectedTrainer(trainer);
  };

  const closeModal = () => {
    setSelectedTrainer(null);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        <div
          className={styles.slideContainer}
          style={{
            transform: `translateX(-${currentIndex * slideWidth}px)`,
            transition: "transform 0.5s ease-in-out",
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
                  unoptimized
                />
                <h3 className={styles.name}>{trainer.name}</h3>
                <p className={styles.role}>{trainer.role}</p>
                <button
                  className={styles.button}
                  onClick={() => openModal(trainer)}
                >
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.sliderFooter}>
        <ProgressBar
          currentIndex={currentIndex}
          totalSlides={trainers.length - visibleSlides + 1}
        />
        <SliderBtn onPrev={handlePrev} onNext={handleNext} />
      </div>
      {selectedTrainer && (
        <Modal isOpen={true} onClose={closeModal} trainer={selectedTrainer} />
      )}
    </div>
  );
};

export default Slider;
