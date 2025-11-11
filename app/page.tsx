import { HeroSection } from "@/components/hero-section"
import { CardFile } from "@/components/card-file"
import { TerminalHeader } from "@/components/terminal-header"
import { MicrophoneIcon, ClockIcon, MusicIcon, SmileIcon } from "@/components/icon-library"
import { FAQSchema } from "@/components/faq-schema"

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

  // FAQ data for GEO
  const faqs = [
    {
      question: "What is Quil?",
      answer: "Quil is an open-source voice assistant device designed for developers and makers. It combines hardware and software for natural voice interaction, powered by LLMs with gesture control and expression display."
    },
    {
      question: "What makes Quil different from other voice assistants?",
      answer: "Quil is fully open-source with customizable hardware and software. It features gesture-based controls, expression display for emotional feedback, and modular design that allows developers to extend functionality."
    },
    {
      question: "What hardware does Quil use?",
      answer: "Quil is built on ESP32 microcontroller platforms with integrated microphone array, speaker driver, OLED display, and gesture sensors. All hardware designs are open-source and available for modification."
    },
    {
      question: "How does Quil handle privacy?",
      answer: "All processing happens on-device by default with no data leaving the device unless explicitly enabled by the user. Optional cloud features require explicit consent and maintain user control over data sharing preferences."
    }
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

      {/* FAQ Schema for GEO */}
      <FAQSchema 
        faqs={faqs} 
        pageTitle="Quil - Open Source Voice Assistant Device" 
        pageDescription="Quil is an AI-powered voice assistant with hardware integration. Open-source hardware and software for natural voice interaction." 
      />
    </div>
  )
}