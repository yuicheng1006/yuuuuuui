import { MenuItems } from '@/types/types';
import { Instagram } from 'lucide-react';

const NavLinks = (): MenuItems[] => {
  return [
    {
      title: 'ABOUT',
      href: '/about',
    },
    {
      title: 'WORK',
      href: '/work',
    },
    {
      title: 'HIKE',
      href: '/hike',
    },
    // {
    //   title: 'WRITTINGS',
    //   href: '/writtings',
    // },
    {
      title: 'INSTAGRAM',
      href: 'https://www.instagram.com/uwu_ueee/',
      icon: <Instagram className="h-5 w-5" color="#000" />,
    },
  ];
};

export default NavLinks;
