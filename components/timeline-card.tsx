"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react" 
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
    <div
      className="relative w-full md:w-[45%] px-4"
    >
      <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <div
            className="relative p-6 rounded-lg overflow-hidden group transition-shadow duration-300"
            onClick={playClickSound} 
            style={{

            }}
          >
            <div className="inline-block mb-3">
              <span
                className="text-xs font-mono font-bold px-3 py-1 rounded border"
                style={{
                  borderColor: milestone.color,
                  color: milestone.color,
                  backgroundColor: `${milestone.color}15`,
                }}
              >
                {milestone.phase}
              </span>
            </div>




            <h3 className="text-lg font-bold text-primary cursor-pointer select-none">
              {milestone.title}
            </h3>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{milestone.title}</DialogTitle>
            <DialogDescription>
              {milestone.description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => { handlePrevious(); playClickSound(); }}
              disabled={activeMilestoneIndex === 0}
              className="p-2 rounded-full bg-gray-800 text-white disabled:opacity-50"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => { handleNext(); playClickSound(); }}
              disabled={activeMilestoneIndex === totalMilestones - 1}
              className="p-2 rounded-full bg-gray-800 text-white disabled:opacity-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}