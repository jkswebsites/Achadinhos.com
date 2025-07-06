import React from 'react';
import imgLampada from '@/app/assets/images/eletronics/lampada-camera.png';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface HeroProps {
  image: StaticImport;
}
const Hero = ({ image }: HeroProps) => {
  return (
    <div className="bg-slate-200 relative flex shadow-md gap-x-4 items-center  rounded-lg sm:w-[600px] lg:w-[900px] lg:ml-5 mx-auto h-52 overflow-hidden">
      <div className="w-40 -ml-10 shadow-lg h-40 bg-gray-100  rounded-full">
        <Image
          src={imgLampada}
          alt="camera de segurança"
          width={110}
          height={110}
          className="ml-8 scale-125 block -mt-3 object-contain drop-shadow-xl"
        />
      </div>

      <div className="mr-5 z-40">
        <h2 className="text-2xl  sm:text-3xl italic text-neutral-800 font-[family-name:var(--font-PlaywriteDKLoopet-Regular)]">
          Achadinhos.com
        </h2>
        <p className="text-xs -mt-1 sm:text-sm text-gray-600">
          Variedade e preço baixo é aqui!
        </p>
      </div>
      <div className="absolute bg-slate-200 w-[40%] lg:w-[50%] h-full right-0 overflow-hidden ">
        <div className="absolute w-full h-full bg-gradient-to-r from-slate-200 via-transparent to-slate-200 z-30"></div>
        <Image
          src={image}
          alt="kitchen"
          width={0}
          height={0}
          className="w-full h-full object-cover relative outline-none  border-l-2 border-r-2 border-slate-200"
        />
      </div>
    </div>
  );
};

export default Hero;
