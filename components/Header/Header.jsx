import styles from "@/styles/Header.module.css";
import Image from "next/image";
import smallLogo from "../../public/images/logo-small.svg";
import menu from "../../public/images/menu-icon.svg";
import close from "../../public/images/close-icon.svg";
import Link from "next/link";
import { useState, useRef } from "react";
import { useOnClickOutside } from "hooks";
import { Icon, Nav, Languages } from "@/components";

const Header = () => {
  const ref = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div className={styles.header + " flex-row-space-between padding"}>
      <Link href="/">
        <Image className={styles.logo} alt="logo small" src={smallLogo} />
      </Link>
      <div className={styles.empty}></div>
      <Nav className={styles.nav + " body1"} />
      <Languages />

      <div className={styles.menuIcon} onClick={() => setModalOpen(!modalOpen)}>
        <Icon alt="menu" src={menu} />
      </div>

      {modalOpen ? (
        <div className={styles.backdrop}>
          <div ref={ref} className={styles.menuModal}>
            <div className={styles.menuHeader + " flex-row-space-between padding"}>
              <Languages />
              <Icon
                alt="close"
                src={close}
                onClick={() => setModalOpen(false)}
              />
            </div>
            <Nav className={styles.navMobile + " flex-column-start"} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Header;
