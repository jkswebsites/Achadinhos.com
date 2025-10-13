import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import React from 'react';
import { catalogProducts } from '../constants/catalog-products';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const SheetProducts = () => {
  return (
    <Carousel>
      <CarouselContent className="h-[250px]">
        {catalogProducts.map((product) => (
          <CarouselItem key={product.slug} className="basis-[180px]">
            <div className="w-full h-[250px] p-2 bg-gray-200 rounded-lg shadow-lg">
              <div className="h-[120px] flex justify-center items-center hover:scale-125 cursor-zoom-in">
                <Image
                  src={product.img}
                  alt={product.name}
                  className="object-cover drop-shadow-2xl "
                  width={100}
                  quality={100}
                />
              </div>

              <div className="mt-2">
                <h2 className="truncate font-semibold font-subtitle">
                  {product.name}
                </h2>
                <h3 className="text-neutral-500 -mt-2 italic">
                  {product.brand}
                </h3>
              </div>
              <Button className="w-[90%] mx-auto mt-3" asChild>
                <Link href={`/pages/catalog/${product.slug}`}>+ Detalhes</Link>
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SheetProducts;
