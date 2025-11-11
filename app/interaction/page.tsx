"use client"

import { TerminalHeader } from "@/components/terminal-header"
import { InteractionCarousel } from "@/components/interaction-carousel"
import { FingerTapIcon, HandsExpandIcon, HandsPinchIcon, HandLeftIcon, PointUpIcon } from "@/components/icon-library"
import { FAQSchema } from "@/components/faq-schema"
import { HowToSchema } from "@/components/howto-schema"

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

  // FAQ data for GEO
  const faqs = [
    {
      question: "How do I interact with Quil?",
      answer: "Quil supports both touch gestures and voice commands. Touch gestures include double tap, spread, pinch, swipes, and single tap for various functions. Voice commands allow natural conversation with the LLM-powered assistant."
    },
    {
      question: "What voice commands does Quil understand?",
      answer: "Quil understands natural language commands related to time, music playback, theme changes, and general conversation. The LLM integration allows for contextual understanding of a wide range of queries."
    },
    {
      question: "How accurate is Quil's voice recognition?",
      answer: "Quil uses OpenAI Whisper for cloud-based voice recognition, providing high accuracy even in noisy environments. Recognition accuracy depends on internet connectivity and audio quality."
    },
    {
      question: "Can I customize Quil's gestures and commands?",
      answer: "Yes, Quil's gesture recognition and voice commands are fully customizable through the configuration interface. Developers can modify existing gestures or add new ones through the open-source codebase."
    }
  ]

  // HowTo steps for GEO
  const interactionSteps = [
    {
      name: "Power On",
      text: "Press the single tap gesture to wake the device from sleep mode. The display will show the current time and date in the default theme."
    },
    {
      name: "Use Voice Commands",
      text: "Speak naturally to the device. Try commands like 'What time is it?', 'Play music', or 'Change theme' to interact with different modes."
    },
    {
      name: "Navigate with Gestures",
      text: "Use touch gestures to navigate between modes. Spread to enter chat mode, pinch to exit, swipe left/right to change themes or songs, and double tap to toggle between modes."
    },
    {
      name: "Enter Chat Mode",
      text: "Use the spread gesture to enter chat mode for extended conversation with the LLM. Speak naturally and the device will provide contextual responses with emotional display feedback."
    },
    {
      name: "Power Off",
      text: "Press the single tap gesture again to put the device to sleep, preserving battery life while maintaining quick access to features."
    }
  ]

  return (
    <main className="bg-background min-h-screen overflow-x-hidden relative">

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

      {/* FAQ Schema for GEO */}
      <FAQSchema 
        faqs={faqs} 
        pageTitle="Quil Interaction Guide" 
        pageDescription="Learn how to interact with Quil using touch gestures and voice commands. Complete guide to all supported interactions." 
      />

      {/* HowTo Schema for GEO */}
      <HowToSchema 
        steps={interactionSteps}
        title="How to Use Quil"
        description="Complete guide to interacting with the Quil voice assistant device using gestures and voice commands"
        timeRequired="PT10M"
      />

      {/* Footer */}
      <footer className="border-border bg-background/50 crt-scan mt-12 border-t py-8 px-4">
        <div className="text-muted-foreground mx-auto max-w-7xl text-center text-xs md:text-sm">
          <p>$ quil --interactions --guide</p>
        </div>
      </footer>
    </main>
  )
}