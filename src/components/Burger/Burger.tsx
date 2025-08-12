"use client";

import { useSelector } from "react-redux";
import styles from "./Burger.module.sass";
import { RootState } from "@/store/store";

interface BurgerProps {
  onClick: () => void;
}

const Burger = ({ onClick }: BurgerProps) => {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);

  const handleClick = () => {
    onClick();
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
