"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import MainNav from "@/features/MainNav/MainNav";
import { toggleMenu } from "@/store/slices/menuSlice";
import Logo from "../UI/Logo/Logo";
import styles from "./Header.module.sass";
import Contacts from "../UI/Contacts/Contacts";
import Burger from "../Burger/Burger";
import PhoneIcon from "../UI/PhoneIcon/PhoneIcon";

import Link from "next/link";

const Header = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.items.length
  );

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        {/* Показываем навигацию только на десктопах */}
        <div className={styles.desktopNav}>
          <MainNav />
        </div>
        <div className={styles.cartIcon}>
          <Link href="/cart">🛒 Корзина ({cartItemsCount})</Link>
        </div>
        <Contacts />
        <PhoneIcon />
        <Burger onClick={handleToggleMenu} />
      </div>

      {isOpen && (
        <div className={`${styles.mobileNav} ${styles.open}`}>
          <button className={styles.closeButton} onClick={handleToggleMenu}>
            ×
          </button>
          <MainNav />
        </div>
      )}
    </header>
  );
};

export default Header;
