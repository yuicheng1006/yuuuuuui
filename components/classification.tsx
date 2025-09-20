import React from 'react';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

export const Classification = React.memo(({ tags }: { tags: string[] }) => {
  return (
    <ul
      className={cn(
        'flex gap-2',
        'pb-[0.5vw] border-b-2',
        'overflow-scroll',
        'pt-2',
      )}
    >
      {tags.map((tag) => (
        <li key={tag} className="relative">
          <Button variant="link" className="font-extrabold">
            {tag}
          </Button>
          <span className="absolute -right-2 -top-1 text-xs">(123)</span>
        </li>
      ))}
    </ul>
  );
});
