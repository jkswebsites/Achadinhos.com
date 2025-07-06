import Image from 'next/image';
import CatalogProduct from './_components/catalog-product';
import Hero from './_components/hero';
import imgBanner from '@/app/assets/images/bg-kitchen.jpg';
import imgKitchen from '@/app/assets/images/bg-kitchen_02.jpg';
import imgBatedeira from '@/app/assets/images/kitchen/batedeira.png';
import TitlesContainer from './_components/titles-container';

export default function Home() {
  return (
    <div className="mt-20 space-y-5 w-full h-full p-1 px-2 lg:pl-8">
      <Hero image={imgBanner} />
      <CatalogProduct />

      <div className="lg:w-4/5 w-full py-6 mb-4">
        <TitlesContainer
          title="Catálogo"
          subtitle="Confira nosso catálogo abaixo:"
        />

        <div className=" mx-auto h-[300px] lg:h-[500px] mt-7">
          <div className="w-[70%] lg:w-full h-full mx-auto relative flex justify-center items-cente">
            <div className="w-[100%] h-full relative flex justify-center items-cente overflow-hidden">
              <Image
                src={imgKitchen}
                alt="Cozinha"
                width={0}
                height={0}
                className="w-full h-[700px] brightness-75 drop-shadow-lg"
              />
            </div>
            <Image
              src={imgBatedeira}
              alt="Cozinha"
              width={0}
              height={0}
              className="brightness-75 absolute top-[50%] scale-150"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
