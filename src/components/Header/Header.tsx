"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import MainNav from "@/features/MainNav/MainNav";
import Logo from "../UI/Logo/Logo";
import styles from "./Header.module.sass";
import Contacts from "../UI/Contacts/Contacts";
import Burger from "../Burger/Burger";
import PhoneIcon from "../UI/PhoneIcon/PhoneIcon";

const Header = () => {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        {/* Показываем навигацию только на десктопах */}
        <div className={styles.nav}>
          <MainNav />
        </div>
        <Contacts />
        <PhoneIcon />
        <Burger />
      </div>

      {/* Показываем навигацию в мобильном меню */}
      {isOpen && (
        <div className={styles.mobileNav}>
          <MainNav />
        </div>
      )}
    </header>
  );
};

export default Header;
