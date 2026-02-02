import { useState, useCallback } from 'react';
import { ExperiencePhase, PhaseState } from '@/types/experience';

const PHASE_ORDER: ExperiencePhase[] = ['entry', 'breathe', 'focus', 'acknowledge', 'exit'];

export function useExperience() {
  const [currentPhase, setCurrentPhase] = useState<ExperiencePhase>('entry');
  const [phaseHistory, setPhaseHistory] = useState<PhaseState[]>([
    { phase: 'entry', completed: false }
  ]);

  const advancePhase = useCallback(() => {
    const currentIndex = PHASE_ORDER.indexOf(currentPhase);
    
    // Mark current phase as completed
    setPhaseHistory(prev => 
      prev.map(p => 
        p.phase === currentPhase 
          ? { ...p, completed: true, timestamp: Date.now() }
          : p
      )
    );

    // Advance to next phase if available
    if (currentIndex < PHASE_ORDER.length - 1) {
      const nextPhase = PHASE_ORDER[currentIndex + 1];
      setCurrentPhase(nextPhase);
      setPhaseHistory(prev => [...prev, { phase: nextPhase, completed: false }]);
    }
  }, [currentPhase]);

  const resetExperience = useCallback(() => {
    setCurrentPhase('entry');
    setPhaseHistory([{ phase: 'entry', completed: false }]);
  }, []);

  const getProgress = useCallback(() => {
    const completedCount = phaseHistory.filter(p => p.completed).length;
    return Math.round((completedCount / PHASE_ORDER.length) * 100);
  }, [phaseHistory]);

  return {
    currentPhase,
    phaseHistory,
    advancePhase,
    resetExperience,
    getProgress,
    isComplete: currentPhase === 'exit' && phaseHistory.find(p => p.phase === 'exit')?.completed,
  };
}
