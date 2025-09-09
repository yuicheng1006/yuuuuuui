import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

import { SectionTitle } from '@/components/section-title';
import { WorkCard } from '@/sections/work/work-card';

const tags = ['All', '2025', '2024', '2023', '2022', '2021'];

export default function Home() {
  return (
    <div className="px-[2.5vw]">
      <SectionTitle title="WORKS" />
      <div className="overflow-auto mt-[1.5vw]">
        <ul
          className={cn(
            'flex gap-2',
            'pb-[0.5vw] border-b-2',
            'overflow-scroll',
            'pt-2',
          )}
        >
          {tags.map((tag) => (
            <li key={tag} className="relative">
              <Button variant="link" className="font-extrabold">
                {tag}
              </Button>
              <span className="absolute -right-2 -top-1 text-xs">(123)</span>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10 lg:mb-[25vw] md:mb-[40vw] mb-[55vw]">
          {Array.from({ length: 4 }, (_, index) => (
            <WorkCard key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
