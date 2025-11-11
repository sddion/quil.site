
import Link from "next/link"

interface FooterLink {
  href: string
  text: string
}

interface FooterProps {
  projectLinks?: FooterLink[]
  socialLinks?: FooterLink[]
  infoText?: string
  defaultCommand?: string
}

export function Footer({
  projectLinks = [{ href: "https://github.com/sddion/quil", text: "GitHub" }],
  socialLinks = [
    { href: "https://instagram.com/wordswires", text: "Instagram" },
    { href: "https://x.com/sddion_", text: "X (Twitter)" },
  ],
  infoText = `© ${new Date().getFullYear()} Quil Project · Open source · Built with care`,
  defaultCommand = "", 
}: FooterProps) {
  return (
    <footer className="border-t border-border bg-background/50 mt-12 py-8 crt-scan" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="terminal-text text-sm mb-4 text-primary">$ cd ./project</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {projectLinks.length > 0 ? (
                projectLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
                    >
                      → {link.text}
                    </Link>
                  </li>
                ))
              ) : (
                <li>
                  <p className="text-xs text-muted-foreground">No project links available.</p>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h3 className="terminal-text text-sm mb-4 text-primary">$ ls ./social</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {socialLinks.length > 0 ? (
                socialLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
                    >
                      → {link.text}
                    </Link>
                  </li>
                ))
              ) : (
                <li>
                  <p className="text-xs text-muted-foreground">No social links available.</p>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h3 className="terminal-text text-sm mb-4 text-primary">$ cat ./info</h3>
            <p className="text-xs text-muted-foreground">{infoText}</p>
            {defaultCommand && <p className="text-xs text-muted-foreground mt-2">{defaultCommand}</p>}
          </div>
        </div>
      </div>
    </footer>
  )
}
