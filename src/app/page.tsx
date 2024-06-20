"use client"

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export default function Home() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
   <>hello world
   
   Theme {theme}
   </>
  );
}
