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
          Можно закрывать.
        </h2>

        <p className="text-body mb-grid-6 max-w-sm">
          Или нет. Как хотите.
        </p>

        <div className="divider" />

        {/* Optional restart */}
        <div className="mt-grid-6">
          <GhostButton onClick={onRestart}>
            Ещё раз
          </GhostButton>
        </div>

        {/* Attribution */}
        <p className="text-caption mt-grid-7">
          Концепт: восстановление контроля через микродействия
        </p>
      </div>
    </div>
  );
}
