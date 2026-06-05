import { GenerationFilters, Industry, Vibe, NameStyle, LengthFilter } from '@/types';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const industries: Industry[] = ['tech', 'ai', 'beauty', 'fitness', 'fashion', 'finance', 'health', 'ecommerce', 'agency', 'saas', 'gaming', 'education', 'food'];
const vibes: Vibe[] = ['luxury', 'modern', 'minimalist', 'futuristic', 'playful', 'premium', 'elegant', 'bold', 'edgy', 'trustworthy'];
const styles: NameStyle[] = ['startup', 'brandable', 'premium', 'futuristic'];
const lengths: LengthFilter[] = ['any', 'short', 'medium', 'long'];

interface FilterBarProps {
  filters: GenerationFilters;
  updateFilter: <K extends keyof GenerationFilters>(key: K, value: GenerationFilters[K]) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export function FilterBar({ filters, updateFilter, onGenerate, isGenerating }: FilterBarProps) {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="space-y-3">
          <Label>Industry</Label>
          <select
            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={filters.industry}
            onChange={(e) => updateFilter('industry', e.target.value as Industry)}
          >
            {industries.map(i => <option key={i} value={i}>{i.charAt(0).toUpperCase() + i.slice(1)}</option>)}
          </select>
        </div>

        <div className="space-y-3">
          <Label>Vibe</Label>
          <select
            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            value={filters.vibe}
            onChange={(e) => updateFilter('vibe', e.target.value as Vibe)}
          >
            {vibes.map(v => <option key={v} value={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</option>)}
          </select>
        </div>

        <div className="space-y-3">
          <Label>Style</Label>
          <select
            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            value={filters.style}
            onChange={(e) => updateFilter('style', e.target.value as NameStyle)}
          >
            {styles.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
          </select>
        </div>

        <div className="space-y-3">
          <Label>Length</Label>
          <select
            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            value={filters.length}
            onChange={(e) => updateFilter('length', e.target.value as LengthFilter)}
          >
            {lengths.map(l => <option key={l} value={l}>{l.charAt(0).toUpperCase() + l.slice(1)}</option>)}
          </select>
        </div>

      </div>

      <div className="flex items-center justify-between pt-4 border-t">
        <label className="flex items-center space-x-2 text-sm font-medium leading-none cursor-pointer">
          <input
            type="checkbox"
            className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:text-primary-foreground"
            checked={filters.isTwoWords}
            onChange={(e) => updateFilter('isTwoWords', e.target.checked)}
          />
          <span>Two-word names</span>
        </label>

        <Button onClick={onGenerate} disabled={isGenerating} size="lg" className="w-full md:w-auto font-semibold">
          {isGenerating ? 'Generating...' : 'Generate Names'}
        </Button>
      </div>
    </div>
  );
}
