import { cn } from "@/lib/utils";

interface AdSlotProps {
  className?: string;
  variant?: 'leaderboard' | 'sidebar' | 'rectangle';
}

export function AdSlot({ className, variant = 'leaderboard' }: AdSlotProps) {
  // Disable in development if needed, for now we render a placeholder
  return (
    <div className={cn(
      "flex flex-col items-center justify-center bg-muted/50 border border-dashed rounded-lg text-muted-foreground text-xs",
      variant === 'leaderboard' && "w-full max-w-[728px] h-[90px] mx-auto",
      variant === 'sidebar' && "w-[300px] h-[600px]",
      variant === 'rectangle' && "w-[300px] h-[250px]",
      className
    )}>
      <span>Advertisement</span>
      <span className="text-[10px] opacity-50">Placeholder for AdSense</span>
    </div>
  );
}
