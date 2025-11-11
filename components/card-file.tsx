"use client"

import type React from "react"
import { useState } from "react"
import { useClickSound } from "@/hooks/use-click-sound" 

interface CardFileProps {
  title: string
  icon?: React.ReactNode
  description?: string
  isFolder?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

export function CardFile({ title, icon, description, isFolder = false, onClick, children }: CardFileProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { playClickSound } = useClickSound() 


  const handleClick = () => {
    if (isFolder) {
      setIsOpen(!isOpen)
    }
    onClick?.()
    playClickSound() 
  }

  return (
    <div className="group">
      <div
        onClick={handleClick}
        className={`card-file p-4 ${isFolder ? "cursor-pointer" : ""}`}
        role={isFolder ? "button" : undefined}
        tabIndex={isFolder ? 0 : -1}
        onKeyDown={
          isFolder
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setIsOpen(!isOpen)
                }
              }
            : undefined
        }
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <div className="flex-1 min-w-0">
            <h3 className="terminal-text text-sm truncate">{title}</h3>
            {description && <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{description}</p>}
          </div>
          {isFolder && <span className="text-xs text-muted-foreground shrink-0">{isOpen ? "▼" : "▶"}</span>}
        </div>
      </div>

      {isFolder && isOpen && (
        <div className="ml-4 mt-2 pl-4 border-l border-border space-y-2">
          {children}
        </div>
      )}
    </div>
  )
}
