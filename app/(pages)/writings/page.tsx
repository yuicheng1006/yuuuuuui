import { cn } from '@/lib/utils';
import { fetchNotionCategories, fetchNotionDatabase } from '@/utils/notion-api';

import { SectionTitle } from '@/components/section-title';
import { Classification } from '@/components/classification';

import { WritingsCard } from '@/sections/writings/writings-card';

export default async function Page() {
  const categoriesResults = await fetchNotionCategories();
  const datas = await fetchNotionDatabase(
    process.env.NOTION_ARTICLE_DATABASE_ID || '',
  );

  const tags =
    (categoriesResults?.categories as { name: string }[])
      ?.map((tag) => tag.name)
      ?.sort() || [];

  return (
    <>
      <SectionTitle title="WRITINGS" />
      <div className="overflow-auto mt-[1.5vw]">
        <Classification tags={['All', ...tags]} />
        <div
          className={cn(
            'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10',
            'md:gap-x-5 md:gap-y-8 gap-x-3 gap-y-5',
          )}
        >
          {datas?.map((data, index) => (
            <WritingsCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}
