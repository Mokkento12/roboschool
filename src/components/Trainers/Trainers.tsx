import Slider from "@/features/Slider/Slider";
import styles from "./Trainer.module.sass";

const Trainers = () => {
  return (
    <div className={styles.trainers}>
      <div className={styles.container}>
        <h2 className={styles.title}>Профессиональные тренеры</h2>
        <Slider />
      </div>
    </div>
  );
};

export default Trainers;
