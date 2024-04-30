"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
// import i18nConfig from "../../../i18nConfig";
import { FaChevronDown } from "react-icons/fa";
import styles from "./Header.module.css";

export default function LanguageBtn() {
  // const { i18n } = useTranslation();
  // console.log("i18n", i18n);
  // const currentLocale = i18n.language;
  // console.log("currentLocale", currentLocale);
  // const router = useRouter();
  // const currentPathname = usePathname();

  // const handleChange = (e) => {
  //   const newLocale = e.target.value;
  //   console.log("newLocale", newLocale);
  //   // redirect to the new locale path
  //   if (
  //     currentLocale === i18nConfig.defaultLocale &&
  //     !i18nConfig.prefixDefault
  //   ) {
  //     router.push("/" + newLocale + currentPathname);
  //   } else {
  //     router.push(
  //       currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
  //     );
  //   }

  //   router.refresh();
  // };

  return (
    <div className={styles.language}>
      <select>
        <option value="uk">UA</option>
        <option value="en">EN</option>
        <option value="pl">PL</option>
      </select>
      <FaChevronDown className={styles.icon} />
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
