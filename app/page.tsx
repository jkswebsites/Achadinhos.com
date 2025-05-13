import CatalogProduct from './_components/catalog-product';
import Hero from './_components/hero';

export default function Home() {
  return (
    <div className="mt-20 space-y-5 w-full h-full p-1 px-2">
      <Hero />
      <CatalogProduct />
    </div>
  );
}
