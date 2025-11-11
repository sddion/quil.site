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
      gesture: "Spread ",
      action: "Enter Chat",
      description: "Open voice conversation mode with LLM integration",
      icon: <HandsExpandIcon />,
    },
    {
      gesture: "Pinch ",
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

  const themePresets = [
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
  ]

  return (
    <main className="bg-background">
      <TerminalHeader />

      <section className="max-w-7xl mx-auto px-4 py-12 overflow-x-hidden">
        <div className="mb-8">
          <h1 className="terminal-text text-3xl md:text-4xl mb-2 text-primary break-words">$ cat ./interaction/guide.md</h1>
          <p className="text-muted-foreground font-mono">Touch Gestures & Voice Commands</p>
        </div>

        {/* Gesture Guide */}
        <div className="mb-12">
          <h2 className="terminal-text text-lg mb-4 text-accent">→ Touch Gestures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gestures.map((gesture) => (
              <div key={gesture.gesture} className="card-file p-4">
                <div className="text-2xl mb-3 text-primary">{gesture.icon}</div>
                <h3 className="terminal-text text-sm text-primary">{gesture.gesture}</h3>
                <p className="text-xs text-accent mt-1 font-mono">{gesture.action}</p>
                <p className="text-xs text-muted-foreground mt-2">{gesture.description}</p>
              </div>
            ))}
            {/* "Coming Soon" Card for Touch Gestures */}
            <div className="card-file p-4 flex flex-col justify-center items-center text-center">
              <h3 className="terminal-text text-sm text-primary mb-2">More Gestures Coming Soon!</h3>
              <p className="text-xs text-muted-foreground">
                Expanding touch controls and new ways to interact.
              </p>
            </div>
          </div>
        </div>

        {/* Voice Commands */}
        <div className="mb-12">
          <h2 className="terminal-text text-lg mb-4 text-accent">→ Voice Commands (Examples)</h2>
          <div className="card-file p-4 space-y-4">
            {voiceCommands.map((cmd, idx) => (
              <div key={idx} className="pb-4 border-b border-border last:pb-0 last:border-0">
                <p className="terminal-text text-sm text-primary">$ {cmd.command}</p>
                <p className="text-xs text-muted-foreground mt-2">→ {cmd.response}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-x-hidden">
          <h2 className="terminal-text text-lg mb-4 text-accent">→ Time & Date Display Themes</h2>
          <InteractionCarousel items={themePresets.map((preset) => ({ label: "Theme", content: preset }))} />
        </div>

        {/* Modes Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card-file p-4">
            <h3 className="terminal-text text-sm text-primary mb-3">Music Mode</h3>
            <ul className="text-xs text-muted-foreground space-y-2">
              <li>• Displays track information</li>
              <li>• Gesture-based volume control</li>
              <li>• Swipe to skip songs</li>
              <li>• Single Tap to pause & play</li>
            </ul>
          </div>
          <div className="card-file p-4">
            <h3 className="terminal-text text-sm text-primary mb-3">Chat Mode</h3>
            <ul className="text-xs text-muted-foreground space-y-2">
              <li>• Voice input via microphone</li>
              <li>• LLM-powered responses</li>
              <li>• Emotion display feedback</li>
              <li>• Pinch to exit mode</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background/50 mt-12 py-8 crt-scan">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-muted-foreground">
          <p>$ quil --interactions --guide</p>
        </div>
      </footer>
    </main>
  )
}
