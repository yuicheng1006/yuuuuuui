import type { Metadata } from 'next';

import RootLayout from '@/layouts';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayout simple={true}>
      <main className='py-[1.5vw]'>{children}</main>
    </RootLayout>
  );
}
