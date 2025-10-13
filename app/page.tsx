import HeroCarousel from './_components/hero-carousel';
import SheetProducts from './_components/sheet-products';
import TitleContent from './_components/title-content';
import { catalogProducts } from './constants/catalog-products';

export default function Home() {
  return (
    <div className="px-2">
      <div className="mt-[70px]">
        <HeroCarousel catalogProducts={catalogProducts} />
      </div>

      <div className="mt-3">
        <TitleContent title="Achadinhos" subtitle="da semana" />

        <div className="mt-2">
          <SheetProducts />
        </div>
      </div>
    </div>
  );
}
