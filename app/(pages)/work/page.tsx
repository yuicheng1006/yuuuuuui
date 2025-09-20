import { SectionTitle } from '@/components/section-title';
import { WorkCard } from '@/sections/work/work-card';

import { Classification } from '@/components/classification';

const tags = ['All', '2025', '2024', '2023', '2022', '2021'];

export default function Home() {
  return (
    <>
      <SectionTitle title="WORKS" />
      <div className="overflow-auto mt-[1.5vw]">
        <Classification tags={tags} />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {Array.from({ length: 4 }, (_, index) => (
            <WorkCard key={index} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
