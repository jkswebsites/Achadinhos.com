import React from 'react';
import { ITabacaria } from '../constants/tabacaria';
import { currencyFormat } from '../helpers/currency-format';
import Image from 'next/image';
import ButtonShare from './button-share';
interface ItemsGridProps {
  products: ITabacaria[];
}
const ItemsGrid = ({ products }: ItemsGridProps) => {
  return (
    <div className="space-y-2 lg:flex lg:w-[500px] ml-3">
      {products.map((item) => (
        <div
          key={item.title}
          className="w-[200px] h-[350px] overflow-hidden sm:w-[250px] mx-auto rounded-sm"
        >
          <div className="w-full h-[250px] flex justify-center items-center">
            <Image
              src={item.image}
              alt={item.title}
              width={150}
              height={150}
              className="drop-shadow-lg"
            />
          </div>

          <div className="w-4/5 mx-auto">
            <div>
              <p className="text-xs text-center text-neutral-600">
                {item.title}
              </p>
            </div>
            <div>
              <p className="font-bold text-neutral-500 pl-2">
                {currencyFormat(item.price)}
              </p>
            </div>
          </div>
          <ButtonShare name={item.title} brand={'Anota ai:'} />
        </div>
      ))}
    </div>
  );
};

export default ItemsGrid;
