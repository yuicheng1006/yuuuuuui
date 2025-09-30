import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const filterTypeHandler = ({
  datas,
  tag,
  type,
}: {
  datas: PageObjectResponse[];
  tag: string;
  type: 'year' | 'category';
}) => {
  const filteredArticles =
    tag === 'All'
      ? datas
      : datas?.filter((data) => {
          const { properties } = data;
          const { [type]: filterType } = properties;

          if (filterType && filterType.type === 'multi_select') {
            return filterType.multi_select?.some((item) => item.name === tag);
          }
        });
  return filteredArticles || [];
};
