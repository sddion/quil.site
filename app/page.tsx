import { HeroSection } from "@/components/hero-section"
import { CardFile } from "@/components/card-file"
import { TerminalHeader } from "@/components/terminal-header"
import { MicrophoneIcon, ClockIcon, MusicIcon, SmileIcon } from "@/components/icon-library"

export default function HomePage() {
  const features = [
    {
      title: "Voice Assistant",
      icon: <MicrophoneIcon />,
      description: "Cloud LLM integration via OpenAI Whisper for natural conversations.",
    },
    {
      title: "Time & Date",
      icon: <ClockIcon />,
      description: "Customizable display modes with theme support and real-time updates.",
    },
    {
      title: "Media Control",
      icon: <MusicIcon />,
      description: "Voice-controlled music playback with gesture-based volume control.",
    },
    {
      title: "Expression Display",
      icon: <SmileIcon />,
      description: "Animated feedback for emotions: Alert, Angry, Bored, and more.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <TerminalHeader />
      <HeroSection />

      {/* Desktop Files Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12" aria-labelledby="features-heading">
        <h2 id="features-heading" className="terminal-text text-xl mb-6 text-primary">
          $ ls -la ./features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {features.map((feature) => (
            <CardFile key={feature.title} title={feature.title} icon={feature.icon} description={feature.description} />
          ))}
        </div>
      </section>
    </div>
  )
}
