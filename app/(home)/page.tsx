import { Button } from '@/components/ui/button';
import Image from 'next/image';

import Banner from '@/layouts/main/banner';
import SideMarquee from '@/layouts/main/side-marquee';
import Block from '@/layouts/main/block';
import Hike from '@/layouts/main/hike';

export default function Home() {
  return (
    <div>
      <Banner />
      <SideMarquee />
      <Block type="work" />
      <Block type="writings" />
      <Block type="reels" />
      <Hike />
    </div>
  );
}
