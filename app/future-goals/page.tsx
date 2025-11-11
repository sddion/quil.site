"use client"

import { useState } from "react"
import { TerminalHeader } from "@/components/terminal-header"
import { PageTransition } from "@/components/page-transition"
import { Roadmap } from "@/components/roadmap-3d"

interface RoadmapMilestone {
  id: string
  phase: string
  title: string
  description: string
  color: string
  icon: string
}

export default function FutureGoalsPage() {
  const milestones: RoadmapMilestone[] = [
    {
      id: "prototype",
      phase: "Phase 0",
      title: "Prototype — Current Development",
      description:
        "Active development and testing on ESP32 and ESP8266 microcontroller platforms. Building the foundation with voice recognition, gesture control, and display integration.",
      color: "rgb(112, 200, 180)",
      icon: "◆",
    },
      {
      id: "v2-camera",
      phase: "Phase 1",
      title: "Vision AI ",
      description:
        "Integrates real-time mood and emotion detection using on-device inference. Camera module enables advanced computer vision capabilities while maintaining privacy through local processing.",
      color: "rgb(100, 200, 255)",
      icon: "◈",
    },
    {
      id: "future-ota",
      phase: "Phase 2",
      title: "Future: OTA Updates & Cloud Learning",
      description:
        "Modular firmware upgrades deployed over-the-air without manual reflashing. Optional cloud-side learning improves model accuracy while users maintain control over data sharing preferences.",
      color: "rgb(200, 180, 100)",
      icon: "◎",
    },
        {
      id: "v3-pentesting",
      phase: "Phase 3",
      title: "PenTesting Edition",
      description:
        "Dedicated firmware with hardened Wi-Fi stack and on-device penetration testing toolkit. Designed for security researchers and ethical hackers to audit networks safely.",
      color: "rgb(255, 150, 100)",
      icon: "◇",
    },
  ]

  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number | null>(null); // Re-introduce state

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <TerminalHeader />

        <section className="max-w-6xl mx-auto px-4 py-16 md:py-20" role="main">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl mb-4 text-primary font-mono font-bold">
              $ cat ./development-roadmap.md
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Quil development phases from prototype through commercial deployment. Each milestone represents a major
              evolution in capabilities and features. Scroll to explore the journey.
            </p>
          </div>

          <Roadmap
            milestones={milestones}
            activeMilestoneIndex={activeMilestoneIndex}
            setActiveMilestoneIndex={setActiveMilestoneIndex}
          />

          {/* Info Sections */}
          <div className="mt-16 space-y-6">

            <div className="p-8 bg-card border border-border rounded-lg">
              <h2 className="text-2xl font-mono font-bold mb-4 text-primary">Privacy & Data</h2>
              <p className="text-muted-foreground leading-relaxed">
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
