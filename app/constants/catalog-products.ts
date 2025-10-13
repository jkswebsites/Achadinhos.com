import imgLampada from '@/app/assets/images/eletronics/lampada-camera.png';
import imgSmartWatch from '@/app/assets/images/eletronics/smartwatch.png';
import imgBoca from '@/app/assets/images/make/base-boca.png';
import imgKnife from '@/app/assets/images/kitchen/amolador-faca.png';
import { StaticImageData } from 'next/image';

export interface CatalogProducts {
  name: string;
  img: StaticImageData;
  price: number;
  brand: string;
  type: string;
  description: string;
  discountPercentage: number;
  slug: string;
  styles: string;
}

export const catalogProducts: CatalogProducts[] = [
  {
    name: 'Camera de Segurança',
    brand: 'Panorama',
    img: imgLampada,
    price: 59.99,
    discountPercentage: 0,
    type: 'eletronico',
    description:
      'Camera de Segurança, com sensor de movimento e acompanhamento remoto',
    slug: '/camera-360-panorama',
    styles: 'mt-3 scale-105 hover:scale-[1.5]',
  },
  {
    name: 'SmartWatch',
    img: imgSmartWatch,
    brand: 'Panorama',
    price: 199.99,
    discountPercentage: 0,
    type: 'eletronico',
    description: 'SmartWatch com monitoramento cardiaco',
    slug: '/smartwatch',
    styles: 'mt-[50px] scale-150 hover:scale-[1.8]',
  },
  {
    name: 'Base Boca Rosa',
    brand: 'Boca Rosa',
    img: imgBoca,
    price: 39.99,
    discountPercentage: 0,
    type: 'make',
    description: 'SmartWatch com monitoramento cardiaco',
    slug: '/base-boca-rosa',
    styles: 'mt-[40px] scale-150 hover:scale-[1.8]',
  },
  {
    name: 'Amolador de Facas',
    brand: 'Panorama',
    img: imgKnife,
    price: 15.99,
    discountPercentage: 0,
    type: 'kitchen',
    description: 'SmartWatch com monitoramento cardiaco',
    slug: '/amolador-faca',
    styles: 'mt-[70px] scale-150 hover:scale-[1.8]',
  },
];
