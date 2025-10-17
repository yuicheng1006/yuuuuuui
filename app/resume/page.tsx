import { Resume } from '@/sections/resume/index';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RESUME | Yui Cheng',
  description:
    'Explore Yui Cheng’s resume and portfolio as a Front-End Developer.',
};

export default async function Page() {
  return <Resume />;
}
