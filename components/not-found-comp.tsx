import { cn } from '@/lib/utils';
import Marquee from 'react-fast-marquee';
import { notfoundData, notfoundMessage } from '@/assets/data/notfound-data';

export function NotFoundComp({ isNoData }: { isNoData?: boolean }) {
  const getRandomArbitrary = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const num = getRandomArbitrary(0, notfoundData.length);

  const finalNotFoundData = [notfoundData?.[num], ...notfoundMessage];

  return (
    <div
      className={cn(
        'flex flex-col justify-center gap-4',
        'xl:min-h-[calc(100vh-480px)]',
        'lg:min-h-[calc(100vh-380px)] lg:mb-[20vw]',
        'md:min-h-[calc(100vh-330px)] md:mb-[30vw]',
        'min-h-[calc(100vh-250px)]',
        isNoData && 'lg:absolute lg:top-0 left-0 w-full fixed',
      )}
    >
      {finalNotFoundData?.map((data, idx) => (
        <Marquee
          className="w-full py-1.5 font-extrabold italic"
          speed={30}
          direction={idx % 2 === 0 ? 'left' : 'right'}
          key={idx}
        >
          {Array.from({ length: data?.length }, (_, i) => (
            <span
              className="md:text-[clamp(80px,8vw,150px)] text-5xl leading-[1.5]"
              key={i}
            >
              {data?.title}
            </span>
          ))}
        </Marquee>
      ))}
      <div className="lg:hidden">
        {finalNotFoundData?.map((data, idx) => (
          <Marquee
            className="w-full py-1.5 font-extrabold italic"
            speed={30}
            direction={idx % 2 === 0 ? 'left' : 'right'}
            key={idx}
          >
            {Array.from({ length: data?.length }, (_, i) => (
              <span
                className="md:text-[clamp(80px,8vw,150px)] text-5xl leading-[1.5]"
                key={i}
              >
                {data?.title}
              </span>
            ))}
          </Marquee>
        ))}
      </div>
    </div>
  );
}
