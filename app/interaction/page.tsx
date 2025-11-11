"use client"

import { TerminalHeader } from "@/components/terminal-header"
import { InteractionCarousel } from "@/components/interaction-carousel"
import { FingerTapIcon, HandsExpandIcon, HandsPinchIcon, HandLeftIcon, PointUpIcon } from "@/components/icon-library"


export default function InteractionPage() {
  const gestures = [
    {
      gesture: "Double Tap",
      action: "Toggle Mode",
      description: "Switch between modes",
      icon: <FingerTapIcon />,
    },
    {
      gesture: "Spread",
      action: "Enter Chat",
      description: "Open voice conversation mode with LLM integration",
      icon: <HandsExpandIcon />,
    },
    {
      gesture: "Pinch",
      action: "Exit Chat",
      description: "Close conversation mode",
      icon: <HandsPinchIcon />,
    },
    {
      gesture: "Left & Right Swipe",
      action: "Context Menu",
      description: "Switch songs or themes",
      icon: <HandLeftIcon />,
    },
    {
      gesture: "Single Tap",
      action: "On/Off",
      description: "Wake or sleep the device",
      icon: <PointUpIcon />,
    },
  ]

  const voiceCommands = [
    {
      command: "Play music",
      response: "Starts music playback in Media Control mode",
    },
    {
      command: "What time is it?",
      response: "Displays current time and date",
    },
    {
      command: "Change theme",
      response: "Cycles to next available display theme",
    },
    {
      command: "How are you?",
      response: "LLM generates contextual response",
    },
  ]

  const themePresets = ["Coming Soon", "Coming Soon", "Coming Soon", "Coming Soon"]

  return (
    <main className="bg-background min-h-screen overflow-x-hidden relative">
      <RoboticsBackground />

      <TerminalHeader />

      <section className="w-full px-4 py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl mb-8">
          <h1 className="terminal-text text-primary mb-2 text-3xl md:text-4xl lg:text-5xl text-balance">
            $ cat ./guide.md
          </h1>
          <p className="text-muted-foreground font-mono text-sm md:text-base">Touch Gestures & Voice Commands</p>
        </div>

        {/* Gesture Guide */}
        <div className="mx-auto max-w-7xl mb-12">
          <h2 className="terminal-text text-primary mb-6 text-lg md:text-xl">→ Touch Gestures</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {gestures.map((gesture) => (
              <div key={gesture.gesture} className="card-file p-4 md:p-6">
                <div className="text-primary mb-3 text-2xl md:text-3xl">{gesture.icon}</div>
                <h3 className="terminal-text text-primary text-sm md:text-base">{gesture.gesture}</h3>
                <p className="text-primary mt-2 font-mono text-xs md:text-sm">{gesture.action}</p>
                <p className="text-muted-foreground mt-2 text-xs md:text-sm leading-relaxed">{gesture.description}</p>
              </div>
            ))}
            {/* "Coming Soon" Card for Touch Gestures */}
            <div className="card-file flex flex-col items-center justify-center p-4 md:p-6 text-center">
              <h3 className="terminal-text text-primary mb-2 text-sm md:text-base">More Gestures Coming Soon!</h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                Expanding touch controls and new ways to interact.
              </p>
            </div>
          </div>
        </div>

        {/* Voice Commands */}
        <div className="mx-auto max-w-7xl mb-12">
          <h2 className="terminal-text text-primary mb-6 text-lg md:text-xl">→ Voice Commands (Examples)</h2>
          <div className="card-file space-y-4 p-4 md:p-6">
            {voiceCommands.map((cmd, idx) => (
              <div key={idx} className="border-border border-b pb-4 last:border-0 last:pb-0">
                <p className="terminal-text text-primary text-sm md:text-base break-words">$ {cmd.command}</p>
                <p className="text-muted-foreground mt-2 text-xs md:text-sm">→ {cmd.response}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Display Themes */}
        <div className="mx-auto max-w-7xl mb-12">
          <h2 className="terminal-text text-primary mb-6 text-lg md:text-xl">→ Time & Date Display Themes</h2>
          <div className="overflow-x-auto">
            <InteractionCarousel
              items={themePresets.map((preset) => ({
                label: "Theme",
                content: preset,
              }))}
            />
          </div>
        </div>

        {/* Modes Info */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="card-file p-4 md:p-6">
              <h3 className="terminal-text text-primary mb-3 text-sm md:text-base">Music Mode</h3>
              <ul className="text-muted-foreground space-y-2 text-xs md:text-sm">
                <li>• Displays track information</li>
                <li>• Gesture-based volume control</li>
                <li>• Swipe to skip songs</li>
                <li>• Single Tap to pause & play</li>
              </ul>
            </div>
            <div className="card-file p-4 md:p-6">
              <h3 className="terminal-text text-primary mb-3 text-sm md:text-base">Chat Mode</h3>
              <ul className="text-muted-foreground space-y-2 text-xs md:text-sm">
                <li>• Voice input via microphone</li>
                <li>• LLM-powered responses</li>
                <li>• Emotion display feedback</li>
                <li>• Pinch to exit mode</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-border bg-background/50 crt-scan mt-12 border-t py-8 px-4">
        <div className="text-muted-foreground mx-auto max-w-7xl text-center text-xs md:text-sm">
          <p>$ quil --interactions --guide</p>
        </div>
      </footer>
    </main>
  )
}
