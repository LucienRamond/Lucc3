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
import ToggleTheme from "@/providers/ToggleTheme";
import { ArrowBigRightIcon } from "lucide-react";

export function ContentSheet() {
  return (
    <Sheet modal={false}>
      <SheetTrigger className=" data-[state=open]:hidden" asChild>
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
          <Input type="text" placeholder="Company name" />
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
