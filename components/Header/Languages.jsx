import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.css";

const Languages = () => {
  const [fakeLng, setFakeLng] = useState("en");

  return (
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
  );
};

export default Languages;
