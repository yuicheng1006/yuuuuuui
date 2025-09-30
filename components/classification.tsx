'use client';

import { cn } from '@/lib/utils';

import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { Button } from '@/components/ui/button';

type ResponseType = {
  type?: 'year' | 'category';
  tags: string[];
  datas: PageObjectResponse[];
  onClick: (tag: string) => void;
};

export const Classification = ({
  type,
  tags,
  datas,
  onClick,
}: ResponseType) => {
  const yearTotalCount = (year: string) => {
    const filteredData = datas?.filter((data) => {
      const { properties } = data;
      const { year: yearProperty } = properties;

      if (yearProperty && yearProperty.type === 'multi_select') {
        return yearProperty.multi_select?.some((item) => item.name === year);
      }
    });
    return filteredData.length || datas.length;
  };

  const categoryTotalCount = (category: string) => {
    const filteredData = datas?.filter((data) => {
      const { properties } = data;
      const { category: categoryProperty } = properties;

      if (categoryProperty && categoryProperty.type === 'multi_select') {
        return categoryProperty.multi_select?.some(
          (item) => item.name === category,
        );
      }
    });
    return category === 'All' ? datas.length : filteredData.length ?? 0;
  };
  return (
    <ul
      className={cn(
        'flex gap-2',
        'pb-[1vw] border-b-2',
        'overflow-scroll',
        'pt-2',
      )}
    >
      {tags.map((tag) => (
        <li key={tag} className="relative">
          <button
            className="mx-3 pt-1.5 pb-1 font-bold border-b-2 border-transparent hover:border-b-black focus:border-b-black"
            onClick={() => onClick(tag)}
          >
            {tag}
          </button>
          <span className="absolute -right-2 -top-1 text-xs">
            {type === 'year'
              ? `(${yearTotalCount(tag)})`
              : `(${categoryTotalCount(tag)})`}
          </span>
        </li>
      ))}
    </ul>
  );
};
