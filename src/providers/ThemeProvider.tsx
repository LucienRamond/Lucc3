import React, { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

interface Props {
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  function getThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("dark");
    }
  }

  useEffect(() => {
    getThemeFromLocalStorage();
  }, []);

  function toggleThemeHandler(newTheme: string) {
    setTheme(() => {
      localStorage.setItem("theme", newTheme.toString());
      return newTheme;
    });
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: toggleThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
