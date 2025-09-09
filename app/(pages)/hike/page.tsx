import { cn } from '@/lib/utils';

import Image from 'next/image';

import { HikeCard } from '@/sections/hike/hike-card';

export default function Page() {
  return (
    // <div className="lg:mb-120 md:mb-80 mb-60">
    <div className="mb-100">
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
      <HikeCard years="2025" items={[]} />
      <HikeCard years="2024" items={[]} />
    </div>
  );
}
