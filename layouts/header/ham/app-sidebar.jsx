'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import gsap from 'gsap';
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar';

import NavLinks from '@/layouts/header/config-nav';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export default function AppSidebar() {
  const Menuitems = NavLinks();
  const { openMobile } = useSidebar();

  const bounceRef = useRef(null);
  const textRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (bounceRef.current && textRef.current) {
        const tl = gsap.timeline({ repeat: -1 });
        timelineRef.current = tl;

        tl.to(bounceRef.current, {
          y: -65,
          duration: 1,
          ease: 'back.out',
        })
          .to(textRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'expo.out',
          })
          .to({}, { duration: 0.5 }) // <-- 停頓 0.5 秒
          .to(textRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: 'power1.in',
          })
          .to(bounceRef.current, {
            y: 0,
            duration: 1,
            ease: 'back.in',
          });
      }
    }, 500);

    // 清理函數
    return () => {
      clearTimeout(timer);
    };
  }, [openMobile]); // 空依賴陣列確保每次組件掛載時都會執行

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarTrigger
        className={cn(
          'absolute top-0 right-0',
          ' w-15 h-screen border-l-2',
          'flex items-center justify-center',
          'rounded-none',
        )}
      >
        <X className="size-10" />
      </SidebarTrigger>
      <SidebarContent className="p-[12vw_24vw_20vw_10vw] items-center">
        <NavigationMenu viewport={false} className="w-full">
          <NavigationMenuList className="flex-col items-start gap-4 w-full">
            {Menuitems?.map((menuitem, idx) => (
              <NavigationMenuItem key={menuitem?.href} className="w-full">
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'w-full justify-start text-left bg-transparent',
                  )}
                >
                  <Link
                    href={menuitem?.href}
                    className={cn(
                      'relative',
                      idx !== Menuitems.length - 1 &&
                        'before:content-[""] before:absolute before:bottom-0 before:left-[50%] before:translate-x-[-50%] before:w-1/3 before:border-b-2 before:border-black',
                    )}
                    target={menuitem?.icon ? '_blank' : undefined}
                  >
                    {menuitem?.icon ? menuitem.icon : menuitem?.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="absolute bottom-0 w-40 h-40 border-t-3 bg-[#F9F9F9]">
          <Image
            ref={bounceRef}
            src="/isYui.png"
            alt="Logo"
            width={100}
            height={100}
            className="absolute left-[50%] translate-x-[-50%] -z-1"
          />
          <span
            ref={textRef}
            className="absolute -right-3 rotate-20 -top-22 font-bold opacity-0 scale-[0.8]"
          >
            \ Hi there! /
          </span>
        </div>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
