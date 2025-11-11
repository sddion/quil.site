"use client";

import { TimelineCard } from "./timeline-card";

interface RoadmapMilestone {
  id: string;
  phase: string;
  title: string;
  description: string;
  color: string;
  icon: string;
}

interface RoadmapProps {
  milestones: RoadmapMilestone[];

  activeMilestoneIndex: number | null;

  setActiveMilestoneIndex: (index: number | null) => void;
}

export function Roadmap({
  milestones,
  activeMilestoneIndex,
  setActiveMilestoneIndex,
}: RoadmapProps) {
  return (
    <div className="relative w-full py-32">
      {/* Main Timeline Container */}

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Vertical Center Line with animated gradient */}

        <div className="absolute top-0 bottom-0 left-1/2 w-1 origin-top -translate-x-1/2">
          <div
            className="h-full w-full rounded-full"
            style={{
              background: `linear-gradient(180deg, 

                rgba(112, 200, 180, 0) 0%,

                rgba(112, 200, 180, 0.4) 15%,

                rgb(112, 200, 180) 30%,

                rgb(112, 200, 180) 70%,

                rgba(112, 200, 180, 0.4) 85%,

                rgba(112, 200, 180, 0) 100%)`,

              boxShadow: `0 0 20px rgba(112, 200, 180, 0.5), 0 0 40px rgba(112, 200, 180, 0.2)`,
            }}
          />
        </div>

        {/* Timeline Cards with enhanced spacing */}

        <div className="space-y-8">
          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={milestone.id}
                className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
              >
                <TimelineCard
                  milestone={milestone}
                  isLeft={isLeft}
                  index={index}
                  activeMilestoneIndex={activeMilestoneIndex}
                  setActiveMilestoneIndex={setActiveMilestoneIndex}
                  totalMilestones={milestones.length}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="pointer-events-none absolute top-10 -left-40 h-80 w-80 rounded-full opacity-25 blur-3xl"
        style={{
          background: "rgb(112, 200, 180)",

          animation: "float 20s ease-in-out infinite",
        }}
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full opacity-25 blur-3xl"
        style={{
          background: "rgb(100, 200, 255)",

          animation: "float 24s ease-in-out infinite reverse",
        }}
      />

      <div
        className="pointer-events-none absolute top-1/2 left-1/4 h-64 w-64 rounded-full opacity-15 blur-3xl"
        style={{
          background: "rgb(180, 150, 255)",

          animation: "float 28s ease-in-out infinite",
        }}
      />
    </div>
  );
}
