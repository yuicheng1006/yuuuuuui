import type { Metadata } from 'next';

import { fetchNotionCategories, fetchNotionDatabase } from '@/utils/notion-api';

import { SectionTitle } from '@/components/section-title';

import { WritingsComp } from '@/sections/writings/writings-comp';

export const metadata: Metadata = {
  title: 'WRITINGS | Yui Cheng',
  description: '紀錄一些我踩過ㄉ坑 UwU',
};

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
        <WritingsComp datas={datas} tags={tags} />
      </div>
    </>
  );
}
