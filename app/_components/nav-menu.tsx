'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { tv } from 'tailwind-variants';

interface OptionsMenus {
  breakpoints?: 'vertical' | 'horizontal';
}
const navmenu = tv({
  base: 'font-paragraph flex font-extralight tracking-wide text-md',
  variants: {
    breakpoints: {
      vertical: 'pl-3 flex-col gap-3',
      horizontal: 'flex-row mr-[100px] gap-x-[15px] hidden lg:flex',
    },
  },
  defaultVariants: {
    breakpoints: 'vertical',
  },
});
const options = [
  { name: 'Home', path: '/' },
  { name: 'Celular', path: '/cellphones' },
  { name: 'Maquiagem', path: '/maquiagem' },
];

export const OptionsMenus = ({ breakpoints = 'vertical' }: OptionsMenus) => {
  const pathname = usePathname();

  const isActive = (link: string) => {
    return pathname === link;
  };
  return (
    <div className={navmenu({ breakpoints })}>
      {options.map((option) => (
        <Link
          key={option.name}
          href={option.path}
          className={`${isActive(option.path) ? 'text-neutral-950 scale-105' : 'text-neutral-400 italic'} hover:text-neutral-800 font-bold`}
        >
          {option.name}
        </Link>
      ))}
    </div>
  );
};
const NavMenu = ({ children }: { children: ReactNode }) => {
  return <nav>{children}</nav>;
};

export default NavMenu;
