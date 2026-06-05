"use client";

import { GeneratedName } from '@/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface NameCardProps {
  nameObj: GeneratedName;
  isShortlisted: boolean;
  onToggleShortlist: () => void;
  index: number;
}

export function NameCard({ nameObj, isShortlisted, onToggleShortlist, index }: NameCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(nameObj.name);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className="group relative overflow-hidden transition-all hover:shadow-md hover:border-primary/50">
        <div className="p-5 flex flex-col h-full gap-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {nameObj.name}
              </h3>
              {nameObj.tagline && (
                <p className="text-xs text-muted-foreground mt-1 font-medium">{nameObj.tagline}</p>
              )}
            </div>
            <button
              onClick={onToggleShortlist}
              className={cn("p-1.5 rounded-full transition-colors",
                isShortlisted ? "text-red-500 bg-red-50 dark:bg-red-950/30" : "text-muted-foreground hover:bg-muted"
              )}
              aria-label="Toggle shortlist"
            >
              <Heart className={cn("h-4 w-4", isShortlisted && "fill-current")} />
            </button>
          </div>

          <div className="mt-auto pt-4 flex items-center justify-between">
            <div className="flex gap-2">
              <Badge variant="secondary" className="text-[10px] uppercase font-semibold tracking-wider">
                Score {nameObj.score.total}
              </Badge>
              {nameObj.domainAvailabilityScore > 80 && (
                <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900 text-[10px] uppercase">
                  Domain Likely
                </Badge>
              )}
            </div>
            <button
              onClick={copyToClipboard}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {copied ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
