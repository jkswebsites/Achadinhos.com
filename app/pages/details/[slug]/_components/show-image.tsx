'use client';
import { Images } from '@/app/constants/catalog-products';
import Image from 'next/image';
import React, { useState } from 'react';
import { tv } from 'tailwind-variants';

interface ShowImageProps {
  images: Images[];
  title: string;
}
export const settingImage = tv({
  base: 'drop-shadow-2xl  hover:scale-110 cursor-zoom-in',
  variants: {
    size: {
      sm: 'w-[180px]',
      md: 'w-[300px]',
      full: 'w-full rounded-lg',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});
const ShowImage = ({ images, title }: ShowImageProps) => {
  const [image, setImage] = useState<Images>({
    src: images[0].src,
    size: images[0].size,
    small: images[0].small,
  });

  const handleClickChangeImage = ({ src, size }: Images) => {
    setImage({ src, size, small: '' });
  };
  return (
    <div className="flex flex-col gap-y-6">
      <div className="w-[90%] mb-14 mx-auto h-[400px] md:w-[450px] flex items-center justify-center">
        <Image
          src={image.src}
          alt={title}
          quality={100}
          className={settingImage({ size: image.size })}
        />
      </div>

      <div className="my-4 mx-auto w-[95%]">
        <div className="flex gap-2 overflow-auto ">
          {images.map((_image, index) => (
            <div
              key={index}
              className={`${_image.src === image.src ? 'border-blue-700' : 'border-neutral-400'} border w-[100px] h-[100px]  rounded-lg bg-neutral-200 flex justify-center items-center overflow-hidden`}
            >
              <Image
                onClick={() => handleClickChangeImage(_image)}
                src={_image.src}
                alt={title}
                quality={100}
                className={`${_image.small} drop-shadow-2xl hover:scale-110 cursor-zoom-in h-[80px] w-[80px]`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowImage;
