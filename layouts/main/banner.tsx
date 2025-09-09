'use client';

import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

export default function Banner() {
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
    <section id="banner">
      <div className="py-4 mx-auto overflow-hidden border-b-2 bg-white ">
        <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
          <CarouselContent className="-ml-4 flex items-center min-h-[20vw] max-h-[90vh]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="2xl:basis-6/13 md:basis-3/6 md:pl-0 pl-4"
              >
                <Card
                  className={cn('bg-white border-2 aspect-square', {
                    'scale-75': index !== current - 1, // 小一點
                    'scale-85': index === current - 1, // 正常大小
                  })}
                >
                  <CardContent className="h-full flex aspect-video items-center justify-center ">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-[7%] left-6">
            <CarouselPrevious />
          </div>
          <div className="absolute bottom-[7%] right-32">
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
