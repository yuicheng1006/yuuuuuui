'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

import Link from 'next/link';
import { format } from 'date-fns';

import { filterTypeHandler } from '@/utils/filter-handler';

import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { Classification } from '@/components/classification';

export const WritingsComp = React.memo(
  ({ datas, tags }: { datas: PageObjectResponse[]; tags: string[] }) => {
    const [articles, setArticles] = useState(datas);

    const handleTagClick = (tag: string) => {
      const filteredArticles = filterTypeHandler({
        datas,
        tag,
        type: 'category',
      });
      setArticles(filteredArticles);
    };

    return (
      <>
        <Classification
          type="category"
          datas={datas}
          tags={tags}
          onClick={handleTagClick}
        />
        <div
          className={cn(
            'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10',
            'md:gap-x-5 md:gap-y-8 gap-x-3 gap-y-5',
          )}
        >
          {articles?.map((data, index) => {
            const { id, last_edited_time, properties } = data;

            const { name, category, order } = properties;

            let categoryName = 'No Category';
            if (category && category.type === 'multi_select') {
              categoryName = category.multi_select?.[0]?.name || 'No Category';
            }

            let title = 'No Title';
            if (name && name.type === 'title') {
              title = name.title?.[0]?.plain_text || 'No Title';
            }

            if (order && order.type === 'number' && order?.number === 0) return;

            return (
              <Link key={id} href={`/writings/${id}`} className="grid gap-1">
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
                <h2 className="text-sm">
                  {categoryName} | {format(new Date(last_edited_time), 'yyyy')}
                </h2>
                <p className=" text-gray-600 font-bold">{title}</p>
              </Link>
            );
          })}
        </div>
      </>
    );
  },
);
