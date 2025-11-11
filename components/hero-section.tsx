"use client"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        aria-label="Hero animation background"
      >
        <source
          src="./ezgif-8dc5c5e5fefa44c1.webm"
          type="video/webm"
        />
      </video>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      <div className="relative z-10 text-center px-4 py-12 max-w-3xl">
        <h1
          className="terminal-text text-5xl md:text-6xl lg:text-4xl mb-4 text-primary font-black leading-tight"
        >
          The Companion that Grows With You
        </h1>
        <p
          className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Quil is an open-source voice assistant device designed for developers and makers. Powered by LLMs, with
          gesture control, expression display, and fully customizable hardware. Built for natural interaction.
        </p>

        <div
          className="inline-flex flex-col items-center"
        >
          <div className="terminal-text text-sm text-accent flex items-center gap-2">
            <span className="blinking-light"></span>
            <span>Status: In Development</span>
          </div>
        </div>
      </div>
    </section>
  )
}
