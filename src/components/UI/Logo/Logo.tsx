import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <Link href="/">
      <Image src="/image/logo.svg" width={228} height={48} alt="Logo" />
    </Link>
  );
};

export default Logo;
