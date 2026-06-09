import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-tight">ekphos</span>
          <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground">
            v0.25.10
          </span>
        </div>
      ),
    },
    githubUrl: "https://github.com/hanebox/ekphos",
  };
}
