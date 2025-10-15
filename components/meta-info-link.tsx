'use client';

import React, { useState, useTransition } from 'react';
import { Flower2 } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { getMetaData } from '@/utils/fetch-metadata';

export const MetaInfoLink = React.memo(
  ({ url, children }: { url: string; children: React.ReactNode }) => {
    const [metadata, setMetadata] = useState<Record<string, string>>({});
    const [isPending, startTransition] = useTransition();
    const [imageError, setImageError] = useState(false);
    const [faviconError, setFaviconError] = useState(false);

    const fetchMetaData = async () => {
      // 防止重複請求：如果正在載入中或已經有資料就不重複請求
      if (isPending || metadata.title) return;

      startTransition(async () => {
        try {
          const metadata = await getMetaData(url);
          setMetadata(metadata);
          setImageError(false); // 重置圖片錯誤狀態
          setFaviconError(false); // 重置 favicon 錯誤狀態
        } catch (error) {
          console.error('Failed to fetch metadata:', error);
        }
      });
    };
    return (
      <Tooltip>
        <TooltipTrigger onMouseOver={fetchMetaData}>{children}</TooltipTrigger>
        <TooltipContent className="max-w-[335px] w-[100vw] bg-white overflow-hidden p-0 shadow-xl">
          {isPending || metadata?.title ? (
            <>
              {isPending ? (
                <div className="w-full min-h-[250px] flex justify-center items-center">
                  <Flower2 className="w-8 h-8 text-main animate-bounce" />
                </div>
              ) : (
                <div className="w-full max-w-full overflow-hidden">
                  {metadata.image !== '' && !imageError ? (
                    <img
                      src={metadata.image}
                      alt={metadata.title}
                      className="w-full max-h-[250px] object-cover object-center"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full min-h-[180px] flex justify-center items-center bg-gray-50">
                      <Flower2 className="w-8 h-8 text-main" />
                    </div>
                  )}
                  <div className="w-full py-2 px-4">
                      <div className="flex items-start gap-4 mb-2">
                      {metadata.favicon !== '' && !faviconError ? (
                        <img
                          src={metadata.favicon}
                          alt={`${metadata.title}_favico`}
                          className="w-8 h-8 flex-shrink-0 object-contain"
                          onError={() => setFaviconError(true)}
                        />
                      ) : (
                        <span className="text-black text-xl flex-shrink-0">
                          ꙩ_ꙩ
                        </span>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-black text-sm font-extrabold truncate">
                          {metadata.title}
                        </p>
                        <p className="text-xs font-bold text-sub">
                          {url?.split('//')[1]}
                        </p>
                        <p className="text-xs font-bold text-sub whitespace-normal break-words text-justify mt-2">
                          {metadata.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="min-h-[180px] flex flex-col justify-center items-center">
              <p className="text-2xl text-main">◔̯◔</p>
              <p className="text-main font-bold mt-4">JUST CLICK IT</p>
            </div>
          )}
        </TooltipContent>
      </Tooltip>
    );
  },
);
