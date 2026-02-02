import { AgencyButton } from '@/components/experience/AgencyButton';

interface EntryScreenProps {
  onBegin: () => void;
}

export function EntryScreen({ onBegin }: EntryScreenProps) {
  return (
    <div className="screen-container">
      <div className="flex flex-col items-center max-w-lg text-center">
        {/* Direct statement */}
        <h1 className="text-headline mb-grid-3">
          You are not lazy.
        </h1>
        
        <p className="text-body mb-grid-6 max-w-md">
          Overload creates paralysis. Small completions restore motion. 
          This takes three minutes.
        </p>

        <div className="divider" />

        {/* Single action */}
        <div className="mt-grid-6">
          <AgencyButton onClick={onBegin}>
            Begin
          </AgencyButton>
        </div>

        {/* Minimal context */}
        <p className="text-caption mt-grid-5">
          No account. No data stored. No judgment.
        </p>
      </div>
    </div>
  );
}
