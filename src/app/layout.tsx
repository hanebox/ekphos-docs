import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Ekphos Docs',
    template: '%s | Ekphos Docs',
  },
  description: 'Documentation for Ekphos - A lightweight, fast, terminal-based markdown research tool built with Rust',
  icons: {
    icon: '/favicon.png',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-mono">
        <RootProvider
          theme={{
            defaultTheme: 'dark',
            themes: ['dark'],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
