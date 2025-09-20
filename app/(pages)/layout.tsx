import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

import RootLayout from '@/layouts';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayout simple={true}>
      <main
        className={cn(
          'py-[1.5vw] md:px-[2.5vw] px-5',
          'lg:mb-[25vw] md:mb-[40vw] mb-[55vw]',
        )}
      >
        {children}
      </main>
    </RootLayout>
  );
}
