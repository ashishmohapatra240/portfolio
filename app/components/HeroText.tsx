import React from "react";

const HeroText: React.FC = () => {
  return (
    <div className="w-full max-w-full md:max-w-2xl h-auto relative">
      <div className="leading-tight">
        <span className="text-black text-5xl md:text-5xl font-normal font-['Helvetica'] tracking-tightest">
          a content that defines me in every aspect mention{" "}
        </span>
        <span className="text-black text-5xl md:text-5xl font-bold font-['Helvetica'] tracking-tightest">
          designer
        </span>
        <span className="ml-1 inline-block w-3 h-3 md:w-4 md:h-4 bg-black rounded-full align-middle" />
      </div>
    </div>
  );
};

export default HeroText;
