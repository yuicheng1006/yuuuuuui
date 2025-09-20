import Image from 'next/image';
import { cn } from '@/lib/utils';
import Marquee from 'react-fast-marquee';
import { Title } from '@/components/title';

export default function Hike() {
  return (
    <section className="lg:mt-[58px] mt-5">
      <div className="lg:ml-[122px] ml-[15vw] lg:p-[0px_80px_0px]">
        <Title title="HIKE" />
      </div>
      <div className="relative overflow-hidden">
        <Marquee>
          <div
            className={cn(
              'flex will-change-transform',
              'md:gap-y-8 gap-y-[0.92rem]',
            )}
          >
            <div className="inner">
              {Array.from({ length: 14 }).map((_, index) => (
                <figure className="item" key={index}>
                  <Image
                    src={`/hike/m_${index + 1}.jpg`}
                    alt=""
                    width="1000"
                    height="1000"
                    className="w-[586px] max-h-[360px] object-cover object-center aspect-[586/360]"
                  />
                </figure>
              ))}
            </div>
          </div>
        </Marquee>

        <div className="hike_container">
          <p className="hike_title">Let’s go hiking together !</p>
        </div>
      </div>
    </section>
  );
}
