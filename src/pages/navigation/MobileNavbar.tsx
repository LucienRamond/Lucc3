import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { MenuIcon } from "lucide-react";
import { menu } from "./menu";

export default function MobileNavbar() {
  const alignBurger = {
    start: "justify-self-start",
    end: "justify-self-end",
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className={`grid grid-cols-2`}>
            <Button
              variant="outline"
              /* vvvv Choose burger alignment here vvvv */
              className={` row-start-1 col-start-1 col-end-3 col-span-2 w-fit ${alignBurger.start}`}
            >
              {/* vvvv Choose your burger icon here vvvv */}
              <MenuIcon />
            </Button>
            {/** vvvv Import your logo vvvv */}
            <img
              src="/vite.svg"
              className=" row-start-1 col-start-1 col-end-3 col-span-2 justify-self-center"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[100vw] bg-[var(--bg-color)] text-left p-2 border-y mt-2"
          align="start"
        >
          {menu.map((m) => {
            if (m.style == "simple") {
              return (
                <DropdownMenuItem className=" font-semibold">
                  <a href={`${m.content.nav}`}>{m.content.title}</a>
                </DropdownMenuItem>
              );
            } else {
              return (
                <>
                  <DropdownMenuLabel className=" font-semibold">
                    {m.content.maintTitle}
                  </DropdownMenuLabel>
                  <DropdownMenuGroup>
                    {m.content.navigation?.map((nav) => {
                      return (
                        <DropdownMenuItem key={nav.description}>
                          <a href={`${nav.nav}`}>&emsp;{nav.title}</a>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuGroup>
                </>
              );
            }
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
