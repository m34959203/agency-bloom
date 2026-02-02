import { useEffect } from 'react';
import { AgencyButton, GhostButton } from '@/components/experience/AgencyButton';
import { BreathCircle } from '@/components/experience/BreathCircle';
import { useBreathing } from '@/hooks/useBreathing';

interface BreatheScreenProps {
  onComplete: () => void;
  onSkip: () => void;
}

export function BreatheScreen({ onComplete, onSkip }: BreatheScreenProps) {
  const { cycle, isActive, start, getPhaseInstruction, progress } = useBreathing({
    totalCycles: 3,
    onComplete,
  });

  return (
    <div className="screen-container">
      <div className="flex flex-col items-center">
        {/* Task label */}
        <span className="text-caption mb-grid-6">
          Task 1 of 3 — Breathing
        </span>

        {/* Breath circle */}
        <div className="mb-grid-5">
          <BreathCircle phase={cycle.phase} />
        </div>

        {/* Instruction */}
        <p className="text-title h-8 mb-grid-3">
          {getPhaseInstruction()}
        </p>

        {/* Cycle counter */}
        {isActive && (
          <p className="text-caption mb-grid-5">
            Cycle {cycle.count + 1} of {cycle.totalCycles}
          </p>
        )}

        {/* Action */}
        {!isActive && (
          <div className="flex flex-col items-center gap-grid-3 mt-grid-4">
            <AgencyButton onClick={start}>
              Start breathing
            </AgencyButton>
            <GhostButton onClick={onSkip}>
              Skip this step
            </GhostButton>
          </div>
        )}
      </div>
    </div>
  );
}
