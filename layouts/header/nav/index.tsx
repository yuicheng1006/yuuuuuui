'use client';

import * as React from 'react';
import Link from 'next/link';
import NavLinks from '../config-nav';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function Nav() {
  const Menuitems = NavLinks();

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {Menuitems?.map((menuitem, idx) => (
          <NavigationMenuItem key={menuitem?.href}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                href={menuitem?.href}
                target={menuitem?.icon ? '_blank' : undefined}
              >
                {menuitem?.icon ? menuitem.icon : menuitem?.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
