import React from "react";
import HallOfFameCard from "./Components/HallOfFameCard";

const hallOfFameData = [
  {
    image: "images/placeholder.png",
    title: "UMO DXS ‘21 Finalist",
    content:
      "Premium quality creative at lean rates for growing businesses. Packaged as subscriptions or bundled projects.",
  },
  {
    image: "images/placeholder.png",
    title: "Project X Award",
    content:
      "Outstanding achievement in design and innovation for the Project X initiative.",
  },
];

const HallOfFame: React.FC = () => {
  return (
    <div className="overflow-x-hidden px-4 md:px-10 py-8">
      <div className="flex flex-col items-center justify-center w-full max-w-screen-lg mx-auto text-left pt-24 pb-8">
        <h1 className="text-4xl md:text-5xl font-light tracking-tightest">
          hall of <span className="font-bold">fame</span>
          <span className="ml-1 w-3 h-3 md:w-4 md:h-4 bg-black inline-block rounded-full" />
        </h1>
        <p className="text-xl text-gray-600 mt-4 tracking-tightest text-center max-w-2xl">
          Premium quality creative at lean rates for growing businesses.
          Packaged as subscriptions or bundled projects.
        </p>
      </div>

      <hr className="border-t border-[#BABABA] w-full max-w-7xl mx-auto my-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center max-w-7xl mx-auto">
        {hallOfFameData.map((item, index) => (
          <HallOfFameCard
            key={index}
            image={item.image}
            title={item.title}
            content={item.content}
          />
        ))}
        {hallOfFameData.map((item, index) => (
          <HallOfFameCard
            key={`dup-${index}`}
            image={item.image}
            title={item.title}
            content={item.content}
          />
        ))}
        {hallOfFameData.map((item, index) => (
          <HallOfFameCard
            key={`dup2-${index}`}
            image={item.image}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default HallOfFame;
