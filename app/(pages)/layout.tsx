import { cn } from '@/lib/utils';

import RootLayout from '@/layouts';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayout simple={true}>
      <main className={cn('lg:mb-[35vw] md:mb-[40vw] mb-[55vw]')}>
        {children}
      </main>
    </RootLayout>
  );
}
