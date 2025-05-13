import React from 'react';
import TitlesContainer from './titles-container';
import { CarouselSpacing } from './carrossel';

const CatalogProduct = () => {
  return (
    <div className="mx-auto">
      <TitlesContainer
        title="Catálogo"
        subtitle="Confira nosso catálogo abaixo:"
      />

      <div className="mt-5">
        <CarouselSpacing />
      </div>
    </div>
  );
};

export default CatalogProduct;
