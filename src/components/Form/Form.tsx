import styles from "./Form.module.sass";

const Form = () => {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.container}>
        <div className={styles.desc}>
          <h2 className={styles.title}>
            Запишитесь на курс <br />
            со скидкой 10%
          </h2>
          <p className={styles.text}>
            Акция действительна до 10 марта 2022 года
          </p>
        </div>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Имя"
            required
            className={styles.input}
          />
          <input
            type="phone"
            placeholder="Телефон"
            required
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.submitBtn}>
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
