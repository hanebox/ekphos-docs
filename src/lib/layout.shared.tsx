import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="font-semibold tracking-tight">
          ekphos
        </span>
      ),
    },
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/hanebox/ekphos',
        external: true,
      },
      {
        text: 'Website',
        url: 'https://ekphos.xyz',
        external: true,
      },
    ],
    githubUrl: 'https://github.com/hanebox/ekphos',
  };
}
