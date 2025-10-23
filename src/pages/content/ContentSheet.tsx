import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

export function ContentSheet() {
  const { content, editContent } = useContext(ContentContext);

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
      <SheetContent side="left" className=" bg-stone-800 ">
        <SheetHeader>
          <SheetTitle>Editer le site</SheetTitle>
          <SheetDescription>
            Changez ici les paramètres de votre site afin de le rendre à votre
            image.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <ToggleTheme />
          <Input
            onChange={(e) =>
              editContent({ ...content, company_name: e.target.value })
            }
            type="text"
            placeholder={content.company_name}
            value={content.company_name}
          />
          <Input
            onChange={(e) =>
              editContent({ ...content, company_description: e.target.value })
            }
            type="text"
            value={content.company_description}
            placeholder={content.company_description}
          />
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
