import { useContext, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "./ThemeContext";

export default function ToggleTheme() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkTheme ? "dark" : "light"
    );
  }, [darkTheme]);

  return (
    <div onClick={toggleTheme} className=" hidden">
      {darkTheme ? <Sun /> : <Moon />}
    </div>
  );
}
