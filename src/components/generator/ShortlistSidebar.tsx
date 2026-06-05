import { GeneratedName } from '@/types';
import { Heart, X, Trash2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface ShortlistSidebarProps {
  shortlist: GeneratedName[];
  onRemove: (nameObj: GeneratedName) => void;
  onClear: () => void;
}

export function ShortlistSidebar({ shortlist, onRemove, onClear }: ShortlistSidebarProps) {
  return (
    <Sheet>
      <SheetTrigger render={
        <Button variant="outline" className="fixed bottom-6 right-6 h-14 rounded-full shadow-lg border-primary/20 bg-background/95 backdrop-blur z-40 pr-6 pl-5 flex items-center gap-3">
          <div className="relative">
            <Heart className="h-5 w-5 text-red-500 fill-red-500" />
            {shortlist.length > 0 && (
              <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {shortlist.length}
              </span>
            )}
          </div>
          <span className="font-semibold hidden sm:inline-block">Shortlist</span>
        </Button>
      } />
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="pb-4 border-b">
          <SheetTitle className="flex justify-between items-center">
            <span>Saved Names</span>
            {shortlist.length > 0 && (
              <Button variant="ghost" size="sm" onClick={onClear} className="text-muted-foreground hover:text-destructive h-8 px-2 text-xs">
                <Trash2 className="h-3 w-3 mr-2" />
                Clear All
              </Button>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-3">
          {shortlist.length === 0 ? (
            <div className="text-center text-muted-foreground py-12 flex flex-col items-center gap-3">
              <Heart className="h-8 w-8 opacity-20" />
              <p>Your shortlist is empty.</p>
              <p className="text-sm">Click the heart icon on any generated name to save it here.</p>
            </div>
          ) : (
            shortlist.map((item) => (
              <div key={item.name} className="flex items-center justify-between p-3 rounded-lg border bg-card hover:border-primary/50 transition-colors group">
                <div className="flex flex-col">
                  <span className="font-bold">{item.name}</span>
                  {item.tagline && <span className="text-xs text-muted-foreground truncate max-w-[200px]">{item.tagline}</span>}
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xs font-semibold px-2 py-1 bg-muted rounded">Score: {item.score.total}</div>
                  <button onClick={() => onRemove(item)} className="p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {shortlist.length > 0 && (
          <div className="pt-4 border-t mt-auto">
            <Button className="w-full font-bold group" size="lg">
              Compare Selected
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
