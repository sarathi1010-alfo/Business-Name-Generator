import { siteConfig } from '@/lib/config';

export function RelatedTools() {
  // Grab the first 4 tools for the related tools widget
  const tools = siteConfig.ecosystemTools.slice(0, 4);

  return (
    <div className="mt-16 border-t pt-12 mb-12">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-6 tracking-tight">You might also need</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
            >
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                    {tool.tag}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </div>
              <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Open Tool &rarr;
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
