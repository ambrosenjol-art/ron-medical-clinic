"use client";

import BrandLogo from "@/components/BrandLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/content";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8" aria-label="Main navigation">
        <BrandLogo />
        <ul className="hidden flex-wrap items-center gap-4 text-sm font-medium lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-3 py-2 transition ${
                    active ? "bg-[#0077B6] text-white" : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
