import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Logo } from '@/layouts/header/logo';

import { ScrollToTop } from '../footer/scroll-to-top';

const SimpleFooter = async () => {
  return (
    <footer className={cn('absolute bottom-0 w-full bg-white mt-40')}>
      <div className="ml-[3vw] mb-[5vw]">
        <Image
          src="/hi.svg"
          alt="HI THERE"
          width={200}
          height={200}
          className={cn('max-w-[979px] w-[50vw]')}
        />
      </div>
      <div className="relative border-t-2 ">
        <div className="absolute -top-4.5 md:right-10 right-6 z-20">
          <ScrollToTop />
        </div>
        <div className="p-10 flex items-center justify-center">
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
