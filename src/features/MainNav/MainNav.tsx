import headerLinks from "@/data/nav";
import styles from "./MainNav.module.sass";
import Link from "next/link";

const MainNav = () => {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.navList}>
        {headerLinks.map((links, index) => (
          <li key={index} className={styles.navItem}>
            <Link href={links.href} className={styles.navLink}>
              {links.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
