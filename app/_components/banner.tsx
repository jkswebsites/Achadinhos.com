import { Button } from '@/components/ui/button';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BannerProps {
  title: string;
  subtitle: string;
  img: StaticImageData;
  link: string;
}
const Banner = ({ title, subtitle, img, link }: BannerProps) => {
  return (
    <div className="w-[95%] lg:w-[950px] overflow-hidden flex items-center gap-4 px-5 rounded-lg shadow-2xl ml-4 h-[200px] bg-neutral-900">
      <div className="w-[40%] flex items-center justify-center">
        <Image
          src={img}
          alt={title}
          quality={100}
          className="h-[150px] w-[140px] drop-shadow-lg"
        />
      </div>
      <div>
        <h4 className="text-3xl font-subtitle text-neutral-200 font-semibold">
          {subtitle}
        </h4>
        <h3 className="text-neutral-400 -mt-2 italic text-xs">{title}</h3>
        <Button variant={'outline'} className="mt-3 w-[180px]">
          <Link href={link}>Confira</Link>
        </Button>
      </div>
    </div>
  );
};

export default Banner;
