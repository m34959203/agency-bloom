import { useState, useCallback, useEffect, useRef } from 'react';
import { BreathPhase, BreathCycle } from '@/types/experience';

const BREATH_TIMING = {
  inhale: 4000,  // 4 seconds
  hold: 2000,    // 2 seconds
  exhale: 6000,  // 6 seconds
  rest: 1000,    // 1 second pause between cycles
};

const PHASE_SEQUENCE: BreathPhase[] = ['inhale', 'hold', 'exhale'];

interface UseBreathingOptions {
  totalCycles?: number;
  onComplete?: () => void;
}

export function useBreathing({ totalCycles = 3, onComplete }: UseBreathingOptions = {}) {
  const [cycle, setCycle] = useState<BreathCycle>({
    phase: 'idle',
    count: 0,
    totalCycles,
  });
  const [isActive, setIsActive] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearCurrentTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const runPhase = useCallback((phaseIndex: number, currentCycleCount: number) => {
    if (phaseIndex >= PHASE_SEQUENCE.length) {
      // Completed one full cycle
      const newCount = currentCycleCount + 1;
      
      if (newCount >= totalCycles) {
        // All cycles complete
        setCycle({ phase: 'idle', count: newCount, totalCycles });
        setIsActive(false);
        onComplete?.();
        return;
      }
      
      // Rest before next cycle
      setCycle({ phase: 'idle', count: newCount, totalCycles });
      timeoutRef.current = setTimeout(() => {
        runPhase(0, newCount);
      }, BREATH_TIMING.rest);
      return;
    }

    const phase = PHASE_SEQUENCE[phaseIndex];
    setCycle({ phase, count: currentCycleCount, totalCycles });
    
    timeoutRef.current = setTimeout(() => {
      runPhase(phaseIndex + 1, currentCycleCount);
    }, BREATH_TIMING[phase]);
  }, [totalCycles, onComplete]);

  const start = useCallback(() => {
    clearCurrentTimeout();
    setIsActive(true);
    setCycle({ phase: 'idle', count: 0, totalCycles });
    
    // Small delay before starting first inhale
    timeoutRef.current = setTimeout(() => {
      runPhase(0, 0);
    }, 500);
  }, [clearCurrentTimeout, runPhase, totalCycles]);

  const stop = useCallback(() => {
    clearCurrentTimeout();
    setIsActive(false);
    setCycle({ phase: 'idle', count: 0, totalCycles });
  }, [clearCurrentTimeout, totalCycles]);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearCurrentTimeout();
  }, [clearCurrentTimeout]);

  const getPhaseInstruction = useCallback(() => {
    switch (cycle.phase) {
      case 'inhale':
        return 'Breathe in';
      case 'hold':
        return 'Hold';
      case 'exhale':
        return 'Release';
      case 'idle':
      default:
        return isActive ? '' : 'Begin when ready';
    }
  }, [cycle.phase, isActive]);

  return {
    cycle,
    isActive,
    start,
    stop,
    getPhaseInstruction,
    progress: Math.round((cycle.count / totalCycles) * 100),
  };
}
