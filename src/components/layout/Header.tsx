"use client";

import Link from "next/link";
import { Menu, Palette } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/icons/Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#about", label: "About" },
  { href: "/apply", label: "For Artists" },
];

export function Header() {
  const pathname = usePathname();

  const NavLink = ({ href, label, isMobile }: { href: string; label: string, isMobile?: boolean }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        (pathname === href && href !== "/") || (href.startsWith("/#") && pathname === "/")
          ? "text-primary"
          : "text-foreground/80",
        isMobile && "py-2 text-lg"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Palette className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">Laya Art Gallery</span>
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col items-start space-y-4 pt-8">
                {navLinks.map((link) => (
                  <NavLink key={`mobile-${link.href}`} {...link} isMobile />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
