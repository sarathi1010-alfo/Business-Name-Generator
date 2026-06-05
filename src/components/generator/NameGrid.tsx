import { GeneratedName } from '@/types';
import { NameCard } from './NameCard';

interface NameGridProps {
  names: GeneratedName[];
  isGenerating: boolean;
  shortlistMap: Record<string, boolean>;
  onToggleShortlist: (nameObj: GeneratedName) => void;
}

export function NameGrid({ names, isGenerating, shortlistMap, onToggleShortlist }: NameGridProps) {
  if (isGenerating) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-32 rounded-xl bg-muted/40 animate-pulse border border-border" />
        ))}
      </div>
    );
  }

  if (names.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center text-muted-foreground">
        <p className="text-lg font-medium">No names generated yet.</p>
        <p className="text-sm">Adjust your filters and hit Generate.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {names.map((n, i) => (
        <NameCard
          key={n.name + i}
          nameObj={n}
          index={i}
          isShortlisted={!!shortlistMap[n.name]}
          onToggleShortlist={() => onToggleShortlist(n)}
        />
      ))}
    </div>
  );
}
