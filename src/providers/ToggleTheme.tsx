import { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className=" hover:bg-black/30">
          Couleur du theme
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[350px] bg-stone-800">
        <DropdownMenuRadioGroup value={theme} onValueChange={toggleTheme}>
          <DropdownMenuRadioItem value="dark" className=" hover:bg-black/30">
            Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="cool" className=" hover:bg-black/30">
            Cool and collected
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="redandlively"
            className=" hover:bg-black/30"
          >
            Red and lively
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
