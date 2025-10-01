'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { filterTypeHandler } from '@/utils/filter-handler';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { Badge } from '@/components/ui/badge';
import { Classification } from '@/components/classification';

export const WorkComp = React.memo(
  ({ datas, years }: { datas: PageObjectResponse[]; years: string[] }) => {
    const [works, setWorks] = useState(datas);

    const handleTagClick = (tag: string) => {
      const filteredWorks = filterTypeHandler({
        datas,
        tag,
        type: 'year',
      });
      setWorks(filteredWorks);
    };

    return (
      <>
        <Classification
          type="year"
          tags={years}
          datas={datas}
          onClick={handleTagClick}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 gap-y-8 mt-10">
          {works?.map((data, index) => {
            const { cover, id, properties } = data;

            const { Name, skills, year, url } = properties;

            let coverImage = '';
            if (cover && cover.type === 'external') {
              coverImage = cover.external.url;
            }
            let name = 'No Category';
            if (Name && Name.type === 'title') {
              name = Name.title?.[0]?.plain_text || 'No Category';
            }

            let tags = null;
            if (skills && skills.type === 'multi_select') {
              tags = skills?.multi_select || [];
            }

            let date = '';
            if (year && year.type === 'multi_select') {
              date = year.multi_select?.[0]?.name || '';
            }
            let link = '';
            if (url && url.type === 'url') {
              link = url.url || '';
            }

            const isUIOnly = tags?.some((tag) => tag.name === '切版');
            return (
              <Link
                key={id}
                href={isUIOnly ? link : `/work/${id}`}
                target={isUIOnly ? '_blank' : '_self'}
                className="work-card grid gap-1"
              >
                <Image
                  src={coverImage}
                  alt="Work Image"
                  width={1000}
                  height={1000}
                  unoptimized
                  className="w-full h-auto aspect-[5/3] object-cover rounded-lg border-2"
                />
                <h2 className="text-gray-600 font-bold">{name}</h2>
                <div className="flex gap-1.5">
                  {tags?.map((tag) => (
                    <Badge variant="outline" key={tag.id}>
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </>
    );
  },
);
