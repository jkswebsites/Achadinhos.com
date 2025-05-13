import imgLampada from '@/app/assets/images/eletronics/lampada-camera.png';
import imgSmartWatch from '@/app/assets/images/eletronics/smartwatch.png';
import imgBoca from '@/app/assets/images/make/base-boca.png';
import imgKnife from '@/app/assets/images/kitchen/amolador-faca.png';
import { StaticImageData } from 'next/image';

export interface CatalogProducts {
  name: string;
  img: StaticImageData;
  price: number;
  type: string;
  description: string;
  descont?: {
    off: boolean;
    price: number;
  };
  styles: string;
}

export const catalogProducts: CatalogProducts[] = [
  {
    name: 'Camera de Segurança',
    img: imgLampada,
    price: 59.99,
    type: 'eletronico',
    description:
      'Camera de Segurança, com sensor de movimento e acompanhamento remoto',
    styles: 'mt-3 scale-105 hover:scale-[1.5]',
  },
  {
    name: 'SmartWatch',
    img: imgSmartWatch,
    price: 199.99,
    type: 'eletronico',
    description: 'SmartWatch com monitoramento cardiaco',
    styles: 'mt-[50px] scale-150 hover:scale-[1.8]',
  },
  {
    name: 'Base Boca Rosa',
    img: imgBoca,
    price: 39.99,
    type: 'make',
    description: 'SmartWatch com monitoramento cardiaco',
    styles: 'mt-[40px] scale-150 hover:scale-[1.8]',
  },
  {
    name: 'Amolador de Facas',
    img: imgKnife,
    price: 15.99,
    type: 'kitchen',
    description: 'SmartWatch com monitoramento cardiaco',
    styles: 'mt-[70px] scale-150 hover:scale-[1.8]',
  },
];
