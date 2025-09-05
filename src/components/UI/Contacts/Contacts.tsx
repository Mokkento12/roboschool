// components/UI/Contacts/Contacts.tsx

import Link from "next/link";
import styles from "./Contacts.module.sass";

interface ContactsProps {
  variant?: "header" | "footer"; // ✅ Добавлен пропс variant
}

const Contacts = ({ variant = "header" }: ContactsProps) => {
  return (
    <div>
      <Link
        href="tel:+7 800 000 11 22"
        className={`${styles.tel} ${
          variant === "footer" ? styles.footerTel : ""
        }`}
      >
        +7 800 000 11 22
      </Link>
    </div>
  );
};

export default Contacts;
