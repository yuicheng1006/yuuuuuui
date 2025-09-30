import type { Metadata } from 'next';
import { Geist, Geist_Mono, Noto_Sans_TC } from 'next/font/google';
import './globals.css';

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const notoSansTC = Noto_Sans_TC({
  variable: '--font-noto-sans-tc',
  subsets: ['latin'], // Or other relevant subsets
  weight: ['400', '500', '600', '700', '800', '900'], // Specify desired weights
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hi there, this is Yui!',
  description:
    'This is a personal website featuring my online portfolio and daily life.',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansTC.variable} antialiased`}
      >
        <SidebarProvider>{children}</SidebarProvider>
      </body>
    </html>
  );
}
