import type { Metadata } from 'next';

import { cn } from '@/lib/utils';
import Image from 'next/image';

import { HikeCard } from '@/sections/hike/hike-card';

export const metadata: Metadata = {
  title: 'HIKE | Yui Cheng',
  description: '紀錄一些我去過的美麗山頭',
};

export default async function Page() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hike/mountains.json`,
  );
  const hikes = await res.json();

  const keys = Object.keys(hikes)
    .map((year) => year)
    .sort()
    .reverse();

  return (
    <>
      <div
        className={cn(
          'w-full flex justify-between items-center',
          'py-[5vw] px-[3vw] border-b-2',
        )}
      >
        <h2
          className={cn(
            'lg:text-[clamp(5rem,8vw,10rem)] text-[clamp(2.2rem,8vw,8rem)]',
            'font-extrabold',
            'lg:pl-[6vw] md:pl-[4vw]',
          )}
        >
          ADVENTURE
        </h2>
        <Image
          src="/mountain.svg"
          alt="Adventure"
          width={243}
          height={243}
          className="max-w-[243px] w-[15vw]"
        />
      </div>
      {keys.map((year) => (
        <HikeCard key={year} years={year} items={hikes[year]} />
      ))}
    </>
  );
}
