"use client"

import { useState, useEffect, useRef } from "react"

interface RoadmapMilestone {
  id: string
  phase: string
  title: string
  description: string
  color: string
  icon: string
}

interface MindMapRoadmapProps {
  milestones: RoadmapMilestone[]
  activeMilestoneIndex: number | null
  setActiveMilestoneIndex: (index: number | null) => void
}

export function MindMapRoadmap({ milestones, activeMilestoneIndex, setActiveMilestoneIndex }: MindMapRoadmapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Calculate positions for nodes in a responsive grid
  const getNodePosition = (index: number) => {
    const cols = window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 2 : 3
    const spacing = window.innerWidth < 640 ? 120 : 180

    const row = Math.floor(index / cols)
    const col = index % cols

    const startX = window.innerWidth < 640 ? 60 : 100
    const startY = window.innerWidth < 640 ? 80 : 120

    return {
      x: startX + col * spacing,
      y: startY + row * spacing,
    }
  }

  // Generate SVG lines connecting nodes
  const renderConnections = () => {
    return milestones.slice(0, -1).map((_, index) => {
      const fromPos = getNodePosition(index)
      const toPos = getNodePosition(index + 1)

      return (
        <path
          key={`connection-${index}`}
          d={`M ${fromPos.x + 40} ${fromPos.y + 40} L ${toPos.x - 40} ${toPos.y - 40}`}
          stroke="rgba(217, 187, 0, 0.3)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 4"
          className="animate-pulse"
        />
      )
    })
  }

  return (
    <div ref={containerRef} className="relative w-full min-h-screen py-8 px-4 overflow-hidden">
      {/* SVG Background for connections */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
        preserveAspectRatio="xMidYMid slice"
      >
        {renderConnections()}
      </svg>

      {/* Nodes Grid */}
      <div className="relative z-10 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        {milestones.map((milestone, index) => (
          <div
            key={milestone.id}
            className="w-full sm:w-64 md:w-72"
            style={{
              animation: `node-float 3s ease-in-out ${index * 0.2}s infinite`,
            }}
          >
            <button
              onClick={() => setActiveMilestoneIndex(activeMilestoneIndex === index ? null : index)}
              className={`relative w-full p-6 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary ${
                activeMilestoneIndex === index
                  ? "bg-card border-2 border-primary shadow-lg"
                  : "bg-card/50 border-2 border-border hover:border-primary/50"
              }`}
              style={{
                boxShadow: activeMilestoneIndex === index ? "0 0 20px rgba(217, 187, 0, 0.4)" : "none",
              }}
            >
              {/* Phase Badge */}
              <div className="mb-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold border"
                  style={{
                    borderColor: milestone.color,
                    color: milestone.color,
                    backgroundColor: `${milestone.color}15`,
                  }}
                >
                  {milestone.phase}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-3 text-3xl" style={{ color: milestone.color }}>
                {milestone.icon}
              </div>

              {/* Title */}
              <h3 className="text-primary font-bold text-lg mb-2 text-left">{milestone.title}</h3>

              {/* Description - show on expand */}
              {activeMilestoneIndex === index && (
                <p className="text-sm text-muted-foreground text-left mt-3 animate-in fade-in duration-300">
                  {milestone.description}
                </p>
              )}

              {/* Expand indicator */}
              <div className="absolute bottom-3 right-3 text-primary opacity-60 text-xl">
                {activeMilestoneIndex === index ? "−" : "+"}
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Mobile-friendly info section */}
      {activeMilestoneIndex !== null && (
        <div className="relative z-20 mt-8 mx-auto max-w-md">
          <div className="bg-card border-2 border-primary p-6 rounded-lg">
            <h4 className="text-primary font-bold mb-2">Details</h4>
            <p className="text-sm text-muted-foreground">{milestones[activeMilestoneIndex].description}</p>
          </div>
        </div>
      )}

      {/* Gradient backgrounds */}
      <div
        className="pointer-events-none absolute top-1/4 -left-32 h-64 w-64 rounded-full opacity-15 blur-3xl"
        style={{
          background: "rgb(217, 187, 0)",
          animation: "float 25s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full opacity-10 blur-3xl"
        style={{
          background: "rgb(217, 187, 0)",
          animation: "float 30s ease-in-out infinite reverse",
        }}
      />
    </div>
  )
}
