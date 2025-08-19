import { trainers } from "@/data/trainers";
import Image from "next/image";
import styles from "./Slider.module.sass";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        {trainers.map((trainer, index) => (
          <div key={trainer.id} className={styles.slide}>
            <div className={styles.card}>
              <Image
                src={trainer.image}
                alt={trainer.name}
                width={360}
                height={500}
                className={styles.image}
              />
              <h3 className={styles.name}>{trainer.name}</h3>
              <p className={styles.role}>{trainer.role}</p>
              <button className={styles.button}>Подробнее</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
