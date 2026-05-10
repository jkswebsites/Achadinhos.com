import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from '@/app/assets/images/eletronics/lampada-camera.png';
import imgBg from '@/app/assets/images/bg-kitchen.jpg';

interface AsideBannerProps {
  path: string;
  imageMain: StaticImageData;
  imageBG: StaticImageData;
  title: string;
  subtitle: string;
}

const AsideBanner = ({
  path,
  imageMain,
  imageBG,
  subtitle,
  title,
}: AsideBannerProps) => {
  return (
    <aside className="bg-neutral-300 lg:mt-[65px] w-[90%] drop-shadow-xl h-[200px] lg:h-[600px] lg:w-[400px] rounded-lg mx-auto mt-9">
      <Link href={path} className="flex lg:flex-col w-full h-full">
        <div className="w-2/4 h-full lg:w-full lg:h-[80%] drop-shadow-2xl flex relative rounded-lg overflow-hidden justify-center items-center">
          <Image
            src={imageBG}
            alt=""
            width={200}
            height={250}
            className="absolute w-full h-full"
          />
          <Image
            src={imageMain}
            alt=""
            width={120}
            height={120}
            className="z-10 drop-shadow-2xl lg:w-[200px]"
          />
        </div>

        <div className="flex-col w-2/4 lg:mx-auto sm:w-[300px] rounded-md pl-3 justify-center flex lg:h-[30%] h-full">
          <h3 className="font-bold lg:text-center lg:text-3xl text-2xl italic font-title text-neutral-700">
            {title}
          </h3>
          <p className="text-xs text-neutral-500 lg:text-center -mt-1 italic">
            {subtitle}
          </p>

          <div className="bg-neutral-800 mx-auto text-white text-center py-1 rounded-md mt-6 w-4/5 text-xs">
            Confira
          </div>
        </div>
      </Link>
    </aside>
  );
};

export default AsideBanner;
