import imgLampada from '@/app/assets/images/eletronics/lampada-camera.png';
import imgSmartWatch from '@/app/assets/images/eletronics/smartwatch.png';
import imgBoca from '@/app/assets/images/make/base-boca.png';
import imgKnife from '@/app/assets/images/kitchen/amolador-faca.png';
import { StaticImageData } from 'next/image';
//Perfume Asad
import imgAsad01 from '@/app/assets/images/perfumes/asad-lattafa-1-removebg-preview.png';
import imgAsad02 from '@/app/assets/images/perfumes/asad-lattafa-2-removebg-preview.png';
import imgAsad03 from '@/app/assets/images/perfumes/asad-lattafa-3.png';
import imgAsad04 from '@/app/assets/images/perfumes/asad-lattafa-4.png';

export interface Images {
  src: StaticImageData;
  size: 'sm' | 'md' | 'full';
  small: string;
  banner?: string;
}
export interface CatalogProducts {
  name: string;
  images: Images[];
  price: number;
  brand: string;
  type: string;
  category: string;
  description: string;
  discountPercentage: number;
  slug: string;
}

export const catalogProducts: CatalogProducts[] = [
  {
    name: 'Camera de Segurança',
    brand: 'Panorama',
    images: [
      {
        src: imgLampada,
        size: 'md',
        small: 'w-[60px]',
        banner: 'sm:w-[150px]  sm:top-5 sm:right-[150px] top-8 right-[40px]',
      },
    ],
    price: 59.99,
    discountPercentage: 0,
    type: 'eletronico',
    category: 'camera',
    description:
      'Camera de Segurança, com sensor de movimento e acompanhamento remoto',
    slug: '/camera-360-panorama',
  },
  {
    name: 'Lattafa Asad Zanzibar Limited 100ml',
    brand: 'Asad',
    images: [
      {
        src: imgAsad01,
        size: 'md',
        small: 'w-[80px]',
        banner:
          'sm:w-[200px] sm:top-10 top-[70px] w-[300px] right-[20px] sm:right-[100px] ',
      },
      { src: imgAsad02, size: 'sm', small: 'w-[32px]' },
      { src: imgAsad03, size: 'full', small: 'h-full w-full' },
      { src: imgAsad04, size: 'full', small: 'h-full w-full' },
    ],
    price: 183.5,
    discountPercentage: 0,
    type: 'perfume',
    category: 'beleza',
    description: `Perfume Lattafa Asad Zanzibar Limited 100mlPerfume Lattafa Asad Zanzibar Limited 100ml
                Perfume Lattafa Asad Zanzibar Limited 100ml
Perfume Lattafa Asad Zanzibar Limited 100ml
Perfume Lattafa Asad Zanzibar Limited 100ml
Novo  |  +100 vendidos
Perfume Lattafa Asad Zanzibar Limited 100ml
5.0
Avaliação 5.0 de 5. 44 opiniões.
(44)
Adicionar aos favoritos
R$ 183,50

O que você precisa saber sobre este produto
Volume da unidade: 100 mL.
Eau de parfum de longa duração, fixação superior a 8 horas.
Notas olfativas de baunilha, incenso e patchouli.
Família olfativa aromático fougère.
Design moderno e sofisticado com detalhes dourados.
Cruelty-free e vegano.
Edição limitada que garante exclusividade.`,
    slug: '/perfume-lattafa-asad-zanzibar-limited',
  },
  {
    name: 'SmartWatch',
    images: [
      {
        src: imgSmartWatch,
        size: 'md',
        small: '',
        banner:
          'sm:w-[200px] sm:top-16 top-20 w-[200px] sm:right-[100px] right-[40px]',
      },
    ],
    brand: 'Panorama',
    price: 199.99,
    discountPercentage: 0,
    type: 'eletronico',
    category: 'smartWatch',
    description: 'SmartWatch com monitoramento cardiaco',
    slug: '/smartwatch',
  },
  {
    name: 'Base Boca Rosa',
    brand: 'Boca Rosa',
    images: [
      {
        src: imgBoca,
        size: 'sm',
        small: '',
        banner: 'sm:w-[250px] sm:top-5 top-[80px] sm:right-[60px] right-[35px]',
      },
    ],
    price: 39.99,
    discountPercentage: 0,
    type: 'makeup',
    category: 'base',
    description: 'SmartWatch com monitoramento cardiaco',
    slug: '/base-boca-rosa',
  },
  {
    name: 'Amolador de Facas',
    brand: 'Panorama',
    images: [
      {
        src: imgKnife,
        size: 'full',
        small: 'w-[150px]',
        banner:
          'sm:w-[400px] w-[200px] h-[80px] sm:top-[120px] top-[140px] sm:right-[60px] right-[30px]',
      },
    ],
    price: 15.99,
    discountPercentage: 0,
    type: 'kitchen',
    category: 'amolador-de-facas',
    description: 'SmartWatch com monitoramento cardiaco',
    slug: '/amolador-faca',
  },
];
