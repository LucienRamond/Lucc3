import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ContentContext } from "@/providers/ContentContext";
import ToggleTheme from "@/providers/ToggleTheme";
import { ArrowBigRightIcon } from "lucide-react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import HomeContent from "./HomeContent";
import CompanyContent from "./CompanyContent";
import Service1Content from "./Service1Content";
import Service2Content from "./Service2Content";

export function ContentSheet() {
  const { content, editContent } = useContext(ContentContext);
  const location = useLocation();

  return (
    <Sheet modal={false}>
      <SheetTrigger
        className="h-[50px] opacity-50 hover:opacity-100 data-[state=open]:hidden"
        asChild
      >
        <div className=" absolute">
          <Button
            variant="outline"
            className=" h-[50px] cursor-pointer border-l-0 bg-stone-800 rounded-l-none sticky mt-[40vh]"
          >
            <ArrowBigRightIcon color="white" className=" scale-120" />
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent side="left" className=" bg-stone-800 sm:w-fit w-full">
        <SheetHeader>
          <SheetTitle>Editer le site</SheetTitle>
          <SheetDescription>
            Changez ici les paramètres de votre site afin de le rendre à votre
            image.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <ToggleTheme />
          <div className=" w-full grid justify-center">
            <div className=" grid gap-2">
              <div>Alignement du menu </div>
              <ButtonGroup className="grid grid-cols-[1fr_1fr_1fr] w-[350px]">
                <Button
                  onClick={() =>
                    editContent({
                      ...content,
                      navbar_alignment: "justify-start",
                    })
                  }
                  className=" hover:bg-black/30 cursor-pointer"
                  variant={"outline"}
                >
                  Gauche
                </Button>
                <Button
                  onClick={() =>
                    editContent({
                      ...content,
                      navbar_alignment: "justify-center",
                    })
                  }
                  className=" hover:bg-black/30 cursor-pointer"
                  variant={"outline"}
                >
                  Centre
                </Button>
                <Button
                  onClick={() =>
                    editContent({ ...content, navbar_alignment: "justify-end" })
                  }
                  className=" hover:bg-black/30 cursor-pointer"
                  variant={"outline"}
                >
                  Droite
                </Button>
              </ButtonGroup>
            </div>
          </div>
          {location.pathname == "/" && (
            <HomeContent
              content={content}
              editContent={(new_content) => editContent(new_content)}
            />
          )}
          {location.pathname == "/lentreprise" && (
            <CompanyContent
              content={content}
              editContent={(new_content) => editContent(new_content)}
            />
          )}
          {location.pathname == "/monopage" && (
            <Service1Content
              content={content}
              editContent={(new_content) => editContent(new_content)}
            />
          )}
          {location.pathname == "/ecommerce" && (
            <Service2Content
              content={content}
              editContent={(new_content) => editContent(new_content)}
            />
          )}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
