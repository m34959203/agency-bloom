import { cn } from '@/lib/utils';

interface ProgressLineProps {
  progress: number;
  className?: string;
}

export function ProgressLine({ progress, className }: ProgressLineProps) {
  return (
    <div 
      className={cn('progress-line', className)}
      style={{ '--progress': `${Math.min(100, Math.max(0, progress))}%` } as React.CSSProperties}
    />
  );
}
