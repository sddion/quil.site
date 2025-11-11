"use client";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        aria-label="Hero animation background"
      >
        <source src="./ezgif-8dc5c5e5fefa44c1.webm" type="video/webm" />
      </video>

      {/* Gradient overlay for readability */}
      <div className="from-background via-background/50 to-background absolute inset-0 bg-gradient-to-b" />

      <div className="relative z-10 max-w-3xl px-4 py-12 text-center">
        <h1 className="terminal-text text-primary mb-4 text-5xl leading-tight font-black md:text-6xl lg:text-4xl">
          The Companion that Grows With You
        </h1>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-base leading-relaxed md:text-lg">
          Quil is an open-source voice assistant device designed for developers
          and makers. Powered by LLMs, with gesture control, expression display,
          and fully customizable hardware. Built for natural interaction.
        </p>

        <div className="inline-flex flex-col items-center">
          <div className="terminal-text text-accent flex items-center gap-2 text-sm">
            <span className="blinking-light"></span>
            <span>Status: In Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}
