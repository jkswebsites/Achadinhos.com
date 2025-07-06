import React from 'react';
interface TitlesContainerProps {
  title: string;
  subtitle: string;
}
const TitlesContainer = ({ title, subtitle }: TitlesContainerProps) => {
  return (
    <div>
      <h2 className="text-3xl font-serif font-medium text-gray-600 italic lg:text-5xl">
        {title}
      </h2>
      <h3 className="text-sm -mt-1 text-gray-500 lg:mt-0">{subtitle}</h3>
    </div>
  );
};

export default TitlesContainer;
