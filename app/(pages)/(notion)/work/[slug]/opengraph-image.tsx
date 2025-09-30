import { ImageResponse } from 'next/og';
import { HikeDataProps } from '@/types/types';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fetchNotionPageContent } from '@/utils/notion-api';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const { info } = await fetchNotionPageContent(slug);

  const { properties } = (info as PageObjectResponse) || {};

  let name = '';

  if (properties?.Name && properties?.Name?.type === 'title') {
    name = properties?.Name?.title?.[0]?.plain_text;
  }

  const NotoSansTCBlack = await readFile(
    join(process.cwd(), 'public/fonts/NotoSansTC-Black.ttf'),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#55534F',
            fontSize: 68,
          }}
        >
          {name || 'No result found'}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Noto Sans TC',
          data: NotoSansTCBlack,
        },
      ],
    },
  );
}
