import { cn } from "@/lib/utils";

interface AdSlotProps {
  className?: string;
  variant?: 'leaderboard' | 'sidebar' | 'rectangle';
}

export function AdSlot({ className, variant = 'leaderboard' }: AdSlotProps) {
  // Returning null so the placeholder doesn't show on the frontend
  return null;
}
