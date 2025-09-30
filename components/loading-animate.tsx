import { cn } from '@/lib/utils';
import Image from 'next/image';

const groups = ['angry', 'sad', 'happy'];

export const LoadingAnimate = () => {
  return (
    <div className="w-full min-h-100vh flex justify-center items-center">
      <div className="flex lg:gap-6 gap-4 loading-group">
        {groups?.map((group) => (
          <Image
            key={group}
            width={100}
            height={100}
            src={`/${group}.png`}
            alt={`${group} Yui`}
            className={cn(
              'md:max-w-[100px] md:max-h-[77px]',
              'min-w-[56px] min-h-[45px]',
              'w-[6vw] h-[4.6vw] aspect-square',
            )}
          />
        ))}
      </div>
    </div>
  );
};
