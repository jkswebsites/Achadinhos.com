'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { CatalogProducts } from '../constants/catalog-products';

export default function ButtonShare({ name, brand }: CatalogProducts) {
  const handleShareClick = async () => {
    if (navigator) {
      await navigator.share({
        title: `${brand}`,
        text: `${name} - ${brand}`,
      });
    }
  };
  return (
    <Button className="mt-8 w-[90%]" onClick={handleShareClick}>
      <FaWhatsapp />
      Comprar
    </Button>
  );
}
