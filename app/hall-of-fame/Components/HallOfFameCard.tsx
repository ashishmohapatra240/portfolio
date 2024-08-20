import React from "react";

interface HallOfFameCardProps {
  image: string;
  title: string;
  content: string;
}

const HallOfFameCard: React.FC<HallOfFameCardProps> = ({
  image,
  title,
  content,
}) => {
  return (
    <div className="w-full sm:w-96 h-80 flex-col justify-start items-start gap-2 inline-flex">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="flex flex-col justify-start items-start gap-2 p-4">
        <div className="text-black text-2xl sm:text-4xl font-bold leading-8 tracking-tightest">
          {title}
        </div>
        <div className="text-black text-base sm:text-lg font-normal tracking-tightest">
          {content}
        </div>
      </div>
    </div>
  );
};

export default HallOfFameCard;
