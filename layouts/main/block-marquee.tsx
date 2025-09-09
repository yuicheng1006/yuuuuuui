import Marquee from 'react-fast-marquee';
import { cn } from '@/lib/utils';

import { reelsData } from '@/assets/data/reels';

export default function BlockMarquee({ type = 'works' }) {
  return (
    <div className="relative w-full overflow-hidden">
      <Marquee
        className="w-full h-full"
        speed={20}
        pauseOnHover={true}
        pauseOnClick={true}
        direction={type === 'reels' ? 'right' : 'left'}
      >
        {type === 'reels' ? <ReelsMarqueeItems /> : <MarqueeItems />}
      </Marquee>
    </div>
  );
}

const MarqueeItems = () => {
  return (
    <div className="flex bg-white">
      {Array.from({ length: 6 }).map((_, index) => (
        <div className="col border-2 border-l-0" key={index}>
          <div
            key={index}
            className={cn(
              'max-w-[560px] max-h-[305px] w-[80vw] h-[50vw] bg-gray-200 object-cover object-center aspect-[560/305]',
              'flex items-center justify-center',
              'border-b-2',
            )}
          >
            <span className="text-xl font-semibold">{`Block ${
              index + 1
            }`}</span>
          </div>
          <div className="col md:p-5 p-2 md:text-sm text-xs font-semibold">
            <h3>2021</h3>
            <span>GIRLSTALK 媽寶節</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const ReelsMarqueeItems = () => {
  return (
    <div className="flex bg-white">
      {reelsData.map((reel, index) => (
        <div className="border-2 border-l-1" key={index}>
          <div
            key={index}
            className={cn(
              'relative',
              'w-[368px] h-[654px] bg-gray-200',
              'flex items-center justify-center',
              'overflow-hidden',
            )}
          >
            <iframe
              className="absolute w-[146%] h-[1057px] -top-[65px]
            -left-[85px] overflow-hidden"
              src={`https://www.instagram.com/reel/${reel.name}/embed`}
              height="1057"
            ></iframe>
          </div>
        </div>
      ))}
      {reelsData.map((reel, index) => (
        <div className="border-2 border-l-1" key={index}>
          <div
            key={index}
            className={cn(
              'relative',
              'w-[368px] h-[654px] bg-gray-200',
              'flex items-center justify-center',
              'overflow-hidden',
            )}
          >
            <iframe
              className="absolute w-[146%] h-[1057px] -top-[65px]
            -left-[85px] overflow-hidden"
              src={`https://www.instagram.com/reel/${reel.name}/embed`}
              // width="368"
              height="1057"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};
