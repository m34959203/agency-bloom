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
          You may close this now.
        </h2>

        <p className="text-body mb-grid-6 max-w-sm">
          Or not. There is no obligation either way.
        </p>

        <div className="divider" />

        {/* Optional restart */}
        <div className="mt-grid-6">
          <GhostButton onClick={onRestart}>
            Start over
          </GhostButton>
        </div>

        {/* Attribution */}
        <p className="text-caption mt-grid-7">
          A proof of concept for agency restoration.
        </p>
      </div>
    </div>
  );
}
