"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";

const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "services" },
    { href: "/resume", label: "resume" },
    { href: "/contact", label: "contact" },
    { href: "/portfolio", label: "portfolio" },
  ];

function MobileNav() {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent"></CiMenuFries>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/* logo */}
            <div>
                
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav