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
import menu from "./menu";

export default function MobileNavbar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {/* vvvv Choose your burger icon here vvvv */}
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[100vw] bg-white text-left p-2 border-y mt-2"
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
  );
}
