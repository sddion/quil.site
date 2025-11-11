"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useClickSound } from "@/hooks/use-click-sound"

interface TimelineCardProps {
  milestone: {
    id: string
    phase: string
    title: string
    description: string
    color: string
    icon: string
  }
  isLeft: boolean
  index: number
  activeMilestoneIndex: number | null
  setActiveMilestoneIndex: (index: number | null) => void
  totalMilestones: number
}

export function TimelineCard({
  milestone,
  index,
  activeMilestoneIndex,
  setActiveMilestoneIndex,
  totalMilestones,
}: TimelineCardProps) {
  const isDialogOpen = activeMilestoneIndex === index
  const { playClickSound } = useClickSound()

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setActiveMilestoneIndex(index)
    } else {
      setActiveMilestoneIndex(null)
    }
  }

  const handlePrevious = () => {
    if (activeMilestoneIndex !== null && activeMilestoneIndex > 0) {
      setActiveMilestoneIndex(activeMilestoneIndex - 1)
    }
  }

  const handleNext = () => {
    if (activeMilestoneIndex !== null && activeMilestoneIndex < totalMilestones - 1) {
      setActiveMilestoneIndex(activeMilestoneIndex + 1)
    }
  }

  return (
    <div className="relative w-full md:w-[45%]">
      <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <div
            className="group relative overflow-hidden rounded-lg p-6 transition-all duration-300 transform hover:scale-105 focus:outline-none"
            onClick={playClickSound}
          >
            <div className="mb-3 inline-block">
              <span
                className="rounded border px-3 py-1 font-mono text-xs font-bold"
                style={{
                  borderColor: milestone.color,
                  color: milestone.color,
                  backgroundColor: `${milestone.color}15`,
                }}
              >
                {milestone.phase}
              </span>
            </div>

            <h3 className="text-primary cursor-pointer text-lg font-bold select-none">{milestone.title}</h3>
          </div>
        </DialogTrigger>
        <DialogContent className="w-11/12 max-w-md md:max-w-lg">
          <DialogHeader>
            <DialogTitle>{milestone.title}</DialogTitle>
            <DialogDescription>{milestone.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex gap-2 justify-between">
            <button
              onClick={() => {
                handlePrevious()
                playClickSound()
              }}
              disabled={activeMilestoneIndex === 0}
              className="flex-1 rounded-full bg-primary/80 hover:bg-primary p-2 text-primary-foreground disabled:opacity-50 transition-all text-xl"
            >
              ←
            </button>
            <button
              onClick={() => {
                handleNext()
                playClickSound()
              }}
              disabled={activeMilestoneIndex === totalMilestones - 1}
              className="flex-1 rounded-full bg-primary/80 hover:bg-primary p-2 text-primary-foreground disabled:opacity-50 transition-all text-xl"
            >
              →
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
