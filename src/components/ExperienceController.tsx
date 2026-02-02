import { useExperience } from '@/hooks/useExperience';
import { MetaCorner } from '@/components/experience/MetaCorner';
import { ProgressLine } from '@/components/experience/ProgressLine';
import { ScreenTransition } from '@/components/experience/ScreenTransition';
import { EntryScreen } from '@/components/screens/EntryScreen';
import { BreatheScreen } from '@/components/screens/BreatheScreen';
import { FocusScreen } from '@/components/screens/FocusScreen';
import { AcknowledgeScreen } from '@/components/screens/AcknowledgeScreen';
import { ExitScreen } from '@/components/screens/ExitScreen';

export function ExperienceController() {
  const { currentPhase, advancePhase, resetExperience, getProgress } = useExperience();

  return (
    <div className="min-h-screen bg-void relative overflow-hidden">
      {/* Progress indicator - only show after entry */}
      {currentPhase !== 'entry' && currentPhase !== 'exit' && (
        <div className="fixed top-0 left-0 right-0 z-10">
          <ProgressLine progress={getProgress()} />
        </div>
      )}

      {/* Meta information */}
      <MetaCorner position="top-left">
        Агентность
      </MetaCorner>

      <MetaCorner position="bottom-right">
        {currentPhase !== 'entry' && currentPhase !== 'exit' && (
          <span className="animate-pulse-subtle">●</span>
        )}
      </MetaCorner>

      {/* Screen content */}
      <main className="relative z-0">
        <ScreenTransition show={currentPhase === 'entry'}>
          <EntryScreen onBegin={advancePhase} />
        </ScreenTransition>

        <ScreenTransition show={currentPhase === 'breathe'}>
          <BreatheScreen 
            onComplete={advancePhase} 
            onSkip={advancePhase}
          />
        </ScreenTransition>

        <ScreenTransition show={currentPhase === 'focus'}>
          <FocusScreen 
            onComplete={advancePhase}
            onSkip={advancePhase}
          />
        </ScreenTransition>

        <ScreenTransition show={currentPhase === 'acknowledge'}>
          <AcknowledgeScreen onComplete={advancePhase} />
        </ScreenTransition>

        <ScreenTransition show={currentPhase === 'exit'}>
          <ExitScreen onRestart={resetExperience} />
        </ScreenTransition>
      </main>
    </div>
  );
}
