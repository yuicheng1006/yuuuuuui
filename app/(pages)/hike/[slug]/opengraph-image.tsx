import { ImageResponse } from 'next/og';
import { HikeDataProps } from '@/types/types';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hike/mountains.json`,
  );
  const hikes = await res.json();

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
          position: 'relative',
          fontSize: 68,
          color: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
        }}
      >
        <img
          src={result?.images?.[0]}
          alt={result?.mountainName ?? 'Mountain'}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            objectFit: 'cover',
            width: '1200px',
            height: '630px',
            zIndex: -1,
            filter: 'brightness(0.6)',
          }}
        />
        {result?.mountainName ?? 'Mountain'}
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
