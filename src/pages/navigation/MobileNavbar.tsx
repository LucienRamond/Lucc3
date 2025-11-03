import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { MenuIcon, MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { ContentContext } from "@/providers/ContentContext";
import { useContext } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MobileNavbar() {
  const { content, editContent } = useContext(ContentContext);

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
              className={` row-start-1 col-start-1 col-end-3 col-span-2 w-fit ${alignBurger.end}`}
            >
              {/* vvvv Choose your burger icon here vvvv */}
              <MenuIcon />
            </Button>
            {/** vvvv Import your logo vvvv */}
            <div className="row-start-1 col-start-1 col-end-3 col-span-2 justify-self-center flex gap-2">
              <img src="/vite.svg" />
              {/* vvvv Type your company name here */}
              <div className=" h-full font-bold text-2xl text-[var(--company-name)]">
                <span className="">Lucc3</span>
              </div>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[100vw] bg-[var(--navbar-menu-active)] text-left p-2 border-y mt-2"
          align="start"
        >
          <DropdownMenuItem className=" text-[var(--navbar-titles)] font-semibold">
            <a href={`/`}>Acceuil</a>
          </DropdownMenuItem>
          <DropdownMenuLabel className="text-[var(--navbar-titles)] font-semibold">
            Services
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem className=" ml-6">
              <a href={`/service1`}>{content.service_1_name}</a>
            </DropdownMenuItem>
            {content.service_number >= 2 && (
              <DropdownMenuItem className=" ml-6">
                <a href={`/service2`}>{content.service_2_name}</a>
              </DropdownMenuItem>
            )}
            {content.service_number == 3 && (
              <DropdownMenuItem className=" ml-6">
                <a href={`/service3`}>{content.service_3_name}</a>
              </DropdownMenuItem>
            )}
            <Accordion
              type="single"
              collapsible
              className="w-full min-w-[250px]"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:bg-[var(--navbar-bg)]/50 p-1 justify-center"></AccordionTrigger>
                <AccordionContent className="flex flex-col p-0 gap-4 text-balance">
                  <div className=" grid grid-cols-2 p-1 pb-0 gap-2 w-full min-w-[250px]">
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
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </DropdownMenuGroup>
          <DropdownMenuLabel className="text-[var(--navbar-titles)] font-semibold">
            Contact
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem className=" ml-6">
              <a href={`/lentreprise`}>L'entreprise</a>
            </DropdownMenuItem>
            <DropdownMenuItem className=" ml-6">
              <a href={`/devis`}>Devis</a>
            </DropdownMenuItem>
            <DropdownMenuItem className=" ml-6">
              <a href={`/contact`}>Contact</a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
