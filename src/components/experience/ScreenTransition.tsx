import { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScreenTransitionProps {
  children: ReactNode;
  show: boolean;
  className?: string;
}

export function ScreenTransition({ children, show, className }: ScreenTransitionProps) {
  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    if (show) {
      setShouldRender(true);
    }
  }, [show]);

  const handleAnimationEnd = () => {
    if (!show) {
      setShouldRender(false);
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      className={cn(
        'w-full h-full',
        show ? 'animate-fade-in' : 'animate-fade-out',
        className
      )}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
}
