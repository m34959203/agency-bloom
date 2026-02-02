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
          Ты не ленивый.
        </h1>
        
        <p className="text-body mb-grid-6 max-w-md">
          Перегрузка создаёт паралич. Маленькие завершения восстанавливают движение. 
          Это займёт три минуты.
        </p>

        <div className="divider" />

        {/* Single action */}
        <div className="mt-grid-6">
          <AgencyButton onClick={onBegin}>
            Начать
          </AgencyButton>
        </div>

        {/* Minimal context */}
        <p className="text-caption mt-grid-5">
          Без регистрации. Данные не сохраняются. Без осуждения.
        </p>
      </div>
    </div>
  );
}
