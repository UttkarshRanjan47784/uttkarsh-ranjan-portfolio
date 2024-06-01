import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function HamMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="hover:bg-muted transition-all duration-300 hover:scale-105 h-full p-5 cursor-pointer">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-5xl">Portfolio</SheetTitle>
          <SheetDescription className="text-xl font-mono">
            Uttkarsh Ranjan
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col justify-center items-center mt-48 text-center">
          <div className="w-full hover:bg-muted transition-all duration-300 hover:scale-105 h-full p-5 cursor-pointer">
            Home
          </div>
          <div className="w-full hover:bg-muted transition-all duration-300 hover:scale-105 h-full p-5 cursor-pointer">
            Skills
          </div>
          <div className="w-full hover:bg-muted transition-all duration-300 hover:scale-105 h-full p-5 cursor-pointer">
            Projects
          </div>
          <div className="w-full hover:bg-muted transition-all duration-300 hover:scale-105 h-full p-5 cursor-pointer">
            Contact
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
