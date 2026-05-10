import LM from '@/app/assets/images/tabacaria/cigarro_LM-removebg-preview.png';
import Rothmans from '@/app/assets/images/tabacaria/cigarro_Rothmans-removebg-preview.png';
import { StaticImageData } from 'next/image';

export interface ITabacaria {
  title: string;
  price: number;
  quantity: number;
  image: StaticImageData;
}
export const productsTabacaria: ITabacaria[] = [
  {
    title: 'Cigarro LM First Cut Blue Box',
    price: 8.75,
    quantity: 10,
    image: LM,
  },
  {
    title: 'Cigarro Rothmans Global Blue ',
    price: 8.75,
    quantity: 10,
    image: Rothmans,
  },
];
