import type { Metadata, ResolvingMetadata } from 'next';

import Image from 'next/image';
import { fetchNotionPageContent } from '@/utils/notion-api';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotFoundComp } from '@/components/not-found-comp';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;

  const { info } = await fetchNotionPageContent(slug);

  const { properties } = (info as PageObjectResponse) || {};

  let name = '';
  if (properties?.name && properties?.name?.type === 'title') {
    name = properties?.name?.title?.[0]?.plain_text;
  }

  let category = '';
  if (properties?.category && properties?.category?.type === 'multi_select') {
    category =
      properties?.category?.multi_select?.map((item) => item.name).join(', ') ||
      '';
  }

  return {
    title: `${category} | ${name}`,
    description: `文章 - ${name}`,
  };
}

export default async function RemoteMdxPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { info, renderHTML } = await fetchNotionPageContent(slug);

  const { icon, properties } = info as PageObjectResponse;

  let name = '';
  if (properties?.name && properties?.name?.type === 'title') {
    name = properties?.name?.title?.[0]?.plain_text;
  }

  let iconImage = { type: '', url: '' };
  if (icon?.type === 'external') {
    iconImage = { type: icon?.type, url: icon?.external?.url };
  }

  if (!renderHTML) {
    return <NotFoundComp isNoData />;
  }

  return (
    <div className="max-w-[710px] mx-auto lg:mt-12 lg:mb-20 md:my-12 my-8">
      <Image
        width={100}
        height={100}
        src={iconImage?.url}
        alt={iconImage?.type}
        unoptimized
        className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]"
      />

      <h3 className="md:text-4xl text-3xl font-extrabold text-sub my-4">
        {name}
      </h3>
      <div className="article-item">
        <div dangerouslySetInnerHTML={{ __html: renderHTML ?? '' }} />
      </div>
    </div>
  );
}
