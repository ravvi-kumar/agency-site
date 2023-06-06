"use client";

import { PropsWithChildren, createContext, useState } from "react";

type Mode = "dark" | "light";

interface IThemeContext {
  toggle: () => void;
  mode: Mode;
}
export const ThemeContext = createContext<IThemeContext>({
  mode: "dark",
  toggle: () => console.log(),
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<Mode>("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
