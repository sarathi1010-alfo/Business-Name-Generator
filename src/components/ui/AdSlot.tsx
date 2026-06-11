interface AdSlotProps {
  className?: string;
  variant?: 'leaderboard' | 'sidebar' | 'rectangle';
}

export function AdSlot({}: AdSlotProps) {
  // Returning null so the placeholder doesn't show on the frontend
  return null;
}
