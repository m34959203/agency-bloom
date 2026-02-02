import { useState } from 'react';
import { AgencyButton, GhostButton } from '@/components/experience/AgencyButton';

interface FocusScreenProps {
  onComplete: () => void;
  onSkip: () => void;
}

const FOCUS_PROMPTS = [
  "Name one thing you can do in the next five minutes.",
  "What is the smallest next step?",
  "What would 'done' look like for one task?",
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
          Task 2 of 3 — Focus
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
                placeholder="Type your answer..."
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
                This is my focus
              </AgencyButton>
              <GhostButton onClick={onSkip}>
                Skip this step
              </GhostButton>
            </div>

            <p className="text-caption mt-grid-5">
              Your response is not stored.
            </p>
          </>
        ) : (
          <div className="flex flex-col items-center animate-fade-in">
            <p className="text-title text-agency">
              Noted.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
