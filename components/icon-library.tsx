"use client"

import Image from "next/image" 

export function MicrophoneIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 1v6m0 0a4 4 0 0 1-4 4v0m8-4v0a4 4 0 0 1-4-4M5 9v7a7 7 0 0 0 14 0v-7M9 19h6" />
    </svg>
  )
}

export function ClockIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

export function MusicIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="16" r="2" />
    </svg>
  )
}

export function SmileIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
    </svg>
  )
}

export function FingerTapIcon() {
  return <Image src="/double-tap.png" alt="Double Tap" width={24} height={24} />
}

export function HandsExpandIcon() {
  return <Image src="/spread.png" alt="Spread (Expand)" width={24} height={24} />
}

export function HandsPinchIcon() {
  return <Image src="/pinch.png" alt="Pinch (Collapse)" width={24} height={24} />
}

export function HandLeftIcon() {
  return <Image src="/swipe.png" alt="Left/Right Swipe" width={24} height={24} />
}

export function PointUpIcon() {
  return <Image src="/hand.png" alt="Single Tap / Point Up" width={24} height={24} />
}
