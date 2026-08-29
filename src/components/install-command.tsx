'use client';

import { useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';

export function InstallCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="inline-flex items-center gap-2 border border-terminal-border bg-terminal-surface px-3 py-1.5 text-sm text-terminal-muted">
      <span className="text-terminal-accent">$</span>
      <code>{command}</code>
      <button
        type="button"
        aria-label="Copy install command"
        className="transition-colors hover:text-terminal-accent"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(command);
            setCopied(true);
          } catch {
            setCopied(false);
          }
        }}
      >
        {copied ? (
          <Check className="size-4 text-terminal-accent" />
        ) : (
          <Copy className="size-4" />
        )}
      </button>
    </div>
  );
}
