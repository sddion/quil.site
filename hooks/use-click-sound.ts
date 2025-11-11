"use client"

import { useRef, useCallback } from "react"

export function useClickSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  if (typeof window !== "undefined" && !audioRef.current) {
    audioRef.current = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/meetquil.vercel.app/public/mouseclick-290204-I2gK83gtTL5EN0TU0yZGDzozIIfi42.aac")
    audioRef.current.preload = "auto"
  }

  const playClickSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {
        // Silently handle autoplay policy or other errors
      })
    }
  }, [])

  return playClickSound
}
