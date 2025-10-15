'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

interface ShowImageProps {
  images: StaticImageData[];
  title: string;
}
const ShowImage = ({ images, title }: ShowImageProps) => {
  const [image, setImage] = useState<StaticImageData>(images[0]);

  const handleClickChangeImage = (image: StaticImageData) => {
    setImage(image);
  };
  return (
    <div className="flex gap-2">
      <div className="w-4/5 h-[400px] md:w-[450px] flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={250}
          height={250}
          quality={100}
          className="drop-shadow-2xl hover:scale-110 cursor-zoom-in"
        />
      </div>

      <div className="w-[90px] h-[400px] ">
        <div className="flex flex-col gap-2">
          {images.map((src, index) => (
            <div
              key={index}
              className="border overflow-hidden border-blue-700 rounded-lg bg-neutral-200 flex justify-center items-center"
            >
              <Image
                onClick={() => handleClickChangeImage(src)}
                src={src}
                alt={title}
                width={70}
                height={70}
                quality={100}
                className="drop-shadow-2xl hover:scale-110 cursor-zoom-in h-[80px] w-[80px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowImage;
