import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { MoveRight } from 'lucide-react';
import BlockMarquee from './block-marquee';
import { BlockType } from '@/assets/data/block-type';

import { Title } from '@/components/title';

type BlockProps = {
  type?: 'work' | 'reels' | 'writings';
};

export default function Block({ type = 'work' }: BlockProps) {
  return (
    <section id={type}>
      <div className="relative lg:ml-[122px] ml-[15vw] lg:p-[58px_40px_0px_80px] pt-5">
        <Title title={BlockType[type].title} />
        <div
          className={cn(
            'flex justify-between items-end',
            'md:m-[90px_0px_10px] m-[50px_0px_10px]',
          )}
        >
          <p className="h-10 md:p-0 md:m-0 pr-5 mb-10 text-sm md:text-base">
            {BlockType[type].subtitle}
          </p>
          <div className="absolute right-5 bottom-0 flex items-end gap-1">
            <Link
              className="flex gap-2"
              target={type === 'reels' ? '_blank' : '_self'}
              href={
                type === 'reels'
                  ? 'https://www.instagram.com/uwu_ueee/'
                  : `/${type}`
              }
            >
              VIEW MORE
              <MoveRight />
            </Link>
          </div>
        </div>
      </div>
      <BlockMarquee type={type} />
    </section>
  );
}
