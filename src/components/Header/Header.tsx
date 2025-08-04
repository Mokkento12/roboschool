import MainNav from "@/features/MainNav/MainNav";
import Logo from "../UI/Logo/Logo";
import styles from "./Header.module.sass";
import Contacts from "../UI/Contacts/Contacts";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <MainNav />
        <Contacts />
      </div>
    </header>
  );
};

export default Header;
