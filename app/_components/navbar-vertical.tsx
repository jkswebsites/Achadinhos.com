'use client';
import React from 'react';
import { optionsMenu } from '../constants/navbar-options';
import { SheetClose } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string): boolean => path === pathname;
  return (
    <nav className="w-full mt-11">
      {optionsMenu.map((option, index) => (
        <SheetClose key={index} asChild>
          <Link
            href={option.path}
            className={`${isActive(option.path) && 'text-neutral-400'} flex items-center gap-x-4 hover:text-emerald-400 p-3 rounded-lg`}
          >
            {<option.Icon />}
            <span className="font-[family-name:var(--font-PlaywriteDKLoopet-Regular)]">
              Home
            </span>
          </Link>
        </SheetClose>
      ))}
    </nav>
  );
};

export default Navbar;
