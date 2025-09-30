import { cn } from '@/lib/utils';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={cn('py-[1.5vw] md:px-[2.5vw] px-5')}>{children}</div>;
}
