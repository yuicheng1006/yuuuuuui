import Marquee from 'react-fast-marquee';
import { cn } from '@/lib/utils';

export default function SideMarquee() {
  return (
    <div
      className={cn(
        'fixed top-0 w-[200vh] max-h-[122px] h-[12vw]',
        'lg:left-[120px] md:left-[90px] sm:left-[80px] left-[12%] -z-2',
        'rotate-90 origin-top-left border-2',
      )}
    >
      <Marquee className="w-full h-full" speed={2}>
        <MarqueeItems />
        <MarqueeItems />
        <MarqueeItems />
      </Marquee>
    </div>
  );
}

const MarqueeItems = () => {
  return (
    <span className="mx-2 whitespace-nowrap lg:text-[86px] md:text-[50px] sm:text-[46px] text-[36px] text-white text-stroke-3">
      CREATIVITY_MOUNTAINS_FOODS_FRIENDS
    </span>
  );
};
