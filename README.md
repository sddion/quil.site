# Quil - The Empathetic Desktop Companion

> Trying hard not to short-circuit when you smile.

A terminal-aesthetic frontend for the Quil voice assistant hardware project. Built with Next.js, TypeScript, and p5.js. Open-source hardware and software for natural voice interaction.

## Features

- **Hacker/Terminal Aesthetic** - Deep black with neon green/cyan accents
- **Voice Assistant** - Cloud LLM integration via OpenAI Chat/Whisper for natural conversations
- **Expression Display** - OLED animated feedback showing emotions
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Smooth Animations** - Interactions with hover effects and glow pulses
- **3D Roadmap** - Interactive CSS-based 3D development phases with scroll animations
- **Generative Background** - Canvas-based particle system with cursor tracking
- **Open Hardware** - Full KiCad schematics, PCB layouts, and Gerber files
- **Accessibility First** - Full keyboard navigation, ARIA labels, reduced motion support
- **Performance Optimized** - Lazy loading, efficient rendering

## Pages

- `/` - Homepage with feature overview and hero section
- `/hardware` - Hardware BOM with component specifications
- `/hardware/kicad` - KiCad files, schematics, PCB layouts, and Gerber manufacturing files
- `/future-goals` - Interactive development roadmap with 5 phases (Prototype → OTA Updates)
- `/interaction` - Touch gestures and voice command guide

## Development Roadmap

The `/future-goals` page features an interactive 3D roadmap displaying 5 development phases:

1. **Phase 0: Prototype** - Current ESP32/ESP8266 development and testing
2. **Phase 1: PenTesting Edition** - Hardened firmware for security researchers
3. **Phase 2: Groove Vision AI Camera Module** - Real-time emotion detection with on-device inference
4. **Phase 3: Commercial Adaptation Layer** - Context-aware comfort modes and personalization
5. **Phase 4: OTA Updates & Cloud Learning** - Modular firmware upgrades and optional cloud learning

Each phase is presented as a 3D road segment with:
- Icon pins with phase-specific colors
- Connected milestone features
- Animated entrance on scroll
- Hover lift and glow pulse effects
- Gradient flow line animation through the entire roadmap

## Setup

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000)

## Component Guide

### Roadmap Component

Interactive 3D roadmap with CSS transforms.

**Usage:**

\`\`\`tsx
import { Roadmap } from "@/components/roadmap-3d"

const milestones = [
  {
    id: "phase-1",
    phase: "Phase 1",
    title: "Feature Name",
    description: "Description of this milestone",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    color: "rgb(112, 200, 180)",
    icon: "◆",
  },
  // ... more milestones
]

export function MyPage() {
  return <Roadmap milestones={milestones} />
}
\`\`\`

**Features:**
- Parallax scroll effect with perspective transforms
- Staggered entrance animations
- Icon glow pulse effects on scroll
- Animated gradient line flowing through roadmap
- Fully responsive with mobile optimization

### DownloadCard Component

Added modular download card system for easy file management

The `DownloadCard` is a reusable component for displaying files with download functionality. Perfect for hardware files, documentation, and resources.

**Usage:**

\`\`\`tsx
import { DownloadCard } from "@/components/download-card"

export function MyPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <DownloadCard
        fileName="my-file.pdf"
        description="A brief description of the file"
        tag="documentation"
        downloadUrl="https://example.com/file.pdf"
        comingSoon={false}
      />
      <DownloadCard
        fileName="future-file.zip"
        description="Coming soon feature"
        tag="hardware"
        comingSoon={true}
      />
    </div>
  )
}
\`\`\`

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| \`fileName\` | string | Display name of the file |
| \`description\` | string | Brief description of contents |
| \`tag\` | string | Category tag (e.g., "gerber", "schematic", "bom") |
| \`downloadUrl\` | string | Direct download link (optional) |
| \`thumbnailUrl\` | string | Preview image URL (optional) |
| \`comingSoon\` | boolean | Show "Coming Soon" state (default: false) |

**Adding New Files:**

To add files to the KiCad page, simply update the \`gerberFiles\` array in \`/app/hardware/kicad/page.tsx\`:

\`\`\`tsx
const gerberFiles: GerberFile[] = [
  {
    id: "my-file",
    fileName: "my-file.zip",
    description: "Your file description here",
    tag: "gerber",
    downloadUrl: "https://your-link.com/file.zip",
    comingSoon: false,
  },
  // ... existing files
]
\`\`\`

### PageTransition Component

Added folder-opening page transitions

Wraps pages with smooth entrance animations and scan line effects.

\`\`\`tsx
import { PageTransition } from "@/components/page-transition"

export default function MyPage() {
  return (
    <PageTransition delay={0.1}>
      <div>Your content here</div>
    </PageTransition>
  )
}
\`\`\`

## Asset Requirements

Place the following files in \`/public\`:
- \`quil-logo-animation.mp4\` - Logo animation for hero/footer backgrounds (optional)
- \`icon.svg\`, \`icon-dark-32x32.png\`, \`icon-light-32x32.png\` - Favicon files
- Hardware files (Gerber, BOM, schematics) linked via URLs or added to download system

## Links to Update

- **GitHub**: Update links from \`https://github.com\` to your repository
- **KiCad Files**: Update fabrication links to your PCB provider (JLCPCB, PCBWay, etc.)
- **Social Media**: Update Instagram, Twitter/X links in footer
- **Contact**: Add Discord, email, or support page URLs

## Configuration

### Environment Variables
None required for static site. Add if connecting to APIs later.

### Styling System

- **Primary Color** - Neon green (oklch 0.7 at 142.5°)
- **Secondary Color** - Cyan (oklch 0.6 at 262.5°)
- **Background** - Deep black (oklch 0.08)
- **Font** - Geist Mono (terminal aesthetic)

### Accessibility Options
- All interactive elements are keyboard accessible
- Respects \`prefers-reduced-motion\` for motion sensitivity
- Full ARIA labels and semantic HTML

## Technologies

- **Framework**: Next.js 16 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Generative Art**: p5.js
- **UI Components**: shadcn/ui

## Performance Tips

- p5.js background is lazy-loaded and optimized
- Animations respect \`prefers-reduced-motion\` preference
- CRT scan lines use GPU acceleration
- Staggered animations for smooth page transitions

## Deployment

Deploy to Vercel:

\`\`\`bash
vercel deploy
\`\`\`

Or build for static hosting:

\`\`\`bash
npm run build
npm run start
\`\`\`

## License

- **Website/Software** - MIT License
- **Hardware Designs** - CERN Open Hardware License v2 (CERN-OHL-2.0)

## Contributing

Contributions welcome! Whether it's design improvements, new features, or hardware refinements. See GitHub issues for ways to help.

---

Built with Next.js, p5.js, and a healthy amount of skepticism about AI.

**Quil © 2025** · Open Source · Made with care

## Animation Details

### Canvas Background

Replaced p5.js with native Canvas API for better compatibility:
- Particle trails following cursor
- Wave lines with sine animations
- CRT scan line effect
- Responsive to window resize
- GPU-accelerated transforms
