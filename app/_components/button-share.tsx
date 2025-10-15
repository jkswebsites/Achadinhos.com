'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { CatalogProducts } from '../constants/catalog-products';

export default function ButtonShare({ name, brand }: CatalogProducts) {
  const handleShareClick = async () => {
    const shareData = {
      title: 'Vim pelo site achadinhos.com',
      text: `${brand} - ${name}`,
    };

    if (window) {
      const text = encodeURIComponent(`${shareData.title} - ${shareData.text}`);
      const whatsappUrl = `https://wa.me/5511941515753/?text=${text}`;
      window.open(whatsappUrl, '_blank');
    }
  };
  return (
    <Button className="mt-8 w-[90%]" onClick={handleShareClick}>
      <FaWhatsapp />
      Comprar
    </Button>
  );
}
