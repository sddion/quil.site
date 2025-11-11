"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GitMerge, Home, Milestone, Settings } from "lucide-react";
export function TerminalHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const routes = [
    { href: "/", label: "home", icon: <Home size="1em" /> },
    { href: "/hardware", label: "hardware", icon: <Settings size="1em" /> },
    { href: "/future-goals", label: "roadmap", icon: <Milestone size="1em" /> },
    {
      href: "/interaction",
      label: "interaction",
      icon: <GitMerge size="1em" />,
    },
  ];

  return (
    <header
      className="border-border bg-background/95 crt-scan sticky top-0 z-50 border-b backdrop-blur-sm"
      role="banner"
    >
      <nav className="mx-auto max-w-7xl px-4 py-3" aria-label="Main navigation">
        <div className="flex items-center justify-between gap-4">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="terminal-text hover:text-accent text-lg transition-colors"
            aria-label="Quil home"
          >
            &gt; quil
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex" role="menubar">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`terminal-text flex items-center gap-1 rounded-sm px-3 py-2 text-sm transition-all ${
                  pathname === route.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-card"
                }`}
                aria-current={pathname === route.href ? "page" : undefined}
                role="menuitem"
              >
                {route.icon} {route.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="terminal-text hover:text-accent text-lg transition-colors md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="border-border mt-3 flex flex-col gap-2 border-t pt-3 md:hidden"
            role="menu"
          >
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`terminal-text flex items-center gap-1 rounded-sm px-3 py-2 text-sm transition-all ${
                  pathname === route.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-card"
                }`}
                onClick={() => setMenuOpen(false)}
                role="menuitem"
              >
                {route.icon} {route.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
