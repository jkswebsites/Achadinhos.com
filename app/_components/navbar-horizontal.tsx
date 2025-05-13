'use client';
import React from 'react';
import { optionsMenu } from '../constants/navbar-options';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbarHorizontal = () => {
  const pathname = usePathname();

  const isActive = (path: string): boolean => path === pathname;
  return (
    <nav className="min-w-[400px] flex items-center max-[900px]:hidden justify-start gap-x-3">
      {optionsMenu.map((menu) => (
        <Link
          key={menu.label}
          href={menu.path}
          className={`${isActive(menu.path) ? 'text-emerald-500' : 'text-neutral-400'} italic  hover:text-emerald-400`}
        >
          {menu.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavbarHorizontal;
