import type { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { Rose } from 'lucide-react';
import { fetchNotionPageContent } from '@/utils/notion-api';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { Badge } from '@/components/ui/badge';
import { NotFoundComp } from '@/components/not-found-comp';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;

  const { info } = await fetchNotionPageContent(slug);

  const { properties } = (info as PageObjectResponse) || {};

  let name = '';

  if (properties?.Name && properties?.Name?.type === 'title') {
    name = properties?.Name?.title?.[0]?.plain_text;
  }

  return {
    title: `WORK | ${name}`,
    description: `作品集 - ${name}`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { info, renderHTML } = await fetchNotionPageContent(slug);

  const { properties } = (info as PageObjectResponse) || {};

  let name = '';

  if (properties?.Name && properties?.Name?.type === 'title') {
    name = properties?.Name?.title?.[0]?.plain_text;
  }

  let link = '';
  if (properties?.url && properties?.url?.type === 'url') {
    link = properties?.url?.url ?? '';
  }

  let tags = null;
  if (properties?.skills && properties?.skills?.type === 'multi_select') {
    tags = properties?.skills?.multi_select || [];
  }

  if (!renderHTML) {
    return <NotFoundComp isNoData />;
  }
  return (
    <div className="max-w-[710px] mx-auto lg:mt-12 lg:mb-20 md:my-12 my-8">
      <h3 className="md:text-4xl text-3xl font-extrabold text-center text-sub my-4">
        {name}
      </h3>

      {link !== '' && (
        <Link href={link} target="_blank" className="flex justify-center">
          <Rose className="text-main" />
        </Link>
      )}
      <div className="flex justify-center gap-1.5 mt-4">
        {tags?.map((tag) => (
          <Badge variant="outline" key={tag.id}>
            {tag.name}
          </Badge>
        ))}
      </div>
      <div className="article-item lg:mt-15 mt-10">
        <div dangerouslySetInnerHTML={{ __html: renderHTML ?? '' }} />
      </div>
    </div>
  );
}
