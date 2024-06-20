"use client";

import { useContext } from "react";
import styles from "./button.module.css";
import { ThemeContext } from "@/context/ThemeContext";

// type toggleTheme = {
//   theme: "dark" | "light";
//   onChange?: () => void;
// };

export const ToggleBtn = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div onClick={toggle} className={styles.toggleBtn}>
      <div className={`${styles.circle} ${styles?.[theme] || ""}`}></div>
    </div>
  );
};
