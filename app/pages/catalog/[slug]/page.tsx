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
    <div className="p-6">
      <ShowImage images={product.img} title={product.name} />

      <div>
        <h2 className="text-2xl font-bold font-subtitle">{product.name}</h2>
        <h3 className="text-neutral-400 text-lg -mt-3">{product.brand}</h3>
        <span className="text-2xl font-subtitle text-neutral-700 block w-[200px] my-3">
          {product.price}
        </span>
        <p className="mt-4 italic text-neutral-500 tracking-wide">
          {product.description}
        </p>
        <ButtonShare {...product} />
      </div>
    </div>
  );
}
