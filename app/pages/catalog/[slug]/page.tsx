import { catalogProducts } from '@/app/constants/catalog-products';
import { notFound } from 'next/navigation';
import React from 'react';
import ShowImage from './_components/show-image';

import ButtonShare from '@/app/_components/button-share';

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
    <div className="px-2">
      <ShowImage images={product.images} title={product.name} />

      <div>
        <h2 className="text-2xl font-bold font-subtitle">{product.name}</h2>
        <h3 className="text-neutral-400 text-lg -mt-3">{product.brand}</h3>
        <span className="text-2xl font-subtitle text-neutral-700 block w-[200px] my-3">
          {product.price}
        </span>
        <ButtonShare {...product} />
        <div>
          <h6 className="text-lg text-neutral-500 font-semibold">Descrição</h6>
          <p className="mt-1 italic text-neutral-500 tracking-wide">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
