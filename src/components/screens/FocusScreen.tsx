import { useState } from 'react';
import { AgencyButton, GhostButton } from '@/components/experience/AgencyButton';

interface FocusScreenProps {
  onComplete: () => void;
  onSkip: () => void;
}

const FOCUS_PROMPTS = [
  "Назови одну вещь, которую можешь сделать за пять минут.",
  "Какой самый маленький следующий шаг?",
  "Как выглядит «готово» для одной задачи?",
];

export function FocusScreen({ onComplete, onSkip }: FocusScreenProps) {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Pick a consistent prompt based on current minute to avoid randomness feeling
  const promptIndex = Math.floor(Date.now() / 60000) % FOCUS_PROMPTS.length;
  const prompt = FOCUS_PROMPTS[promptIndex];

  const handleSubmit = () => {
    if (input.trim()) {
      setSubmitted(true);
      // Brief pause to show confirmation before advancing
      setTimeout(onComplete, 1500);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="screen-container">
      <div className="flex flex-col items-center w-full max-w-lg">
        {/* Task label */}
        <span className="text-caption mb-grid-6">
          Задание 2 из 3 — Фокус
        </span>

        {/* Prompt */}
        <h2 className="text-headline text-center mb-grid-5">
          {prompt}
        </h2>

        {/* Input area */}
        {!submitted ? (
          <>
            <div className="w-full mb-grid-4">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Напиши свой ответ..."
                className="w-full bg-surface border border-border-subtle p-grid-3 text-body 
                           placeholder:text-text-tertiary focus:outline-none focus:border-agency
                           resize-none min-h-[120px] font-mono text-sm"
                autoFocus
              />
            </div>

            <div className="flex flex-col items-center gap-grid-3">
              <AgencyButton 
                onClick={handleSubmit}
                disabled={!input.trim()}
              >
                Это мой фокус
              </AgencyButton>
              <GhostButton onClick={onSkip}>
                Пропустить
              </GhostButton>
            </div>

            <p className="text-caption mt-grid-5">
              Твой ответ не сохраняется.
            </p>
          </>
        ) : (
          <div className="flex flex-col items-center animate-fade-in">
            <p className="text-title text-agency">
              Принято.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
