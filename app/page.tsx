import AsideBanner from './_components/aside-banner';
import Banner from './_components/banner';
import HeroCarousel from './_components/hero-carousel';
import SheetProducts from './_components/sheet-products';
import TitleContent from './_components/title-content';
import { catalogProducts } from './constants/catalog-products';
import guiaOnlineImg from '@/app/assets/images/phone-guia-online.png';
import img from '@/app/assets/images/eletronics/lampada-camera.png';
import imgBg from '@/app/assets/images/bg-kitchen.jpg';
export default function Home() {
  return (
    <div className="w-full h-screen">
      <main>
        <div className="mt-[70px]">
          <HeroCarousel catalogProducts={catalogProducts} />
        </div>

        <div className="mt-10 px-4 lg:flex lg:gap-2 ">
          <div className="space-y-8">
            <div>
              <TitleContent title="Achadinhos" subtitle="da semana" />

              <div className="mt-2">
                <SheetProducts catalogProducts={catalogProducts} />
              </div>
            </div>

            <div className="my-6">
              <Banner
                title={'de Empregos'}
                subtitle={'Guia Online'}
                img={guiaOnlineImg}
                link={`https://guia-online-de-empregos.vercel.app/`}
              />
            </div>

            <div className="">
              <TitleContent title="Achadinhos" subtitle="da semana" />

              <div className="mt-2">
                <SheetProducts catalogProducts={catalogProducts} />
              </div>
            </div>
          </div>
          <AsideBanner
            path="/"
            imageMain={img}
            imageBG={imgBg}
            title="Novidades"
            subtitle="Câmera Panorâmica"
          />
        </div>
      </main>
    </div>
  );
}
