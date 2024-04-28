import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

export default function AidButton() {
  return <button className={styles.button}>Підтримати проєкт</button>;
}
