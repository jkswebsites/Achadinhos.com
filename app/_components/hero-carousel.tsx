'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import { CatalogProducts } from '../constants/catalog-products';
import BannerDetails from './banner-details';

interface CatalogProductsPorps {
  catalogProducts: CatalogProducts[];
}

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
          <CarouselItem key={item.slug} className="h-[270px] w-[95%]">
            <BannerDetails {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroCarousel;
