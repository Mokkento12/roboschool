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
    selectedBgColor: string;
    selectedTextColor: string;
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
        backgroundColor: isSelected ? pkg.selectedBgColor : pkg.bgColor,
        color: isSelected ? pkg.selectedTextColor : pkg.textColor,
        width: isSelected ? "360px" : "360px",
        height: isSelected ? "500px" : "460px",
        transition:
          "height 0.3s ease, background-color 0.3s ease, color 0.3s ease",
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
