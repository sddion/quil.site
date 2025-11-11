"use client"

import { TerminalHeader } from "@/components/terminal-header"
import { CardFile } from "@/components/card-file"
import { PageTransition } from "@/components/page-transition"
import { File } from "lucide-react"

interface GerberFile {
  id: string
  description: string
  tag: string
  thumbnailUrl?: string
  comingSoon?: boolean
}

export default function HardwarePage() {
  const gerberFiles: GerberFile[] = [
    {
      id: "schematic",
      description:
        "Complete circuit schematic including ESP32, microphone array, speaker driver, and OLED display connections.",
      tag: "Schematic",
      comingSoon: true,
    },
    {
      id: "pcb",
      description: "Main PCB layout optimized for signal integrity and thermal management.",
      tag: "PCB",
      comingSoon: true,
    },
    {
      id: "gerber",
      description: "Gerber files for daughter board (microphone array). Ready for production.",
      tag: "Gerber",
      comingSoon: true,
    },
    {
      id: "assembly",
      description: "Step-by-step assembly instructions with diagrams for hand-soldering or reflow.",
      tag: "Assembly Guide",
      comingSoon: true,
    },
  ]


  return (
    <PageTransition>
      <div className="bg-background">
        <TerminalHeader />

        <section className="max-w-7xl mx-auto px-4 py-12" role="main">
          <div className="mb-12">
            <h1 className="terminal-text text-4xl md:text-5xl mb-4 text-primary">
              $ cat ./hardware
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              All KiCad schematic files, PCB layouts, and Gerber manufacturing files for Quil hardware. Open-source and
              ready for fabrication.
            </p>
          </div>

          {/* Gerber Files Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gerberFiles.map((file) => (
              <div key={file.id} data-card>
                <CardFile
                  title={file.tag}
                  description={file.description}
                  isFolder={true}
                  icon={<File size="1em" />}
                  onClick={() => (window.location.href = `/hardware/${file.id}`)}
                />
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-12 p-6 bg-card border border-border rounded-sm">
            <h2 className="terminal-text text-lg mb-4 text-primary">$ ls ./info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <h3 className="terminal-text text-accent mb-2">Fabrication</h3>
                <p>
                  Gerber files compatible with JLCPCB, PCBWay, Oshpark, and other standard PCB manufacturers. 2-layer
                  design optimized for low-cost production.
                </p>
              </div>
              <div>
                <h3 className="terminal-text text-accent mb-2">Design Software</h3>
                <p>
                  All files created with KiCad 8.0+. Open-source and cross-platform compatible. No proprietary tools
                  required.
                </p>
              </div>
              <div>
                <h3 className="terminal-text text-accent mb-2">License</h3>
               <p>
                  All hardware designs are released under the AGPL-3.0 license. This ensures the designs remain open-source and encourages community contributions and modifications.
                </p>
              </div>
              <div>
                <h3 className="terminal-text text-accent mb-2">Support</h3>
                <p>
                  Questions? Check the GitHub issues or community forum. Detailed assembly guides included for
                  reference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CRT Scan Lines */}
        <div className="crt-scan pointer-events-none fixed inset-0" />
      </div>
    </PageTransition>
  )
}
