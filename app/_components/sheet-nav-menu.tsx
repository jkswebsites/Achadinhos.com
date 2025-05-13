import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { CiMenuBurger } from 'react-icons/ci';

import NavbarVertical from './navbar-vertical';
import { BiShoppingBag } from 'react-icons/bi';

const SheetNavMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuBurger className="cursor-pointer text-zinc-400 min-[900px]:hidden" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex  items-center gap-1 text-start  text-zinc-700 italic font-[family-name:var(--font-PlaywriteDKLoopet-Regular)]">
            <BiShoppingBag className="text-2xl" />
            Achadinhos.com
          </SheetTitle>
          <SheetDescription className="text-start text-xs italic">
            Navegue pelo nossos menu de produtos, tudo para sua casa em um preço
            acessível.
          </SheetDescription>
        </SheetHeader>
        <NavbarVertical />
      </SheetContent>
    </Sheet>
  );
};

export default SheetNavMenu;
