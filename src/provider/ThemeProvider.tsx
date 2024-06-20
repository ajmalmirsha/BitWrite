"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { ReactNode, useContext, useEffect, useState } from "react";

export function ThemeProvider({ children }: { children?: ReactNode }) {
  const { theme, toggle } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted) {
    return <div className={theme || "dark"}>{children}</div>;
  }
}
