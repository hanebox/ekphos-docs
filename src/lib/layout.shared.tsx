import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { getRepoInfo, GITHUB_URL } from '@/lib/github';

export async function baseOptions(): Promise<BaseLayoutProps> {
  const { version } = await getRepoInfo();

  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-tight">ekphos</span>
          {version ? (
            <span className="rounded-md bg-fd-muted px-1.5 py-0.5 text-xs font-medium text-fd-muted-foreground">
              {version}
            </span>
          ) : null}
        </div>
      ),
    },
    links: [
      {
        text: 'Docs',
        url: '/docs',
      },
    ],
    githubUrl: GITHUB_URL,
  };
}
