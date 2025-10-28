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
import { Button } from "@/components/ui/button";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Navbar() {
  const { content, editContent } = useContext(ContentContext);

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
                <Link href={"/"}>Accueil</Link>
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
                      <Link href={"/service1"}>
                        <div className=" font-bold">
                          {content.service_1_name}
                        </div>

                        <p className=" italic w-[250px]">
                          {content.service_1_description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  {content.service_number >= 2 && (
                    <li>
                      <NavigationMenuLink
                        asChild
                        className=" hover:bg-[var(--navbar-bg)]"
                      >
                        <Link href={"/service2"}>
                          <div className=" font-bold">
                            {content.service_2_name}
                          </div>

                          <p className=" italic w-[250px]">
                            {content.service_2_description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  )}
                  {content.service_number == 3 && (
                    <li>
                      <NavigationMenuLink
                        asChild
                        className=" hover:bg-[var(--navbar-bg)]"
                      >
                        <Link href={"/service3"}>
                          <div className=" font-bold">
                            {content.service_3_name}
                          </div>

                          <p className=" italic w-[250px]">
                            {content.service_3_description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  )}

                  <Accordion
                    type="single"
                    collapsible
                    className="w-full min-w-[250px]"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="hover:bg-[var(--navbar-bg)]/50 p-1 justify-center "></AccordionTrigger>
                      <AccordionContent className="flex flex-col p-0 gap-4 text-balance">
                        <div className=" grid grid-cols-2 p-1 pb-0 gap-2 w-full min-w-[250px]">
                          <li>
                            <Button
                              disabled={content.service_number == 1}
                              onClick={() =>
                                editContent({
                                  ...content,
                                  service_number: content.service_number - 1,
                                })
                              }
                              className="mb-2 cursor-pointer w-full hover:bg-[var(--navbar-bg)] border rounded flex justify-center"
                            >
                              <MinusCircleIcon />
                            </Button>
                          </li>

                          <li>
                            <Button
                              disabled={content.service_number == 3}
                              onClick={() =>
                                editContent({
                                  ...content,
                                  service_number: content.service_number + 1,
                                })
                              }
                              className=" cursor-pointer w-full hover:bg-[var(--navbar-bg)] border rounded flex justify-center"
                            >
                              <PlusCircleIcon />
                            </Button>
                          </li>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
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
