"use client";

import React from "react";
import styles from "./Header.module.css";
// import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

export default function LanguageBtn() {
  return (
    <div className={styles.language}>
      <h4 className={styles.text}>UA</h4>
      <FaChevronDown className={styles.icon} />
      {/* <FaChevronUp /> */}
    </div>
  );
}
