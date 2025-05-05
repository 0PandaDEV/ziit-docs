import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          width="48"
          height="48"
          src="/logo.svg"
          alt='Logo'
          aria-label='Logo' />
      </>
    ),
  },
  githubUrl: "https://github.com/0pandadev/ziit-docs"
};
