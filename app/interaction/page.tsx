import { TerminalHeader } from "@/components/terminal-header";
import { InteractionCarousel } from "@/components/interaction-carousel";
import {
  FingerTapIcon,
  HandsExpandIcon,
  HandsPinchIcon,
  HandLeftIcon,
  PointUpIcon,
} from "@/components/icon-library";

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
  ];

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
  ];

  const themePresets = [
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
  ];

  return (
    <main className="bg-background">
      <TerminalHeader />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8">
          <h1 className="terminal-text text-primary mb-2 text-3xl md:text-4xl">
            $ cat ./guide.md
          </h1>
          <p className="text-muted-foreground font-mono">
            Touch Gestures & Voice Commands
          </p>
        </div>

        {/* Gesture Guide */}
        <div className="mb-12">
          <h2 className="terminal-text text-accent mb-4 text-lg">
            → Touch Gestures
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {gestures.map((gesture) => (
              <div key={gesture.gesture} className="card-file p-4">
                <div className="text-primary mb-3 text-2xl">{gesture.icon}</div>
                <h3 className="terminal-text text-primary text-sm">
                  {gesture.gesture}
                </h3>
                <p className="text-accent mt-1 font-mono text-xs">
                  {gesture.action}
                </p>
                <p className="text-muted-foreground mt-2 text-xs">
                  {gesture.description}
                </p>
              </div>
            ))}
            {/* "Coming Soon" Card for Touch Gestures */}
            <div className="card-file flex flex-col items-center justify-center p-4 text-center">
              <h3 className="terminal-text text-primary mb-2 text-sm">
                More Gestures Coming Soon!
              </h3>
              <p className="text-muted-foreground text-xs">
                Expanding touch controls and new ways to interact.
              </p>
            </div>
          </div>
        </div>

        {/* Voice Commands */}
        <div className="mb-12">
          <h2 className="terminal-text text-accent mb-4 text-lg">
            → Voice Commands (Examples)
          </h2>
          <div className="card-file space-y-4 p-4">
            {voiceCommands.map((cmd, idx) => (
              <div
                key={idx}
                className="border-border border-b pb-4 last:border-0 last:pb-0"
              >
                <p className="terminal-text text-primary text-sm">
                  $ {cmd.command}
                </p>
                <p className="text-muted-foreground mt-2 text-xs">
                  → {cmd.response}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="terminal-text text-accent mb-4 text-lg">
            → Time & Date Display Themes
          </h2>
          <InteractionCarousel
            items={themePresets.map((preset) => ({
              label: "Theme",
              content: preset,
            }))}
          />
        </div>

        {/* Modes Info */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="card-file p-4">
            <h3 className="terminal-text text-primary mb-3 text-sm">
              Music Mode
            </h3>
            <ul className="text-muted-foreground space-y-2 text-xs">
              <li>• Displays track information</li>
              <li>• Gesture-based volume control</li>
              <li>• Swipe to skip songs</li>
              <li>• Single Tap to pause & play</li>
            </ul>
          </div>
          <div className="card-file p-4">
            <h3 className="terminal-text text-primary mb-3 text-sm">
              Chat Mode
            </h3>
            <ul className="text-muted-foreground space-y-2 text-xs">
              <li>• Voice input via microphone</li>
              <li>• LLM-powered responses</li>
              <li>• Emotion display feedback</li>
              <li>• Pinch to exit mode</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-border bg-background/50 crt-scan mt-12 border-t py-8">
        <div className="text-muted-foreground mx-auto max-w-7xl px-4 text-center text-xs">
          <p>$ quil --interactions --guide</p>
        </div>
      </footer>
    </main>
  );
}
