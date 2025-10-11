import RootLayout from '@/layouts';

export const revalidate = 86400; // 24 hours

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayout>{children}</RootLayout>;
}
