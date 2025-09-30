import type { Metadata, ResolvingMetadata } from 'next';

import { HikeIntro } from '@/sections/hike/hike-intro';
import { HikeDataProps } from '@/types/types';
import { NotFoundComp } from '@/components/not-found-comp';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hike/mountains.json`,
  );
  const hikes = await res.json();

  const { slug } = await params;

  const result = (Object.values(hikes).flat() as HikeDataProps[]).find(
    (item) => item?.mountainENName === slug,
  );

  return {
    title: `HIKE | ${result?.mountainName}`,
    description: `HIKE | ${result?.intro}`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hike/mountains.json`,
  );
  const hikes = await res.json();

  const { slug } = await params;

  const result = (Object.values(hikes).flat() as HikeDataProps[]).find(
    (item) => item?.mountainENName === slug,
  );

  if (!result) {
    return <NotFoundComp isNoData />;
  }

  return (
    <div className="mb-10">
      <HikeIntro hike={result} />
    </div>
  );
}
