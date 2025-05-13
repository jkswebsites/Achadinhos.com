import React from 'react';
import imgLampada from '@/app/assets/images/eletronics/lampada-camera.png';
import Image from 'next/image';
const Hero = () => {
  return (
    <div className=" flex shadow-md gap-x-4 items-center  rounded-lg sm:w-[600px] mx-auto h-52 bg-emerald-300 overflow-hidden">
      <div className="w-40 overflow-hidden -ml-10 h-40 bg-neutral-100 rounded-full">
        <Image
          src={imgLampada}
          alt="camera de segurança"
          width={110}
          height={110}
          className="ml-8 block -mt-3 object-contain drop-shadow-xl"
        />
      </div>

      <div className="mr-5">
        <h2 className="text-2xl sm:text-3xl italic text-white font-[family-name:var(--font-PlaywriteDKLoopet-Regular)]">
          Achadinhos.com
        </h2>
        <p className="text-xs -mt-1 sm:text-sm text-gray-500">
          Variedade e preço baixo é aqui!
        </p>
      </div>
    </div>
  );
};

export default Hero;
