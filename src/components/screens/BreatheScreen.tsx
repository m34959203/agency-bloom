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

  const getPhaseInstructionRu = () => {
    switch (cycle.phase) {
      case 'inhale': return 'Вдох';
      case 'hold': return 'Задержка';
      case 'exhale': return 'Выдох';
      default: return isActive ? '' : 'Начни, когда будешь готов';
    }
  };

  return (
    <div className="screen-container">
      <div className="flex flex-col items-center">
        {/* Task label */}
        <span className="text-caption mb-grid-6">
          Задание 1 из 3 — Дыхание
        </span>

        {/* Breath circle */}
        <div className="mb-grid-5">
          <BreathCircle phase={cycle.phase} />
        </div>

        {/* Instruction */}
        <p className="text-title h-8 mb-grid-3">
          {getPhaseInstructionRu()}
        </p>

        {/* Cycle counter */}
        {isActive && (
          <p className="text-caption mb-grid-5">
            Цикл {cycle.count + 1} из {cycle.totalCycles}
          </p>
        )}

        {/* Action */}
        {!isActive && (
          <div className="flex flex-col items-center gap-grid-3 mt-grid-4">
            <AgencyButton onClick={start}>
              Начать дыхание
            </AgencyButton>
            <GhostButton onClick={onSkip}>
              Пропустить
            </GhostButton>
          </div>
        )}
      </div>
    </div>
  );
}
