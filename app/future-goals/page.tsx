"use client"

import { TerminalHeader } from "@/components/terminal-header"
import { PageTransition } from "@/components/page-transition"
import { ModalRoadmap } from "@/components/modal-roadmap"
import { FAQSchema } from "@/components/faq-schema"

interface RoadmapItem {
  id: string
  phase: string
  title: string
  description: string
}

export default function FutureGoalsPage() {
  const roadmapItems: RoadmapItem[] = [
    {
      id: "prototype",
      phase: "Phase 0",
      title: "Prototype — Current Development",
      description:
        "Active development and testing on ESP32 and ESP8266 microcontroller platforms. Building the foundation with voice recognition, gesture control, and display integration. Testing hardware architecture and firmware stack optimization.",
    },
    {
      id: "v2-camera",
      phase: "Phase 1",
      title: "Vision AI — Real-Time Mood Detection",
      description:
        "Integrates real-time mood and emotion detection using on-device inference. Camera module enables advanced computer vision capabilities while maintaining privacy through local processing. No data leaves the device.",
    },
    {
      id: "future-ota",
      phase: "Phase 2",
      title: "OTA Updates & Cloud Learning",
      description:
        "Modular firmware upgrades deployed over-the-air without manual reflashing. Optional cloud-side learning improves model accuracy while users maintain control over data sharing preferences. Seamless update pipeline.",
    },
    {
      id: "v3-pentesting",
      phase: "Phase 3",
      title: "PenTesting Edition — Security Research",
      description:
        "Dedicated firmware with hardened Wi-Fi stack and on-device penetration testing toolkit. Designed for security researchers and ethical hackers to audit networks safely and responsibly. Red team ready.",
    },
  ]

  // FAQ data for GEO
  const faqs = [
    {
      question: "What is Quil's development roadmap?",
      answer: "Quil follows a phased development approach starting with prototype development on ESP32/ESP8266 platforms, followed by Vision AI integration, OTA updates, and a specialized PenTesting edition for security research."
    },
    {
      question: "When will Quil be available for purchase?",
      answer: "Quil is currently in the prototype development phase. The timeline for commercial availability depends on successful testing and community feedback. As an open-source project, DIY assembly will be possible once the prototype phase is complete."
    },
    {
      question: "What are the privacy implications of Quil's future features?",
      answer: "Privacy is a core principle of Quil's design. All processing happens on-device by default. Future cloud features will require explicit user consent, and users maintain complete control over data sharing preferences."
    },
    {
      question: "Will Quil support other microcontroller platforms?",
      answer: "While initially focused on ESP32/ESP8266, Quil's modular design allows for porting to other platforms. Community contributions for additional platform support are encouraged and welcomed."
    }
  ]

  return (
    <PageTransition>
      <div className="bg-background min-h-screen overflow-x-hidden relative">
     

        <TerminalHeader />

        <section className="w-full px-4 py-8 md:py-12 lg:py-16" role="main">
          <div className="mx-auto max-w-5xl">
            {/* Header */}
            <div className="mb-12 md:mb-16">
              <h1 className="text-primary font-mono text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
                $ cat ./roadmap.md
              </h1>
              <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed max-w-2xl">
                Development phases from prototype through advanced capabilities. Click any phase to explore its details.
              </p>
            </div>

            {/* Modal Roadmap */}
            <ModalRoadmap items={roadmapItems} />

            {/* Info Section */}
            <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-border">
              <h2 className="text-primary font-mono text-xl md:text-2xl font-bold mb-4">Privacy & Data</h2>
              <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
                All processing happens on-device by default. Optional cloud features require explicit user consent. No
                telemetry or tracking without permission. Your data, your rules.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Schema for GEO */}
        <FAQSchema 
          faqs={faqs} 
          pageTitle="Quil Development Roadmap" 
          pageDescription="Explore Quil's development phases from prototype through advanced capabilities including Vision AI, OTA updates, and security research editions." 
        />

        {/* CRT Scan Lines */}
        <div className="crt-scan pointer-events-none fixed inset-0" />
      </div>
    </PageTransition>
  )
}