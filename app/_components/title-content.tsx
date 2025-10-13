import React from 'react';
interface TitleContentProps {
  title: string;
  subtitle: string;
}

const TitleContent = ({ title, subtitle }: TitleContentProps) => {
  return (
    <div>
      <h2 className="text-2xl font-black font-subtitle text-neutral-700">
        {title}
      </h2>
      <h3 className="font-title italic text-neutral-500 -mt-2">{subtitle}</h3>
    </div>
  );
};

export default TitleContent;
