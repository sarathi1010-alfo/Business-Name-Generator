import { siteConfig } from '@/lib/config';

export function RecentlyLaunched() {
  const newTools = [...siteConfig.ecosystemTools]
    .sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime())
    .slice(0, 4);

  return (
    <div className="w-full border-y bg-muted/30 py-3">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 flex flex-col sm:flex-row items-center gap-4 text-sm">
        <span className="font-semibold flex items-center gap-2 whitespace-nowrap">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          🆕 Just Launched:
        </span>
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-start flex-1">
          {newTools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground hover:underline transition-colors flex items-center gap-1"
            >
              {tool.name}
              <span className="text-xs opacity-50 block md:inline">({tool.tag})</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
