"use client"

import { useRef, useCallback } from "react"

export function useClickSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  console.log("useClickSound hook initialized"); // Log initialization

  // Ensure the audio element exists
  if (typeof window !== "undefined" && !audioRef.current) {
    audioRef.current = new Audio("/mouseclick-290204.aac")
    audioRef.current.preload = "auto"
    console.log("Audio object created:", audioRef.current); // Log audio object creation
  }

  const playClickSound = useCallback(() => {
    console.log("playClickSound called"); // Log when playClickSound is called
    if (audioRef.current) {
      audioRef.current.currentTime = 0 // Reset to start for rapid clicks
      audioRef.current.play().catch(error => {
        // Autoplay policy might block, or other errors
        console.log("Audio playback prevented:", error)
      })
    }
  }, []) // Dependency array is empty, so playClickSound should be stable

  return { playClickSound }
}
