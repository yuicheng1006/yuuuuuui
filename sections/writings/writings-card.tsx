import React from 'react';
import { cn } from '@/lib/utils';

import Link from 'next/link';
import { format } from 'date-fns';

import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const WritingsCard = React.memo(
  ({ data }: { data: PageObjectResponse }) => {
    const { last_edited_time, properties } = data;

    const { name, category } = properties;

    let categoryName = 'No Category';
    if (category && category.type === 'multi_select') {
      categoryName = category.multi_select?.[0]?.name || 'No Category';
    }

    let title = 'No Title';
    if (name && name.type === 'title') {
      title = name.title?.[0]?.plain_text || 'No Title';
    }

    return (
      <Link href={`/writings/${data.id}`} className="grid gap-1">
        <div className="w-full h-full aspect-square border-2 rounded-md overflow-hidden">
          <p
            className={cn(
              'w-full h-full bg-[#F5F4F4]',
              'flex justify-center items-center',
              'lg:text-4xl md:text-3xl text-2xl font-extrabold tracking-widest',
            )}
          >
            {categoryName}
          </p>
        </div>
        <h2 className="text-sm ">
          {categoryName} | {format(new Date(last_edited_time), 'yyyy')}
        </h2>
        <p className=" text-gray-600 font-bold">{title}</p>
      </Link>
    );
  },
);
