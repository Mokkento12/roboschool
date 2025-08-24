"use client";
import Image from "next/image";
import styles from "./Modal.module.sass";
import Tabs from "../Tabs/Tabs";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  trainer: {
    id: string;
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
        <div className={styles.card}>
          <button className={styles.closeButton} onClick={onClose}>
            Закрыть
          </button>
          <Image
            src={trainer.image}
            alt={trainer.name}
            width={360}
            height={500}
            className={styles.image}
            unoptimized
          />
          <div className={styles.textContainer}>
            <h3 className={styles.name}>{trainer.name}</h3>
            <p className={styles.modalRole}>{trainer.role}</p>
            <div className={styles.socialIcons}>
              <span className={styles.icon}>
                <Image
                  src={"/image/fb.svg"}
                  width={30}
                  height={30}
                  alt="Facebook"
                />
              </span>
              <span className={styles.icon}>
                <Image
                  src={"/image/inst.svg"}
                  width={30}
                  height={30}
                  alt="Instagram"
                />
              </span>
            </div>
          </div>
          <Tabs trainerId={trainer.id} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
