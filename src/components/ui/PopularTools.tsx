import { siteConfig } from '@/lib/config';

export function PopularTools() {
  const topTools = [...siteConfig.ecosystemTools]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 5);

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🔥</span>
        <h3 className="font-semibold text-lg">Most Used This Month</h3>
      </div>
      <div className="flex flex-col space-y-3">
        {topTools.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <span className="font-medium text-sm group-hover:text-primary transition-colors">
              {tool.name}
            </span>
            <span className="text-xs text-muted-foreground line-clamp-1">
              {tool.description}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
