'use client';

import { Button } from '@/components/ui/button';

export const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className="text-white rounded-none md:px-8 px-6 py-3 font-bold cursor-pointer"
      aria-label="Scroll to top"
    >
      TOP
    </Button>
  );
};
