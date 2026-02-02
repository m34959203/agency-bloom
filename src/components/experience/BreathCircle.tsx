import { cn } from '@/lib/utils';
import { BreathPhase } from '@/types/experience';

interface BreathCircleProps {
  phase: BreathPhase;
  className?: string;
}

export function BreathCircle({ phase, className }: BreathCircleProps) {
  return (
    <div 
      className={cn(
        'breath-circle',
        phase === 'inhale' && 'inhale',
        phase === 'exhale' && 'exhale',
        phase === 'hold' && 'inhale', // Stay expanded during hold
        className
      )}
    />
  );
}
