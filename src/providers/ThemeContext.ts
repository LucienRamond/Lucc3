import { createContext } from "react";

interface ContextProps {
  theme: string;
  toggleTheme: (arg0: string) => void;
}

export const ThemeContext = createContext<ContextProps>({
  theme: "dark",
  toggleTheme: () => {},
});
