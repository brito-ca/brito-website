import styles from "@/styles/Header.module.css";
import Image from "next/image";
import smallLogo from "../../public/images/logo-small.svg";
import Link from "next/link";
import { useState, useRef } from "react";
import { useOnClickOutside } from "hooks";
import { Icon } from "@/components";
import menu from "../../public/images/menu-icon.svg";

const Header = () => {
  const ref = useRef();
  const [fakeLng, setFakeLng] = useState("en");
  const [showMenu, setShowMenu] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

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
          href="/"
          className={`uppercase ${fakeLng === "en" ? styles.active : ""}`}
          onClick={() => setFakeLng("en")}
        >
          en
        </Link>
        <Link
          href="/"
          className={`uppercase horizontal-margin-sm ${
            fakeLng === "pt" ? styles.active : ""
          }`}
          onClick={() => setFakeLng("pt")}
        >
          pt
        </Link>
        <Link
          href="/"
          className={`uppercase ${fakeLng === "fr" ? styles.active : ""}`}
          onClick={() => setFakeLng("fr")}
        >
          fr
        </Link>
      </div>

      <div className={styles.menu} onClick={() => setShowMenu(!showMenu)}>
        <Icon alt="menu" src={menu} />
      </div>

      {showMenu && <div ref={ref}>Menu</div>}
    </div>
  );
};
export default Header;
