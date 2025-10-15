import { NextResponse } from 'next/server';
import urlMetadata from 'url-metadata';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url'); // 傳入要抓取的網址

  if (!targetUrl) {
    return NextResponse.json(
      { error: 'URL parameter is required' },
      { status: 400 },
    );
  }

  try {
    const metadata = await urlMetadata(targetUrl, {
      maxRedirects: 1, // 限制 HTTP 重定向的次數
      timeout: 5000, // 設定請求超時時間
    });

    return NextResponse.json({
      favico: metadata.favicons[0]?.href || '',
      title: metadata.title || '',
      description: metadata.description || '',
      image: metadata['og:image'] || '',
    });
  } catch (error) {
    // 處理超時或重定向過多的錯誤
    return NextResponse.json(
      { error: 'Failed to fetch metadata' },
      { status: 500 },
    );
  }
}
