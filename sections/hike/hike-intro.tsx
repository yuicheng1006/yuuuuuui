import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import Marquee from 'react-fast-marquee';
import { HikeDataProps } from '@/types/types';

export const HikeIntro = React.memo(
  ({ hike }: { hike: HikeDataProps | undefined }) => {
    return (
      <>
        <div className={cn('md:pl-[5vw] md:pt-20 pt-10 pb-10', ' border-b-2')}>
          <div className="grid md:grid-cols-7 grid-cols-1">
            <div
              className={cn(
                'md:col-span-2 col-span-1 md:order-1 order-2',
                'flex flex-col items-start justify-end',
                'md:mt-0 mt-10 md:p-0 px-6 mr-6',
              )}
            >
              <h2 className="text-[clamp(1.5rem,5vw,3.5rem)] font-extrabold">
                {hike?.mountainName}
              </h2>
              <p className="mt-3 text-sm font-bold">{hike?.date}</p>
              <p
                className="mt-10 text-justify font-bold"
                dangerouslySetInnerHTML={{ __html: hike?.intro || '' }}
              ></p>
            </div>

            <div className="grid col-span-5 md:order-2 order-1">
              <Marquee
                className="w-full h-full"
                speed={20}
                pauseOnHover={true}
                pauseOnClick={true}
              >
                {hike?.images?.map((image, index) => (
                  <div
                    key={index}
                    className={cn(
                      'md:max-w-[650px] md:w-[40vw] md:max-h-[435px] md:h-[30vw]',
                      'w-[68vw] h-[50vw]',
                      'rounded-md overflow-hidden border mr-4',
                    )}
                  >
                    <Image
                      src={image}
                      alt="Mountain"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:px-12 md:p-0 px-6">
          <div className="grid md:grid-cols-3 gap-4">
            {hike?.images?.map((image, index) => (
              <div
                key={index}
                className={cn(
                  'w-full aspect-3/2',
                  'rounded-md overflow-hidden border mr-4',
                )}
              >
                <Image
                  src={image}
                  alt="Mountain"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  },
);
