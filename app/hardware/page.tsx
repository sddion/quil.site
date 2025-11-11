"use client"

import { TerminalHeader } from "@/components/terminal-header"
import { CardFile } from "@/components/card-file"
import { PageTransition } from "@/components/page-transition"
import { File } from "lucide-react"
import { FAQSchema } from "@/components/faq-schema"
import { HowToSchema } from "@/components/howto-schema"

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

  // FAQ data for GEO
  const faqs = [
    {
      question: "What hardware platforms does Quil support?",
      answer: "Quil is primarily designed for ESP32 microcontroller platforms with active development and testing. The design is also adaptable to ESP8266 with some limitations."
    },
    {
      question: "What are the hardware components included in Quil?",
      answer: "Quil includes an ESP32 microcontroller, integrated microphone array, speaker driver circuit, OLED display, gesture sensors, and supporting power management components. All components are selected for open-source compatibility."
    },
    {
      question: "Can I modify the hardware design?",
      answer: "Yes, all hardware designs are released under the AGPL-3.0 license, making them fully open-source. You can modify, distribute, and use the designs for personal or commercial projects with proper attribution."
    },
    {
      question: "What PCB manufacturers are compatible with Quil's Gerber files?",
      answer: "Quil's Gerber files are compatible with standard PCB manufacturers including JLCPCB, PCBWay, Oshpark, and others. The design uses a 2-layer board optimized for low-cost production."
    }
  ]

  // HowTo steps for GEO
  const assemblySteps = [
    {
      name: "Gather Components",
      text: "Collect all required components including ESP32 microcontroller, microphone array, speaker driver, OLED display, and supporting components as listed in the Bill of Materials."
    },
    {
      name: "Prepare PCB",
      text: "Inspect the PCB for any manufacturing defects. If using a PCB service, ensure the Gerber files have been correctly interpreted and manufactured to specifications."
    },
    {
      name: "Solder Components",
      text: "Follow the assembly guide to solder components to the PCB. Start with smaller components like resistors and capacitors, then move to larger components like the ESP32 module."
    },
    {
      name: "Flash Firmware",
      text: "Connect the assembled board to your computer and flash the Quil firmware using the provided flashing tools and instructions."
    },
    {
      name: "Test Functionality",
      text: "Power on the device and test all functions including voice recognition, gesture sensing, display output, and speaker functionality."
    }
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

        {/* FAQ Schema for GEO */}
        <FAQSchema 
          faqs={faqs} 
          pageTitle="Quil Hardware Documentation" 
          pageDescription="KiCad schematic files, PCB layouts, and Gerber manufacturing files for Quil hardware. Open-source and ready for fabrication." 
        />

        {/* HowTo Schema for GEO */}
        <HowToSchema 
          steps={assemblySteps}
          title="How to Assemble Quil Hardware"
          description="Step-by-step guide to assembling the Quil voice assistant device from PCB to finished product"
          timeRequired="PT120M"
          estimatedCost={{
            currency: "USD",
            value: "50"
          }}
        />

        {/* CRT Scan Lines */}
        <div className="crt-scan pointer-events-none fixed inset-0" />
      </div>
    </PageTransition>
  )
}