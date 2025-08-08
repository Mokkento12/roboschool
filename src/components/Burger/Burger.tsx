"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Burger.module.sass";
import { RootState } from "@/store/store";
import { toggleMenu } from "@/store/slice/menuSlice";

const Burger = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);

  const handleClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <button
      className={`${styles.burger} ${isOpen ? styles.active : ""}`}
      onClick={handleClick}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
};

export default Burger;
