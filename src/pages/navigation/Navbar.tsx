import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "@radix-ui/react-navigation-menu";
import { menu, alignNavbar } from "./menu";

export default function Navbar() {
  return (
    /** vvvv Choose alignment for navbar vvvv */
    <div className={` flex ${alignNavbar.center}`}>
      <div className=" grid grid-cols-[max-content_1fr]">
        {/** vvvv Import your logo vvvv */}
        <img src="/vite.svg" className=" p-2" />
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {menu.map((m) => {
              if (m.style == "simple") {
                return (
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={`${navigationMenuTriggerStyle()} hover:bg-black/15`}
                    >
                      <Link href={`${m.content.nav}`}>{m.content.title}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              } else {
                return (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="  data-[state=open]:bg-black/15">
                      {m.content.maintTitle}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent asChild>
                      <ul className=" text-left bg-[var(--bg-color)]">
                        {m.content.navigation?.map((nav) => {
                          return (
                            <li>
                              <NavigationMenuLink
                                asChild
                                className=" hover:bg-black/15"
                              >
                                <Link href={nav.nav}>
                                  <div className=" font-bold">{nav.title}</div>
                                  {nav.description && (
                                    <p className=" italic min-w-[250px]">
                                      {nav.description}
                                    </p>
                                  )}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          );
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
