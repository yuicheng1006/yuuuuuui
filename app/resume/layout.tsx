import { Roboto } from 'next/font/google';
import { cn } from '@/lib/utils';

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        roboto.variable,
        'max-w-4xl w-full h-full',
        'mx-auto md:my-12',
      )}
    >
      {children}
    </div>
  );
}
