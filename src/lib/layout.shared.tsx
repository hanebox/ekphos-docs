import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-tight">ekphos</span>
          <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground">
            v0.20.10
          </span>
        </div>
      ),
    },
    links: [
      {
        text: "GitHub",
        url: "https://github.com/hanebox/ekphos",
        external: true,
      },
      {
        text: "Website",
        url: "https://ekphos.xyz",
        external: true,
      },
    ],
    githubUrl: "https://github.com/hanebox/ekphos",
  };
}
