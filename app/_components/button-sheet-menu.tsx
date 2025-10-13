import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { CgMenuRightAlt } from 'react-icons/cg';
import Logo from './logo';
import NavMenu, { OptionsMenus } from './nav-menu';

const ButtonSheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <CgMenuRightAlt className="text-[25px] text-neutral-500" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription>
            Conheça nossa catégoria de produto e promoções semanais!
          </SheetDescription>
        </SheetHeader>

        <div className="mt-5 pt-4">
          <NavMenu>
            <OptionsMenus />
          </NavMenu>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ButtonSheetMenu;
