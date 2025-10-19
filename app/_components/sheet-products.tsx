import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import React from 'react';
import { CatalogProducts } from '../constants/catalog-products';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
interface SheetProductsProps {
  catalogProducts: CatalogProducts[];
}
const SheetProducts = ({ catalogProducts }: SheetProductsProps) => {
  return (
    <Carousel>
      <CarouselContent className="h-fit">
        {catalogProducts.map((product) => (
          <CarouselItem key={product.slug} className="basis-[250px] h-fit py-2">
            <div className="w-full h-[350px] p-2 bg-neutral-300 rounded-lg shadow-lg flex items-center justify-around flex-col">
              <div className="h-[180px] w-full flex justify-center items-center ">
                <Image
                  src={product.images[0].src}
                  alt={product.name}
                  className="object-cover drop-shadow-2xl w-[150px]"
                  quality={100}
                />
              </div>

              <div className="mt-2 w-4/5 mx-auto">
                <h2 className="truncate font-semibold font-subtitle">
                  {product.name}
                </h2>
                <h3 className="text-neutral-500 -mt-2 italic">
                  {product.brand}
                </h3>

                <Button className="w-[90%] mx-auto mt-3" asChild>
                  <Link href={`/pages/details/${product.slug}`}>
                    + Detalhes
                  </Link>
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SheetProducts;
