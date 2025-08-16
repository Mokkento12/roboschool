import { benefits } from "../../data/benefits";
import styles from "./Benefits.module.sass";

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <div className={styles.container}>
        <h2 className={styles.title}>Что вы получите после курса</h2>
        <div className={styles.items}>
          {benefits.map((item, index) => (
            <div key={index} className={styles.benefit}>
              {/* Оборачиваем заголовок и кнопку в один блок */}
              <div className={styles.benefitHeader}>
                <h2 className={styles.benefitTitle}>{item.title}</h2>
                {index === benefits.length - 1 && (
                  <button className={styles.infoButton}>
                    <span className={styles.infoIcon}>i</span>
                    <span className={styles.tooltip}>
                      При наличии свободных мест
                    </span>
                  </button>
                )}
              </div>
              <p className={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
