import React from 'react';
import TitlesContainer from './titles-container';
import { CarouselSpacing } from './carrossel';
import { catalogProducts } from '../constants/catalog-products';
import imgBanner from '@/app/assets/images/bg-kitchen.jpg';
import Image from 'next/image';
import Link from 'next/link';
const CatalogProduct = () => {
  return (
    <div className="mx-auto">
      <TitlesContainer
        title="Catálogo"
        subtitle="Confira nosso catálogo abaixo:"
      />

      <div className="mt-5 w-full lg:flex gap-8 ">
        <div className="space-y-4 lg:w-[1380px] ">
          <CarouselSpacing
            catalogProducts={[...catalogProducts, ...catalogProducts]}
          />
          <CarouselSpacing
            catalogProducts={[...catalogProducts, ...catalogProducts]}
          />
        </div>

        <div className="w-[25%] relative lg:flex hidden  bg-slate-200 read-only: rounded-lg shadow-lg shadow-neutral-400 overflow-hidden">
          <Image
            src={imgBanner}
            alt="kitchen"
            width={0}
            height={0}
            className="w-full object-cover  outline-none  border-l-2 border-r-2 border-slate-200"
          />

          <div className="w-full text-center absolute  flex items-end bottom-0 h-[80%] bg-gradient-to-b from-transparent  via-slate-200  to-slate-200 z-30">
            <div className="w-4/5 z-50 mx-auto mb-10">
              <p className="text-2xl  font-[family-name:var(--font-PlaywriteDKLoopet-Regular)]">
                Tudo para sua
              </p>
              <p className=" text-3xl font-[family-name:var(--font-PlaywriteDKLoopet-Regular)]">
                Cozinha
              </p>

              <Link
                href={'/'}
                className="bg-emerald-400 block rounded-lg text-sm py-1 mt-5 text-white"
              >
                Confira
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogProduct;
