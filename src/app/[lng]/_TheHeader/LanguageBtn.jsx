"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
// import i18nConfig from "../../../i18nConfig";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Header.module.css";
import { languages, fallbackLng } from "../../i18n/settings";
import Link from "next/link";
import { useState } from "react";

export default function LanguageBtn() {
  const [isOpen, setIsOpen] = useState(true);
  const pathName = usePathname();
  console.log(pathName);
  const segments = pathName.split("/");
  console.log(segments);
  const lng = segments[1];
  console.log(lng);
  // const newPath =
  // const redirectedPathName = (lng) => {
  //   if (!pathName) return "/";
  //   const segments = pathName.split(pathName);
  //   console.log(segments);
  //   const lng = segments[1]
  //   return segments.join("/");
  // };
  return (
    <div className={styles.lngwrap}>
      <div className={styles.lngselect}>
        <input
          className={styles.lnginput}
          id="lng"
          name="lng"
          value={lng.toUpperCase()}
          readOnly={lng}
        />
        <ul
          className={styles.lnglist}
          style={{
            display: isOpen ? "none" : "block",
          }}
        >
          {languages.map((lng) => {
            return (
              <li key={lng}>
                <Link href={lng} className={styles.lnglink}>
                  {lng.toUpperCase()}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.btnicon}>
        {isOpen ? (
          <FaChevronDown className={styles.icon} />
        ) : (
          <FaChevronUp className={styles.icon} />
        )}
      </button>
    </div>
  );
}

// import React from "react";
// import styles from "./Header.module.css";
// import { FaChevronDown } from "react-icons/fa";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// export default function LanguageBtn() {
//   const pathName = usePathname();
//   const redirectedPathName = (locale) => {
//     if (!pathName) return "/";
//     const segments = pathName.split("/");
//     segments[1] = locale;
//     return segments.join("/");
//   };

//   const locales = ["uk", "en", "pl"];

//   return (
//     <div className={styles.language}>
//       <ul>
//         {locales.map((locale) => {
//           return (
//             <li key={locale}>
//               <Link href={redirectedPathName(locale)}>{locale}</Link>
//             </li>
//           );
//         })}
//       </ul>
//       <FaChevronDown className={styles.icon} />
//     </div>
//   );
// }
