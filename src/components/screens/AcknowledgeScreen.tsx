import { useState, useEffect } from 'react';
import { AgencyButton } from '@/components/experience/AgencyButton';

interface AcknowledgeScreenProps {
  onComplete: () => void;
}

export function AcknowledgeScreen({ onComplete }: AcknowledgeScreenProps) {
  const [showButton, setShowButton] = useState(false);

  // Delayed reveal of the continue button
  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="screen-container">
      <div className="flex flex-col items-center max-w-lg text-center">
        {/* Task label */}
        <span className="text-caption mb-grid-6">
          Шаг 3 из 3 — Итог
        </span>

        {/* Completion visual */}
        <div className="completion-ring mb-grid-5" style={{ '--progress': 100 } as React.CSSProperties}>
          <span className="text-complete font-mono text-lg">✓</span>
        </div>

        {/* Statement */}
        <h2 className="text-headline mb-grid-3">
          Готово.
        </h2>

        <p className="text-body max-w-sm">
          Три маленьких действия. Этого достаточно. 
          Контроль возвращается.
        </p>

        {/* Delayed action */}
        <div className={`mt-grid-6 transition-opacity duration-slow ${showButton ? 'opacity-100' : 'opacity-0'}`}>
          <AgencyButton onClick={onComplete}>
            Закончить
          </AgencyButton>
        </div>
      </div>
    </div>
  );
}
