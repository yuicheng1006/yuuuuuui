import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import Marquee from 'react-fast-marquee';

export const HikeIntro = React.memo(({}) => (
  <div className={cn('md:pl-[5vw] md:pt-20 pt-10 pb-10', ' border-b-2')}>
    <div className="grid md:grid-cols-7 grid-cols-1">
      <div
        className={cn(
          'md:col-span-2 col-span-1 md:order-1 order-2',
          'flex flex-col items-start justify-end',
          'md:mt-0 mt-10 md:p-0 px-6',
        )}
      >
        <h2 className="text-[clamp(1.5rem,5vw,3.5rem)] font-extrabold">
          眠月線
        </h2>
        <p className="mt-10 text-justify font-bold">
          在不是很浪漫的月份(農曆七月份) <br />
          去到了台灣最美麗的森林鐵路步道
          <br /> 全長 9.2 公里
          <br /> 沿途行徑橋樑24座、隧道14座
          <br /> 隧道真的讓人好涼好害怕 ಢ_ಢ
        </p>
      </div>

      <div className="grid col-span-5 md:order-2 order-1">
        <Marquee
          className="w-full h-full"
          speed={20}
          pauseOnHover={true}
          pauseOnClick={true}
        >
          <div
            className={cn(
              'md:max-w-[650px] md:w-[40vw] md:max-h-[435px] md:h-[30vw]',
              'w-[68vw] h-[50vw]',
              'rounded-md overflow-hidden border mr-4',
            )}
          >
            <Image
              src="/hike/m_2.jpg"
              alt="Mountain"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={cn(
              'max-w-[650px] md:w-[40vw] max-h-[435px] md:h-[30vw]',
              'w-[68vw] h-[50vw]',
              'rounded-md overflow-hidden border mr-4',
            )}
          >
            <Image
              src="/hike/m_2.jpg"
              alt="Mountain"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </Marquee>
      </div>
    </div>
  </div>
));
