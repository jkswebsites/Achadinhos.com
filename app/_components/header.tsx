import React from 'react';
import Logo from './logo';
import ButtonSheetMenu from './button-sheet-menu';
import NavMenu, { OptionsMenus } from './nav-menu';

const Header = () => {
  return (
    <header className="h-[60px] z-40 bg-neutral-100 w-full fixed shadow-md top-0 px-4 flex items-center justify-between">
      <Logo />
      <NavMenu>
        <OptionsMenus breakpoints="horizontal" />
      </NavMenu>
      <ButtonSheetMenu />
    </header>
  );
};

export default Header;
