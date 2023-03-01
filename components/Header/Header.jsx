import styles from "@/styles/Header.module.css";
import Image from "next/image";
import smallLogo from "../../public/images/logo-small.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex-row-space-between padding">
      <Image alt="logo small" src={smallLogo} />
      <div className={styles.empty}></div>
      <div className={styles.nav}>
        <a href="#about" className="horizontal-margin">
          About
        </a>
        <a href="#join-us" className="horizontal-margin">
          Join us
        </a>
        <a href="#contact" className="horizontal-margin">
          Contact
        </a>
      </div>
      <div>
        <Link href="/en/home" className="uppercase">
          en
        </Link>
        <Link href="/pt/home" className="uppercase horizontal-margin-sm">
          pt
        </Link>
        <Link href="/fr/home" className="uppercase">
          fr
        </Link>
      </div>
    </div>
  );
};
export default Header;
