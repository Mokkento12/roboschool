import Link from "next/link";
import styles from "./Contacts.module.sass";
const Contacts = () => {
  return (
    <div>
      <Link href="tel:+7 800 000 11 22" className={styles.tel}>
        +7 800 000 11 22
      </Link>
    </div>
  );
};

export default Contacts;
