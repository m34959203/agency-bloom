export type ExperiencePhase = 
  | 'entry'
  | 'breathe'
  | 'focus'
  | 'acknowledge'
  | 'exit';

export type BreathPhase = 'idle' | 'inhale' | 'hold' | 'exhale';

export interface PhaseState {
  phase: ExperiencePhase;
  completed: boolean;
  timestamp?: number;
}

export interface BreathCycle {
  phase: BreathPhase;
  count: number;
  totalCycles: number;
}

export interface FocusTask {
  prompt: string;
  completed: boolean;
}
