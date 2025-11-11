"use client"

import { useState } from "react"
import { useClickSound } from "@/hooks/use-click-sound"

interface RoadmapItem {
  id: string
  phase: string
  title: string
  description: string
}

interface ModalRoadmapProps {
  items: RoadmapItem[]
}

export function ModalRoadmap({ items }: ModalRoadmapProps) {
  const [selectedItem, setSelectedItem] = useState<RoadmapItem | null>(null)
  const playClickSound = useClickSound()

  const handleOpen = (item: RoadmapItem) => {
    playClickSound()
    setSelectedItem(item)
  }

  const handleClose = () => {
    playClickSound()
    setSelectedItem(null)
  }

  return (
    <>
      <div className="space-y-4 md:space-y-6">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleOpen(item)}
            className="w-full text-left p-4 md:p-6 bg-card border-2 border-border rounded-sm transition-all duration-300 hover:border-primary hover:shadow-lg group cursor-pointer"
            aria-label={`Open ${item.title} details`}
            aria-expanded={selectedItem?.id === item.id}
          >
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-block px-3 py-1 border-2 border-primary text-primary font-mono text-xs md:text-sm font-bold rounded-sm transition-all duration-300 group-hover:bg-primary group-hover:text-background">
                  {item.phase}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-mono font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          </button>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedItem && (
        <>
          <div
            className="fixed inset-0 bg-black/80 z-40 transition-opacity duration-200"
            onClick={handleClose}
            aria-hidden="true"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="bg-card border-2 border-primary rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
              <div className="p-6 md:p-8 relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2"
                  aria-label="Close modal"
                >
                  <span className="text-2xl">×</span>
                </button>

                {/* Phase Badge */}
                <div className="flex items-center gap-4 mb-6 pr-8">
                  <span className="inline-block px-4 py-2 border-2 border-primary text-primary font-mono text-sm font-bold rounded-sm bg-primary/10">
                    {selectedItem.phase}
                  </span>
                </div>

                {/* Title */}
                <h2 id="modal-title" className="text-xl md:text-2xl font-mono font-bold text-foreground mb-6">
                  {selectedItem.title}
                </h2>

                {/* Description */}
                <p
                  id="modal-description"
                  className="text-sm md:text-base font-mono text-muted-foreground leading-relaxed"
                >
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
