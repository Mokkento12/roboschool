import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.sass";
const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/image/logo.svg"
        width={228}
        height={48}
        alt="Logo"
        className={styles.logoImage}
      />
    </Link>
  );
};

export default Logo;
