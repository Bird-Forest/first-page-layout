import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.center}>
      <h1>Hello world</h1>
      {/* <Image
        className={styles.logo}
        src="../../public/logo.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      /> */}
    </div>
  );
}
