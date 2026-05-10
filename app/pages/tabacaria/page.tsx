import ItemsGrid from '@/app/_components/items-grid';
import { productsTabacaria } from '@/app/constants/tabacaria';
import React from 'react';

const TabacariaHomePage = () => {
  return (
    <div className="h-screen w-full mt-20">
      <ItemsGrid products={productsTabacaria} />
    </div>
  );
};

export default TabacariaHomePage;
