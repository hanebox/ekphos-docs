import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen, Star } from 'lucide-react';
import { InstallCommand } from '@/components/install-command';
import { getRepoInfo, GITHUB_URL } from '@/lib/github';

const description =
  'An open source, lightweight, fast, terminal-based markdown research tool written in Rust.';

export const metadata: Metadata = {
  title: 'Ekphos',
  description,
};

const features = [
  {
    title: 'powered by rust',
    body: 'Built with ratatui and crossterm for a fast, native TUI experience',
  },
  {
    title: 'navigate with vim',
    body: 'vim motion support for editing (hjkl, w, b, 0, $, etc.)',
  },
  {
    title: 'images support',
    body: 'Inline image preview in compatible terminals (iTerm2, Kitty, WezTerm)',
  },
];

export default async function HomePage() {
  const { stars, version } = await getRepoInfo();

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-4xl space-y-12">
        <header className="space-y-4 text-center">
          <h1 className="inline-flex items-center justify-center gap-2 text-4xl font-semibold tracking-tight md:text-5xl">
            <span>ekphos</span>
            {version ? (
              <a
                href={`${GITHUB_URL}/releases/latest`}
                className="border border-terminal-accent px-2 py-0.5 text-sm font-normal text-terminal-accent transition-colors hover:bg-terminal-accent hover:text-terminal-bg"
              >
                {version}
              </a>
            ) : null}
          </h1>

          <p className="mx-auto max-w-xl text-lg text-terminal-muted">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <InstallCommand command="cargo install ekphos" />
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 border border-terminal-border px-3 py-1.5 text-sm text-terminal-text transition-colors hover:border-terminal-accent hover:text-terminal-accent"
            >
              <BookOpen className="size-4" />
              <span>docs</span>
            </Link>
          </div>
        </header>

        <Image
          src="/ekphos-example.png"
          alt="Ekphos TUI screenshot showing three-pane layout with notes sidebar, content view, and outline panel"
          width={1920}
          height={1080}
          priority
          className="h-auto w-full"
        />

        <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="space-y-2 border border-terminal-border p-4"
            >
              <div className="text-terminal-accent">&gt; {feature.title}</div>
              <p className="text-terminal-muted">{feature.body}</p>
            </div>
          ))}
        </div>

        <footer className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href={GITHUB_URL}
            className="text-terminal-muted transition-colors hover:text-terminal-accent"
          >
            github
          </a>
          <Link
            href="/docs"
            className="text-terminal-muted transition-colors hover:text-terminal-accent"
          >
            docs
          </Link>
          <a
            href={GITHUB_URL}
            className="inline-flex items-center gap-1.5 border border-terminal-border px-2 py-0.5 text-terminal-muted transition-colors hover:border-terminal-accent hover:text-terminal-accent"
          >
            <Star className="size-3.5" />
            {stars}
          </a>
        </footer>
      </div>
    </main>
  );
}
