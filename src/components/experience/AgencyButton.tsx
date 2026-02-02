import { cn } from '@/lib/utils';

interface AgencyButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export function AgencyButton({ children, onClick, className, disabled }: AgencyButtonProps) {
  return (
    <button 
      className={cn('btn-agency', className)}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
}

interface GhostButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export function GhostButton({ children, onClick, className }: GhostButtonProps) {
  return (
    <button 
      className={cn('btn-ghost', className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
