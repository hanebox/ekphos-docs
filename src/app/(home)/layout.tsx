import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-terminal-accent/10 px-4 py-2 text-center text-xs text-terminal-accent">
        Ekphos is still in early stage, but growing fast. Stay tuned for awesome
        updates!
      </div>
      {children}
    </>
  );
}
