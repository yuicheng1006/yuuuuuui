import type { Metadata } from 'next';

import { SectionTitle } from '@/components/section-title';
import { WorkComp } from '@/sections/work/work-comp';
import { fetchNotionDatabase, fetchNotionYears } from '@/utils/notion-api';

export const metadata: Metadata = {
  title: 'WORK | Yui Cheng',
  description:
    '一些前端開發專案、個人的 side projects 與過往策劃、執行活動的內容',
};

export default async function Home() {
  const datas = await fetchNotionDatabase(
    process.env.NOTION_EVENT_DATABASE_ID || '',
  );

  const yearsResult = await fetchNotionYears();

  const years =
    (yearsResult?.years as { name: string }[])
      ?.map((tag) => tag.name)
      ?.sort() || [];

  return (
    <>
      <SectionTitle title="WORKS" />
      <div className="overflow-auto mt-[1.5vw]">
        <WorkComp datas={datas} years={['All', ...years]} />
      </div>
    </>
  );
}
