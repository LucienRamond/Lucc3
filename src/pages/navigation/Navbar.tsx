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
import { useContext } from "react";
import { ContentContext } from "@/providers/ContentContext";

export default function Navbar() {
  const { content } = useContext(ContentContext);

  return (
    /** vvvv Choose alignment for navbar vvvv */
    <div className={` mx-auto flex ${alignNavbar.start}`}>
      <div className=" grid gap-2 grid-cols-[max-content_1fr]">
        <div className=" flex">
          {/** vvvv Import your logo vvvv */}
          <img src="/vite.svg" className=" p-2" />
          {/* vvvv Type your company name here */}
          <div className=" h-full font-bold text-2xl text-[var(--company-name)]">
            <span className=" align-sub">{content.company_name}</span>
          </div>
        </div>

        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {menu.map((m) => {
              if (m.style == "simple") {
                return (
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={`${navigationMenuTriggerStyle()} hover:bg-[var(--navbar-menu-active)] text-[var(--navbar-titles)]`}
                    >
                      <Link href={`${m.content.nav}`}>{m.content.title}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              } else {
                return (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className=" text-[var(--navbar-titles)]  data-[state=open]:bg-[var(--navbar-menu-active)]">
                      {m.content.maintTitle}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent asChild>
                      <ul className=" text-left bg-[var(--navbar-menu)]">
                        {m.content.navigation?.map((nav) => {
                          return (
                            <li>
                              <NavigationMenuLink
                                asChild
                                className=" hover:bg-[var(--navbar-bg)]"
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
