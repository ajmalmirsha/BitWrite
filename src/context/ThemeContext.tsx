"use client";

import { ReactNode, createContext, useState } from "react";


type ThemeContextType = {
    theme: string;
    toggle: () => void;
  };


export const ThemeContext = createContext<ThemeContextType>({ toggle: () => {}, theme: "dark" });

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {

  const [theme, setTheme] = useState("dark");

  const toggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ toggle, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
