import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ekphos.xyz'),
  title: {
    default: 'Ekphos',
    template: '%s | Ekphos',
  },
  description:
    'An open source, lightweight, fast, terminal-based markdown research tool written in Rust.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={jetbrainsMono.variable}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-mono">
        <RootProvider
          theme={{
            defaultTheme: 'dark',
            themes: ['light', 'dark'],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
