import { Button } from '@/components/ui/button';
import man from '@/app/assets/images/man.jpg';
import React from 'react';
import Image from 'next/image';
import { CatalogProducts } from '../constants/catalog-products';
import { currencyFormat } from '../helpers/currency-format';
import Link from 'next/link';

const BannerDetails = ({
  brand,
  name,
  price,
  description,
  images,
  slug,
}: CatalogProducts) => {
  const t = false;
  return (
    <div className="w-full overflow-hidden h-[280px] flex bg-gradient-to-l from-neutral-400 to-neutral-300 rounded-lg  shadow-lg shadow-neutral-400 mx-auto">
      <div className="w-[60%] h-full py-3">
        <div className="h-[250px] flex items-center justify-center">
          <div className="w-4/6 mx-auto">
            <h4 className="font-paragraph truncate sm:text-xl font-light text-neutral-800">
              {name}
            </h4>

            <h2 className="-mt-2 text-2xl sm:text-4xl font-subtitle font-extrabold truncate">
              {brand}
            </h2>
            <p className="text-neutral-500 text-xs -tracking-tighter leading-5 py-2 h-[70px] overflow-hidden">
              {description}
            </p>

            <div className="w-4/5 flex gap-4 justify-between">
              <span className="text-3xl text-neutral-900 font-subtitle font-bold">
                {currencyFormat(price)}
              </span>
            </div>
            <Button className="mt-4 w-[90%]">
              <Link href={`/pages/details/${slug}`}>Comprar</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-[40%] h-full bg-neutral-800 relative">
        <Image
          src={images[0].src}
          alt={name}
          className={`absolute hover:scale-110 z-30 ${images[0].banner}`}
        />
        <div className="w-full h-full overflow-hidden z-10">
          {t && (
            <Image
              src={man}
              alt="SmartWatch"
              className="w-full h-full scale-150"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerDetails;
