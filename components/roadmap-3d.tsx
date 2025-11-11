"use client";

import { TimelineCard } from "./timeline-card";

interface RoadmapMilestone {
  id: string;
  phase: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  date?: string;
  type?: "feature" | "bug" | "improvement";
}

interface RoadmapProps {
  milestones: RoadmapMilestone[];
}

export function Roadmap({
  milestones,
}: RoadmapProps) {
  return (
    <div className="bg-background w-full py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flow-root">
          <ul className="-mb-8">
            {milestones.map((milestone, index) => {
              const isLast = index === milestones.length - 1;
              
              return (
                <TimelineCard 
                  key={milestone.id}
                  milestone={milestone}
                  isLast={isLast}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}