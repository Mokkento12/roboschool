"use client";
import Image from "next/image";
import styles from "./Modal.module.sass";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  trainer: {
    name: string;
    role: string;
    image: string;
    bio?: string;
  };
}

const Modal = ({ isOpen, onClose, trainer }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          Закрыть
        </button>
        <div className={styles.card}>
          <Image
            src={trainer.image}
            alt={trainer.name}
            width={360}
            height={500}
            className={styles.image}
            unoptimized
          />
          <h3 className={styles.name}>{trainer.name}</h3>
          <p className={styles.role}>{trainer.role}</p>
          <p className={styles.bio}>{trainer.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
