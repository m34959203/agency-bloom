import { GhostButton } from '@/components/experience/AgencyButton';

interface ExitScreenProps {
  onRestart: () => void;
}

export function ExitScreen({ onRestart }: ExitScreenProps) {
  return (
    <div className="screen-container">
      <div className="flex flex-col items-center max-w-lg text-center">
        {/* Simple exit message */}
        <h2 className="text-headline mb-grid-3">
          Можешь закрыть это.
        </h2>

        <p className="text-body mb-grid-6 max-w-sm">
          Или нет. Никаких обязательств.
        </p>

        <div className="divider" />

        {/* Optional restart */}
        <div className="mt-grid-6">
          <GhostButton onClick={onRestart}>
            Начать заново
          </GhostButton>
        </div>

        {/* Attribution */}
        <p className="text-caption mt-grid-7">
          Концепция восстановления агентности.
        </p>
      </div>
    </div>
  );
}
