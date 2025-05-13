import Link from 'next/link';
import React from 'react';
import { CiMenuBurger } from 'react-icons/ci';

const Header = () => {
  return (
    <header className="w-full h-16 border-b border-zinc-100 p-5 flex items-center justify-between">
      <div className="font-[family-name:var(--font-PlaywriteDKLoopet-Regular)]">
        <Link className="text-sm text-zinc-400" href={'/'}>
          Achadinhos.com
        </Link>
      </div>

      <div className="text-zinc-400 mr-7">
        <CiMenuBurger className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
