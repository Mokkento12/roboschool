import styles from "./Hero.module.sass";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.desc}>
          <h2 className={styles.title}>ROBO SCHOOL</h2>
          <p className={styles.text}>
            Курсы повышения квалификации по робототехнике для педагогов
            начальной школы
          </p>
          <button className={styles.btn}>Записаться на курс</button>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={"/image/hero-img.png"}
            width={783}
            height={918}
            alt="Hero Image"
            className={styles.heroImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
