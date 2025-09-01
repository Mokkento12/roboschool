"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Form.module.sass";
import { RootState } from "@/store/store";
import {
  submitError,
  submitForm,
  submitSuccess,
  updateField,
} from "@/store/slices/formSlice";
import type { FormFields } from "@/types";

const Form = () => {
  const dispatch = useDispatch();
  const { formData, status, error } = useSelector(
    (state: RootState) => state.form
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name as keyof FormFields, value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data: FormFields = { ...formData };

    if (!data.name || !data.phone || !data.email) {
      dispatch(submitError("Пожалуйста, заполните все поля!"));
      return;
    }

    dispatch(submitForm());

    setTimeout(() => {
      dispatch(submitSuccess());
      alert("Заявка отправлена!");
      console.log("Отправленные данные:", data);
    }, 1000);
  };

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

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
            required
            className={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className={styles.submitBtn}
          >
            {status === "loading" ? "Отправка..." : "Отправить заявку"}
          </button>

          {status === "error" && <p className={styles.error}>{error}</p>}
          {status === "success" && (
            <p className={styles.success}>Заявка успешно отправлена!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
