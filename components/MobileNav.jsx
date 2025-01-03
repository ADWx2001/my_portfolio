"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

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
        <div className="mt-20 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Asanka<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav links */}
        <nav className="flex flex-col items-center space-y-4">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`${
                link.href === pathname &&
                "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
