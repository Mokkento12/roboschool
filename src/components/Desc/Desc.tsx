import styles from "./Desc.module.sass";

const Desc = () => {
  return (
    <div className={styles.desc}>
      <div className={styles.container}>
        <p className={styles.text}>
          <b>Robo School</b> – учреждение для формирования кадрового
          педагогического резерва в сфере робототехники
          <br />и программирования
        </p>
        <div className={styles.indicators}>
          <div className={styles.indicator}>
            <span className={styles.number}>10</span>
            <span className={styles.txt}>
              УМК по различным направлениям по робототехнике
            </span>
          </div>
          <div className={styles.indicator}>
            <span className={styles.number}>20</span>
            <span className={styles.txt}>
              Школ, в которых запущена робототехника
            </span>
          </div>
          <div className={styles.indicator}>
            <span className={styles.number}>100</span>
            <span className={styles.txt}>
              Педагогов прошедших курсы повышения квалификации
            </span>
          </div>
          <div className={styles.indicator}>
            <span className={styles.number}>10 000</span>
            <span className={styles.txt}>
              Обученных детей на базе собственных центров
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desc;
