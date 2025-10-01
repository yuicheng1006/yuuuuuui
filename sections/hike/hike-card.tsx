'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { MoveRight } from 'lucide-react';

import { HikeDataProps } from '@/types/types';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

type HikeCardProps = { years: string; items: HikeDataProps[] };

export const HikeCard = React.memo(({ years, items }: HikeCardProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="grid md:grid-cols-3 grid-cols-5 border-b-2">
      <h3
        className={cn(
          'flex items-end',
          'lg:text-[clamp(3rem,7vw,8rem)] text-[clamp(2.2rem,8vw,8rem)]',
          'font-extrabold',
          'lg:pl-[6vw] md:pl-[4vw]',
          'md:[writing-mode:horizontal-tb] [writing-mode:sideways-lr]',
          'col-span-1 border-r-2',
          'md:pb-0 pb-8',
        )}
      >
        {years}
      </h3>
      <div
        className={cn('md:col-span-2 col-span-4 md:py-20 py-8 lg:pl-15 pl-8')}
      >
        <div className="lg:block hidden">
          <Carousel setApi={setApi} className="w-full" opts={{ loop: false }}>
            <CarouselContent>
              {items?.map((item, index) => (
                <CarouselItem key={index} className="md:basis-2/5 pl-6">
                  <CardItem key={index} item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="lg:hidden flex gap-4 overflow-scroll pr-8">
          {items?.map((item, index) => (
            <CardItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
});

const CardItem = React.memo(({ item }: { item: any }) => {
  return (
    <div className="w-full h-full grid gap-2 p-0">
      <div
        className={cn(
          'md:w-[23vw] w-[40vw]',
          'aspect-[404/453]',
          ' bg-white border-2 p-0 ',
          ' rounded-lg overflow-hidden',
        )}
      >
        <Link href={`/hike/${item?.mountainENName}`}>
          <Image
            src={item?.images[0]}
            alt="Mountain"
            width={404}
            height={453}
            unoptimized
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="h-25 flex flex-col justify-between">
        <h3 className="text-xl font-extrabold">
          {item?.month} | {item?.mountainName}
        </h3>
        <Link
          href={`/hike/${item?.mountainENName}`}
          className="flex gap-12 mt-4"
        >
          <span className="md:text-base text-sm font-bold">More Details</span>
          <MoveRight />
        </Link>
      </div>
    </div>
  );
});
