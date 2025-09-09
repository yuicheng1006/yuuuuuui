import { Button } from '@/components/ui/button';
import Image from 'next/image';

import Banner from '@/layouts/main/banner';
import SideMarquee from '@/layouts/main/side-marquee';
import Block from '@/layouts/main/block';
import Hike from '@/layouts/main/hike';

export default function Home() {
  return (
    <div>
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
      <Banner />
      <SideMarquee />
      <Block type="works" />
      <Block type="reels" />
      <Hike />
    </div>
  );
}
