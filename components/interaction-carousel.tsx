"use client"

import type React from "react"

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
    <div className="p-4 md:p-6 w-full">
      <div className="text-sm text-muted-foreground min-h-[300px] md:min-h-[400px] flex items-center justify-center transition-all duration-500 ease-in-out animate-in fade-in">
        {items[current].content}
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-2 mt-6 justify-center flex-wrap">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 hover:scale-125"
            style={{
              backgroundColor: idx === current ? "rgb(217, 187, 0)" : "rgb(60, 60, 70)",
              boxShadow: idx === current ? "0 0 8px rgba(217, 187, 0, 0.5)" : "none",
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
