import { ImageResponse } from 'next/og';
import { HikeDataProps } from '@/types/types';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hike/mountains.json`,
  );
  const hikes = await res.json();

  const { slug } = params;

  const result = (Object.values(hikes).flat() as HikeDataProps[]).find(
    (item) => item?.mountainENName === slug,
  );

  const NotoSansTCBlack = await readFile(
    join(process.cwd(), 'public/fonts/NotoSansTC-Black.ttf'),
  );

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 68,
          color: '#55534F',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
        }}
      >
        {result?.mountainName ?? 'No result found'}
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
