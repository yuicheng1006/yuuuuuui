import { redirect } from 'next/navigation';

import { Client } from '@notionhq/client';
import { NotionRenderer } from '@notion-render/client';

import {
  PageObjectResponse,
  DataSourceObjectResponse,
  ParagraphBlockObjectResponse,
  GetPageResponse,
} from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

const renderer = new NotionRenderer({
  client: notion,
});

// 取得文章的分類
export const fetchNotionCategories = async () => {
  try {
    // 檢查 notion 客戶端是否正確初始化
    if (!process.env.NOTION_API_TOKEN) {
      console.warn('NOTION_API_TOKEN 環境變數未設定');
      return {
        categories: [],
      };
    }

    const res = await notion.search({
      query: '',
      page_size: 100,
      filter: {
        value: 'data_source',
        property: 'object',
      },
    });

    const firstResult: DataSourceObjectResponse | any = res.results?.find(
      (item) => item.id === process.env.NOTION_ARTICLE_DATABASE_ID,
    );

    const categories =
      firstResult?.properties?.category?.multi_select?.options || [];

    return {
      categories,
    };
  } catch (error) {
    console.error('查詢資料庫失敗：', error);
    console.error('錯誤詳情：', JSON.stringify(error, null, 2));
    return {
      categories: [],
    };
  }
};

// 取得文章的年份
export const fetchNotionYears = async () => {
  try {
    // 檢查 notion 客戶端是否正確初始化
    if (!process.env.NOTION_API_TOKEN) {
      console.warn('NOTION_API_TOKEN 環境變數未設定');
      return {
        categories: [],
      };
    }

    const res = await notion.search({
      query: '',
      page_size: 100,
      filter: {
        value: 'data_source',
        property: 'object',
      },
    });

    const firstResult: DataSourceObjectResponse | any = res.results?.find(
      (item) => item.id === process.env.NOTION_EVENT_DATABASE_ID,
    );

    const years = firstResult?.properties?.year?.multi_select?.options || [];

    return {
      years,
    };
  } catch (error) {
    console.error('查詢資料庫失敗：', error);
    console.error('錯誤詳情：', JSON.stringify(error, null, 2));
    return {
      categories: [],
    };
  }
};

// 取得資料庫列表
export const fetchNotionDatabase = async (
  database_id: string,
): Promise<PageObjectResponse[]> => {
  try {
    // 檢查 notion 客戶端是否正確初始化
    if (!process.env.NOTION_API_TOKEN) {
      console.warn('NOTION_API_TOKEN 環境變數未設定');
      return [];
    }

    if (!database_id) {
      console.warn('database_id 未提供');
      return [];
    }

    const response = await notion.dataSources.query({
      data_source_id: database_id,
      sorts: [
        {
          property: 'order',
          direction: 'descending',
        },
      ],
    });

    return response.results as PageObjectResponse[];
  } catch (error) {
    console.error('查詢資料庫失敗：', error);
    console.error('錯誤詳情：', JSON.stringify(error, null, 2));
    return [];
  }
};

// 取得 notion 頁面內容
export const fetchNotionPageContent = async (
  page_id: string,
): Promise<{
  info: GetPageResponse | null;
  renderHTML: string | null;
}> => {
  try {
    if (!process.env.NOTION_API_TOKEN) {
      console.warn('NOTION_API_TOKEN 環境變數未設定');
      return {
        info: null,
        renderHTML: null,
      };
    }

    if (!page_id) {
      console.warn('page_id 未提供');
      return {
        info: null,
        renderHTML: null,
      };
    }

    const { results } = await notion.blocks.children.list({
      block_id: page_id,
    });

    const info = await notion.pages.retrieve({
      page_id: page_id,
    });

    const html = await renderer.render(
      ...(results as ParagraphBlockObjectResponse[]),
    );

    return { info, renderHTML: html };
  } catch (error) {
    console.error('取得頁面內容失敗：', error);
    console.error('錯誤詳情：', JSON.stringify(error, null, 2));

    return {
      info: null,
      renderHTML: null,
    };
  }
};
