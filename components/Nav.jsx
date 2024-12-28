"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "services" },
  { href: "/resume", label: "resume" },
  { href: "/contact", label: "contact" },
  { href: "/portfolio", label: "portfolio" },
];

function Nav() {
    const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link 
          key={index} 
          href={link.href}
          className={`${
            link.href === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
