import { catalogProducts } from '@/app/constants/catalog-products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
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
      <div className="flex gap-2">
        <div className="w-4/5 h-[400px]">
          <Image
            src={product.img}
            alt={product.name}
            width={250}
            height={250}
            quality={100}
            className="drop-shadow-2xl hover:scale-110 cursor-zoom-in"
          />
        </div>
        <div className="w-[90px] h-[400px] bg-red-400"></div>
      </div>
    </div>
  );
}
