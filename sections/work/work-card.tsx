import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

export const WorkCard = React.memo(({ index }: { index: number }) => {
  return (
    <Link href={`/work/${index}`} className="work-card grid gap-1">
      <Image
        src={`/work/image0${index + 1}.jpg`}
        alt="Work Image"
        width={1000}
        height={1000}
        className="w-full h-auto aspect-[5/3] object-cover rounded-lg border-2"
      />
      <h2 className="font-bold">Work Title</h2>
      <p className="text-sm text-gray-600">Description of the work.</p>
    </Link>
  );
});
