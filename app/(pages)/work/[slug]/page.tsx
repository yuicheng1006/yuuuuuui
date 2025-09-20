import { fetchNotionPageContent } from '@/utils/notion-api';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export default async function RemoteMdxPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { info, renderHTML } = await fetchNotionPageContent(slug);

  let name = '';
  const { properties } = (info as PageObjectResponse) || {};
  if (properties?.Name && properties?.Name?.type === 'title') {
    name = properties?.Name?.title?.[0]?.plain_text;
  }

  return (
    <div className="max-w-[710px] mx-auto lg:mt-12 lg:mb-20 md:my-12 my-8">
      <h3 className="md:text-4xl text-3xl font-extrabold text-[#55534F] my-4">
        {name}
      </h3>
      <div className="article-item">
        <div dangerouslySetInnerHTML={{ __html: renderHTML ?? '' }} />
      </div>
    </div>
  );
}
