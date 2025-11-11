"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { GitMerge, Home, Milestone, Settings } from "lucide-react"
import gsap from "gsap"
export function TerminalHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const routes = [
    { href: "/", label: "home", icon: <Home size="1em" /> },
    { href: "/hardware", label: "hardware", icon: <Settings size="1em" /> },
    { href: "/future-goals", label: "roadmap", icon: <Milestone size="1em" /> },
    { href: "/interaction", label: "interaction", icon: <GitMerge size="1em" /> },
  ]

  return (
    <header
      className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50 crt-scan"
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 py-3" aria-label="Main navigation">
        <div className="flex items-center justify-between gap-4">
          {/* Logo/Brand */}
          <Link href="/" className="terminal-text text-lg hover:text-accent transition-colors" aria-label="Quil home">
            &gt; quil
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1" role="menubar">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`px-3 py-2 text-sm terminal-text rounded-sm transition-all flex items-center gap-1 ${
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
            className="md:hidden terminal-text text-lg hover:text-accent transition-colors"
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
          <div id="mobile-menu" className="md:hidden mt-3 pt-3 border-t border-border flex flex-col gap-2" role="menu">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`px-3 py-2 text-sm terminal-text rounded-sm transition-all flex items-center gap-1 ${
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
  )
}
