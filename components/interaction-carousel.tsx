"use client"

import { useState, useEffect } from "react"

interface CarouselProps {
  items: {
    label: string
    content: React.ReactNode 
  }[]
  autoplay?: boolean
}

export function InteractionCarousel({ items, autoplay = true }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [items.length, autoplay])

  return (
    <div className="p-4"> {}
      <div
        className="text-sm text-muted-foreground min-h-[400px] flex items-center justify-center transition-all duration-500 ease-in-out" // Added transition
      >
        {items[current].content}
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-2 mt-4 justify-center">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="w-2 h-2 rounded-full transition-colors"
            style={{
              backgroundColor: idx === current ? "rgb(112, 200, 180)" : "rgb(60, 60, 70)",
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
