"use client"

import { useState } from "react";
import { useClickSound } from "@/hooks/use-click-sound"
import { ChevronRight, ChevronDown, Rocket, Eye, Wifi, Shield, Zap, Cpu, Camera, Lock } from "lucide-react";

interface TimelineCardProps {
  milestone: {
    id: string
    phase: string
    title: string
    description: string
    color: string
    icon: string
    date?: string
    type?: "feature" | "bug" | "improvement"
  }
  isLast: boolean
}

export function TimelineCard({
  milestone,
  isLast,
}: TimelineCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const playClickSound = useClickSound()

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "rocket": return <Rocket className="text-white" size={20} />;
      case "eye": return <Eye className="text-white" size={20} />;
      case "wifi": return <Wifi className="text-white" size={20} />;
      case "shield": return <Shield className="text-white" size={20} />;
      case "zap": return <Zap className="text-white" size={20} />;
      case "cpu": return <Cpu className="text-white" size={20} />;
      case "camera": return <Camera className="text-white" size={20} />;
      case "lock": return <Lock className="text-white" size={20} />;
      default: return <Rocket className="text-white" size={20} />;
    }
  };

  const handleToggle = () => {
    playClickSound();
    setIsExpanded(!isExpanded);
  };

  return (
    <li key={milestone.id} className={`relative ${!isLast ? 'pb-8' : ''}`}>
      {/* Vertical line with cyberpunk glow */}
      {!isLast && (
        <span 
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-cyan-500/30 shadow-[0_0_2px_#00ffff,inset_0_0_2px_#00ffff]" 
          aria-hidden="true"
        ></span>
      )}
      
      <div className="relative flex items-start space-x-3">
        {/* Icon circle with terminal glow */}
        <div className="relative px-1">
          <div 
            className="h-10 w-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity shadow-[0_0_8px_var(--glow-color)]"
            style={{ 
              backgroundColor: milestone.color,
              '--glow-color': milestone.color
            } as React.CSSProperties}
            onClick={handleToggle}
          >
            {getIconComponent(milestone.icon)}
          </div>
        </div>
        
        {/* Content with terminal styling */}
        <div className="min-w-0 flex-1 py-0.5">
          <div className="text-md font-mono">
            <div className="flex items-center gap-2 flex-wrap">
              <span 
                className="font-bold text-foreground cursor-pointer hover:text-cyan-400 transition-colors terminal-text"
                onClick={handleToggle}
              >
                {milestone.title}
              </span>
              
              <span
                className="inline-flex items-center rounded-sm border px-3 py-0.5 text-xs font-mono font-bold border-cyan-500/50 bg-cyan-900/20 text-cyan-400"
              >
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                {milestone.phase}
              </span>
              
              <button 
                onClick={handleToggle}
                className="ml-auto text-cyan-500 hover:text-cyan-300 transition-colors terminal-text"
                aria-label={isExpanded ? "Collapse description" : "Expand description"}
              >
                {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
            </div>
            
            {milestone.date && (
              <span className="whitespace-nowrap text-sm mt-1 block text-cyan-500/70 font-mono">
                {milestone.date}
              </span>
            )}
          </div>
          
          {/* Expandable description with terminal styling */}
          <div className={`mt-2 transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <p className="text-sm text-foreground font-mono terminal-text">
              {milestone.description}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}