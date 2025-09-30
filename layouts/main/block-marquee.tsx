import Marquee from 'react-fast-marquee';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';

import { fetchNotionDatabase } from '@/utils/notion-api';

export default async function BlockMarquee({ type = 'works' }) {
  return (
    <div className="relative w-full overflow-hidden">
      <Marquee
        className="w-full h-full"
        speed={20}
        pauseOnHover={true}
        pauseOnClick={true}
        direction={type === 'writings' ? 'right' : 'left'}
      >
        {type === 'reels' ? (
          <ReelsMarqueeItems />
        ) : type === 'writings' ? (
          <WritingsMarqueeItems />
        ) : (
          <MarqueeItems />
        )}
      </Marquee>
    </div>
  );
}

// works
const MarqueeItems = async () => {
  const datas = await fetchNotionDatabase(
    process.env.NOTION_WORK_DATABASE_ID || '',
  );

  return (
    <div className="flex bg-white">
      {datas?.map((data, index) => {
        const { properties } = data;

        const { name, page, year, cover } = properties;

        let title = 'No Title';
        if (name && name.type === 'title') {
          title = name.title?.[0]?.plain_text || 'No Title';
        }

        let id = '';
        if (page && page.type === 'relation') {
          id = page.relation?.[0]?.id || '';
        }

        let time = '';
        if (year && year.type === 'rich_text') {
          time = year.rich_text?.[0]?.plain_text || '';
        }

        let covers = '';
        if (cover && cover.type === 'rich_text') {
          covers = cover.rich_text?.[0]?.plain_text || '';
        }

        return (
          <Link
            href={`/work/${id}`}
            className="col border-2 border-l-0"
            key={index}
          >
            <div
              key={index}
              className={cn(
                'max-w-[560px] max-h-[305px] w-[80vw] h-[50vw] bg-gray-200 object-cover object-center aspect-[560/305]',
                'flex items-center justify-center',
                'border-b-2',
              )}
            >
              <Image
                src={covers || '/placeholder.png'}
                alt={title}
                width={1000}
                height={1000}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="col md:p-5 p-2 md:text-sm text-xs font-semibold">
              <h3 className="mb-2">{time}</h3>
              <span>{title}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

// writings
const WritingsMarqueeItems = async () => {
  const datas = await fetchNotionDatabase(
    process.env.NOTION_ARTICLE_DATABASE_ID || '',
  );

  return (
    <div className="flex bg-white">
      {datas.slice(0, 6).map((item, index) => {
        const { id, last_edited_time, properties } = item;

        const { name, category } = properties;

        // 使用類型守衛檢查屬性類型
        let categoryName = 'No Category';
        if (category && category.type === 'multi_select') {
          categoryName = category.multi_select?.[0]?.name || 'No Category';
        }

        let title = 'No Title';
        if (name && name.type === 'title') {
          title = name.title?.[0]?.plain_text || 'No Title';
        }

        return (
          <Link
            href={`/writings/${id}`}
            className="col border-2 border-l-0"
            key={index}
          >
            <div
              key={index}
              className={cn(
                'max-w-[425px] max-h-[425px] w-[60vw] h-[60vw]',
                'flex items-center justify-center',
                'object-cover object-center aspect-square',
                'bg-gray-200 border-b-2',
              )}
            >
              <span className="md:text-4xl text-2xl font-semibold">
                {categoryName}
              </span>
            </div>
            <div className="col md:p-5 p-2 md:text-sm text-xs font-semibold">
              <h3 className="mb-2">
                {format(new Date(last_edited_time), 'yyyy-MM-dd')}
              </h3>
              <span>{title}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

// reels
const ReelsMarqueeItems = async () => {
  const datas = await fetchNotionDatabase(
    process.env.NOTION_REELS_DATABASE_ID || '',
  );

  return (
    <div className="flex bg-white">
      {datas.map((reel, index) => {
        const { properties } = reel;

        // 使用類型守衛檢查 name 屬性
        const { name } = properties;
        let title = '';

        if (name && name.type === 'title') {
          title = name.title?.[0]?.plain_text || '';
        }

        return (
          <div className="border-2 border-l-1" key={index}>
            <div
              key={index}
              className={cn(
                'relative',
                'w-[368px] h-[654px] bg-gray-200',
                'flex items-center justify-center',
                'overflow-hidden',
              )}
            >
              <iframe
                className="absolute w-[146%] h-[1057px] -top-[65px]
            -left-[85px] overflow-hidden"
                src={`https://www.instagram.com/reel/${title}/embed`}
                height="1057"
              ></iframe>
            </div>
          </div>
        );
      })}
    </div>
  );
};
