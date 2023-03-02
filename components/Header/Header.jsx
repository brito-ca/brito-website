import styles from "@/styles/Header.module.css";
import Image from "next/image";
import smallLogo from "../../public/images/logo-small.svg";
import Link from "next/link";
import { useState } from "react";
import { useLng } from "hooks";
import { Icon } from "@/components";
import menu from "../../public/images/menu-icon.svg";

const Header = () => {
  const { isEn, isPr, isFr } = useLng();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.header + " flex-row-space-between padding"}>
      <Link href="/">
        <Image className={styles.logo} alt="logo small" src={smallLogo} />
      </Link>

      <div className={styles.empty}></div>

      <div className={styles.nav + " body1"}>
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

      <div className={styles.languages + " body4"}>
        <Link
          href="/en/home"
          className={`uppercase ${isEn ? styles.active : ""}`}
        >
          en
        </Link>
        <Link
          href="/pt/home"
          className={`uppercase horizontal-margin-sm ${
            isPr ? styles.active : ""
          }`}
        >
          pt
        </Link>
        <Link
          href="/fr/home"
          className={`uppercase ${isFr ? styles.active : ""}`}
        >
          fr
        </Link>
      </div>

      <div className={styles.menu} onClick={() => setShowMenu(!showMenu)}>
        <Icon alt="menu" src={menu} />
      </div>

      {showMenu && <div>Menu</div>}
    </div>
  );
};
export default Header;
