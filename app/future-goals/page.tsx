"use client"

import { TerminalHeader } from "@/components/terminal-header"
import { PageTransition } from "@/components/page-transition"
import { ModalRoadmap } from "@/components/modal-roadmap"
import { RoboticsBackground } from "@/components/robotics-background"

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

  return (
    <PageTransition>
      <div className="bg-background min-h-screen overflow-x-hidden relative">
        <RoboticsBackground />

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

        {/* CRT Scan Lines */}
        <div className="crt-scan pointer-events-none fixed inset-0" />
      </div>
    </PageTransition>
  )
}
