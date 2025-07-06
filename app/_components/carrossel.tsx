import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { CatalogProducts } from '../constants/catalog-products';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { BsCart4 } from 'react-icons/bs';

interface CarouselProps {
  catalogProducts: CatalogProducts[];
}
export function CarouselSpacing({ catalogProducts }: CarouselProps) {
  return (
    <Carousel className="w-full overflow-x-hidden">
      <CarouselContent className="w-[220px]  sm:w-[430px] lg:w-[700px]">
        {catalogProducts.map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/2  lg:basis-1/3">
            <div className="p-1 ">
              <Card className=" w-[210px] h-[300px] p-2">
                <CardContent className=" p-0 h-full flex flex-col justify-between">
                  <div className="w-full  h-[150px] flex items-center justify-end">
                    <div className="w-36 h-36  bg-slate-200 rounded-full">
                      <Image
                        src={product.img}
                        alt={product.name}
                        width={100}
                        height={100}
                        className={`${product.styles} object-cover drop-shadow-lg cursor-pointer`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-sm font-medium truncate text-gray-700 text-center">
                      {product.name}
                    </h2>
                    <p className="text-xs text-gray-500 w-4/5 mx-auto italic h-9 overflow-hidden">
                      {product.description}
                    </p>

                    <div className="w-[95%]  p-1 pr-2 flex items-center justify-between bg-gray-100 shadow-lg rounded-full mx-auto">
                      <span className="text-sm font-medium text-gray-900 tracking-tighter">
                        R$:{product.price}
                      </span>
                      <Button className="text-xs h-7 ">
                        <BsCart4 />
                        Comprar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
