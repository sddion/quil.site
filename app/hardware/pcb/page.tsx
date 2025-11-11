"use client"

import Link from "next/link"
import { TerminalHeader } from "@/components/terminal-header"
import { PageTransition } from "@/components/page-transition"
import { Button } from "@/components/ui/button"
import { Hourglass } from "lucide-react"

export default function PcbPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background crt-scan">
        <TerminalHeader />
        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-6 text-center">
          <Hourglass size={64} className="text-primary animate-pulse" />
          <h1 className="terminal-text text-4xl md:text-5xl text-primary animate-fade-in">
            Coming Soon
          </h1>
          <p className="text-muted-foreground text-lg max-w-md">
            I'm working hard to bring you this content. Please check back later!
          </p>
          <Link href="/" passHref>
            <Button className="terminal-text">Return to Homepage</Button>
          </Link>
        </div>
      </div>
    </PageTransition>
  )
}
