import styles from "@/styles/Header.module.css";
import Image from "next/image";
import smallLogo from "../../public/images/logo-small.svg";
import menu from "../../public/images/menu-icon.svg";
import close from "../../public/images/close-icon.svg";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from "hooks";
import { Icon } from "@/components";
import { Nav } from "@/components";

const Header = () => {
  const ref = useRef();
  const [fakeLng, setFakeLng] = useState("en");
  const [modalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div className={styles.header + " flex-row-space-between padding"}>
      <Link href="/">
        <Image className={styles.logo} alt="logo small" src={smallLogo} />
      </Link>

      <div className={styles.empty}></div>

      <Nav className={styles.nav + " body1"} />

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

      <div className={styles.menuIcon} onClick={() => setModalOpen(!modalOpen)}>
        <Icon alt="menu" src={menu} />
      </div>

      {modalOpen ? (
        <div ref={ref} className={styles.menuModal}>
          <div className={styles.menuHeader + " flex-row-end padding"}>
            <Icon alt="close" src={close} onClick={() => setModalOpen(false)} />
          </div>
          <Nav className={styles.navMobile + " flex-column-start"} />
        </div>
      ) : null}
    </div>
  );
};
export default Header;
