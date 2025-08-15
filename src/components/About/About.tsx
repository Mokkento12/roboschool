import { indicators } from "@/data/about";
import styles from "./About.module.sass";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <p className={styles.text}>
          <b>Robo School</b> – учреждение для формирования кадрового
          педагогического резерва в сфере робототехники
          <br />и программирования
        </p>
        <div className={styles.indicators}>
          {indicators.map((item, index) => (
            <div key={index} className={styles.indicator}>
              <span className={styles.number}>{item.number}</span>
              <span className={styles.desc}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
