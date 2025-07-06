import Link from 'next/link';
import React from 'react';
import SheetNavMenu from './sheet-nav-menu';
import NavbarHorizontal from './navbar-horizontal';

const Header = () => {
  return (
    <header className="w-full z-50 bg-slate-100 fixed top-0 h-16 border-b shadow-md border-zinc-200 p-5 flex items-center justify-between">
      <div className="font-[family-name:var(--font-PlaywriteDKLoopet-Regular)]">
        <Link className="text-sm text-zinc-900" href={'/'}>
          Achadinhos.com
        </Link>
      </div>

      <NavbarHorizontal />
      <div>
        <SheetNavMenu />
      </div>
    </header>
  );
};

export default Header;
