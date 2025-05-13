import React from 'react';
interface TitlesContainerProps {
  title: string;
  subtitle: string;
}
const TitlesContainer = ({ title, subtitle }: TitlesContainerProps) => {
  return (
    <div className="lg:ml-24">
      <h2 className="text-3xl  font-serif font-medium text-gray-600 italic">
        {title}
      </h2>
      <h3 className="text-sm -mt-1 text-gray-500">{subtitle}</h3>
    </div>
  );
};

export default TitlesContainer;
