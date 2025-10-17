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
    images: [{ src: imgLampada, size: 'sm', small: '' }],
    price: 59.99,
    discountPercentage: 0,
    type: 'eletronico',
    category: 'camera',
    description:
      'Camera de Segurança, com sensor de movimento e acompanhamento remoto',
    slug: '/camera-360-panorama',
  },
  {
    name: 'Perfume Lattafa Asad Zanzibar Limited 100ml',
    brand: 'Asad',
    images: [
      { src: imgAsad01, size: 'md', small: 'w-[80px]' },
      { src: imgAsad02, size: 'sm', small: 'w-[40px]' },
      { src: imgAsad03, size: 'full', small: 'h-full' },
      { src: imgAsad04, size: 'full', small: 'h-full' },
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
    images: [{ src: imgSmartWatch, size: 'sm', small: '' }],
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
    images: [{ src: imgBoca, size: 'sm', small: '' }],
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
    images: [{ src: imgKnife, size: 'sm', small: '' }],
    price: 15.99,
    discountPercentage: 0,
    type: 'kitchen',
    category: 'amolador-de-facas',
    description: 'SmartWatch com monitoramento cardiaco',
    slug: '/amolador-faca',
  },
];
