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
import { useContext } from "react";
import { ContentContext } from "@/providers/ContentContext";

export default function Navbar() {
  const { content } = useContext(ContentContext);

  return (
    /** vvvv Choose alignment for navbar vvvv */
    <div className={` mx-auto flex ${content.navbar_alignment}`}>
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
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} hover:bg-[var(--navbar-menu-active)] text-[var(--navbar-titles)]`}
              >
                <Link href={"/"}>Acceuil</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className=" text-[var(--navbar-titles)]  data-[state=open]:bg-[var(--navbar-menu-active)]">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent asChild>
                <ul className=" text-left bg-[var(--navbar-menu)]">
                  <li>
                    <NavigationMenuLink
                      asChild
                      className=" hover:bg-[var(--navbar-bg)]"
                    >
                      <Link href={"/monopage"}>
                        <div className=" font-bold">
                          {content.service_1_name}
                        </div>

                        <p className=" italic min-w-[250px]">
                          {content.service_1_description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      asChild
                      className=" hover:bg-[var(--navbar-bg)]"
                    >
                      <Link href={"/ecommerce"}>
                        <div className=" font-bold">
                          {content.service_2_name}
                        </div>

                        <p className=" italic min-w-[250px]">
                          {content.service_2_description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className=" text-[var(--navbar-titles)]  data-[state=open]:bg-[var(--navbar-menu-active)]">
                Contact
              </NavigationMenuTrigger>
              <NavigationMenuContent asChild>
                <ul className=" text-left bg-[var(--navbar-menu)]">
                  <li>
                    <NavigationMenuLink
                      asChild
                      className=" hover:bg-[var(--navbar-bg)]"
                    >
                      <Link href={"/lentreprise"}>
                        <div className=" font-bold">L'entreprise</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      asChild
                      className=" hover:bg-[var(--navbar-bg)]"
                    >
                      <Link href={"/devis"}>
                        <div className=" font-bold">Devis</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      asChild
                      className=" hover:bg-[var(--navbar-bg)]"
                    >
                      <Link href={"/contact"}>
                        <div className=" font-bold">Contact</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
