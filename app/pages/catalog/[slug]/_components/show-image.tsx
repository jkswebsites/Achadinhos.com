import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ShowImageProps {
  img: StaticImageData;
  title: string;
}
const ShowImage = ({ img, title }: ShowImageProps) => {
  return (
    <div className="flex gap-2">
      <div className="w-4/5 h-[400px] md:w-[450px] flex items-center justify-center">
        <Image
          src={img}
          alt={title}
          width={250}
          height={250}
          quality={100}
          className="drop-shadow-2xl hover:scale-110 cursor-zoom-in"
        />
      </div>
      <div className="w-[90px] h-[400px] ">
        <div className="border border-blue-700 rounded-lg bg-neutral-200">
          <Image
            src={img}
            alt={title}
            width={250}
            height={250}
            quality={100}
            className="drop-shadow-2xl hover:scale-110 cursor-zoom-in"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowImage;
