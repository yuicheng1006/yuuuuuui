import { cn } from '@/lib/utils';
import Image from 'next/image';

import { ScrollToTop } from './scroll-to-top';

const Footer = async () => {
  return (
    <footer
      className={cn(
        'relative',
        'md:h-[91.5vh] h-[60vh] bg-white',
        'border-t-2 mt-40',
      )}
    >
      <div className="absolute -top-4.5 md:right-10 right-6 z-20">
        <ScrollToTop />
      </div>
      <div
        className={cn(
          'relative z-10',
          'flex justify-center items-center',
          'w-full h-full',
          'overflow-hidden',
        )}
      >
        <Image
          src="/me.gif"
          alt="memememe"
          width={200}
          height={200}
          className={cn('md:h-40 md:w-40 h-24 w-24')}
        />
        <div className="absolute -bottom-[1.5vw] -left-[1.5vw]">
          <Image
            src="/hi.svg"
            alt="HI THERE"
            width={200}
            height={200}
            className={cn('max-w-[979px] w-[50vw]')}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
