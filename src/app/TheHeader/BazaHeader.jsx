import React from "react";
import styles from "./Header.module.css";
import Navigate from "./Navigate";
import BazaLogo from "./BazaLogo";
import AidButton from "./AidButton";
import LanguageBtn from "./LanguageBtn";

const navLink = [
  { label: " Головна", href: "/" },
  { label: "Стажування", href: "/trainees" },
  { label: "Проєкти", href: "/projects" },
  { label: "Блог", href: "/blog" },
  { label: "Контакти", href: "/contacts" },
];

export default function BazaHeader() {
  return (
    <div className={styles.topbg}>
      <header className={styles.header}>
        <wrap className={styles.wrap}>
          <BazaLogo />
          <Navigate links={navLink} />
          <AidButton />
          <LanguageBtn />
        </wrap>
      </header>
    </div>
  );
}
