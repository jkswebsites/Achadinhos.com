import { catalogProducts } from '@/app/constants/catalog-products';
import { notFound } from 'next/navigation';
import React from 'react';
import ShowImage from './_components/show-image';

import ButtonShare from '@/app/_components/button-share';
import { currencyFormat } from '@/app/helpers/currency-format';
import SheetProducts from '@/app/_components/sheet-products';

interface CatalogPageProps {
  params: {
    slug: string;
  };
}
export default function CatalogPage({ params }: CatalogPageProps) {
  const product = catalogProducts.find(
    (item) => item.slug === `/${params.slug}`,
  );
  if (!product) return notFound();

  return (
    <div className="px-2 lg:pt-[150px]">
      <div className="lg:flex">
        <div className="lg:w-[50%]">
          <ShowImage images={product.images} title={product.name} />
        </div>

        <div className="lg:w-[40%]">
          <h2 className="text-2xl font-bold font-subtitle">{product.name}</h2>
          <h3 className="text-neutral-400 text-lg -mt-3">{product.brand}</h3>
          <span className="text-2xl font-subtitle text-neutral-700 block w-[200px] my-3">
            {currencyFormat(product.price)}
          </span>
          <ButtonShare {...product} />
          <div>
            <h6 className="text-lg text-neutral-500 font-semibold">
              Descrição
            </h6>
            <p className="mt-1 italic text-neutral-500 tracking-wide">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="my-6 font-bold text-2xl font-subtitle">
          Itens relacionados:
        </h3>

        <SheetProducts
          catalogProducts={catalogProducts.filter(
            (item) => item.slug !== params.slug,
          )}
        />
      </div>
    </div>
  );
}
