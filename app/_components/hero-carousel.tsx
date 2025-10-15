'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CatalogProducts } from '../constants/catalog-products';

interface CatalogProductsPorps {
  catalogProducts: CatalogProducts[];
}
const lock = false;

const HeroCarousel = ({ catalogProducts }: CatalogProductsPorps) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 8000,
        }),
      ]}
    >
      <CarouselContent className="p-3">
        {catalogProducts.map((item) => (
          <CarouselItem
            key={item.slug}
            className="h-[150px] ml-2 flex items-center justify-between rounded-lg shadow-lg bg-neutral-200"
          >
            <Image
              src={item.img[0]}
              alt={item.name}
              height={120}
              width={120}
              className="scale-105"
            />
            <div className="w-[60%] pl-3 rounded-md  flex  items-center overflow-x-hidden h-[140px] bg-neutral-900">
              <div>
                <h2 className="font-subtitle text-2xl truncate text-neutral-50 font-bold">
                  {item.brand}
                </h2>
                <h3 className="truncate text-sm -mt-2 text-neutral-300 italic">
                  {item.name}
                </h3>
                {lock && (
                  <div className="mt-3">
                    <Button className="w-[150px]">Confira...</Button>
                  </div>
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroCarousel;
