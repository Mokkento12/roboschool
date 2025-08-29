"use client";

import styles from "./PackageCard.module.sass";

interface PackageCardProps {
  pkg: {
    id: string;
    title: string;
    price: string;
    description: string;
    bgColor: string;
    textColor: string;
    buttonColor: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

const PackageCard = ({ pkg, isSelected, onClick }: PackageCardProps) => {
  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      style={{
        backgroundColor: pkg.bgColor,
        color: pkg.textColor,
      }}
      onClick={onClick}
    >
      <div className={styles.title}>{pkg.title}</div>
      <div className={styles.price}>{pkg.price}</div>
      <div className={styles.description}>{pkg.description}</div>
      <button
        className={styles.button}
        style={{
          backgroundColor: pkg.buttonColor,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        Оставить заявку
      </button>
    </div>
  );
};

export default PackageCard;
