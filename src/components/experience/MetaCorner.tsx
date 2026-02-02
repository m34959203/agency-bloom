import { cn } from '@/lib/utils';

interface MetaCornerProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  children: React.ReactNode;
  className?: string;
}

export function MetaCorner({ position, children, className }: MetaCornerProps) {
  return (
    <div className={cn(`meta-corner meta-corner--${position}`, className)}>
      {children}
    </div>
  );
}
