"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/games", label: "Games" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/spotlight", label: "Spotlight" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/learn", label: "Learn" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 dark:bg-tbc-gray-900/95 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-tbc-gray-700/50"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-tbc-orange flex items-center justify-center shadow-orange group-hover:scale-105 transition-transform">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <div>
              <span className="font-bold text-base text-gray-900 dark:text-white tracking-tight">
                TBC
              </span>
              <span className="hidden sm:inline text-gray-500 dark:text-gray-400 text-sm ml-1 font-medium">
                Badminton
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "text-tbc-orange bg-tbc-orange/10"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-tbc-gray-800"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/games"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-tbc-orange text-white text-sm font-semibold hover:bg-tbc-orange-dark transition-all duration-200 shadow-orange hover:shadow-orange-lg hover:scale-[1.02]"
            >
              <Zap className="w-3.5 h-3.5 fill-white" />
              Join a Game
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-tbc-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white dark:bg-tbc-gray-900 border-t border-gray-200 dark:border-tbc-gray-700 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
                pathname === link.href
                  ? "text-tbc-orange bg-tbc-orange/10"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-tbc-gray-800"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <Link
              href="/games"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-tbc-orange text-white font-semibold hover:bg-tbc-orange-dark transition-colors"
            >
              <Zap className="w-4 h-4 fill-white" />
              Join a Game
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
