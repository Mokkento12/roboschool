"use client";

import Contacts from "../UI/Contacts/Contacts";
import CopyRight from "../UI/CopyRight/CopyRight";
import Logo from "../UI/Logo/Logo";
import styles from "./Footer.module.sass";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.rightBlock}>
          <Logo />
          <CopyRight />
        </div>
        <Contacts />
      </div>
    </div>
  );
};

export default Footer;
