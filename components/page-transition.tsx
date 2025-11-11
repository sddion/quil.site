"use client"

import type React from "react"

interface PageTransitionProps {
  children: React.ReactNode
  delay?: number
}

export function PageTransition({ children, delay = 0 }: PageTransitionProps) {
  return (
    <div className="relative">
      {/* Folder open transition effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="scan-line absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0"
            style={{
              top: `${20 + i * 15}%`,
            }}
          />
        ))}
      </div>
      {children}
    </div>
  )
}
