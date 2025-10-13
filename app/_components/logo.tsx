import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href={'/'}>
      <h1 className="font-subtitle italic text-neutral-950">achadinhos.com</h1>
    </Link>
  );
};

export default Logo;
