import React from "react";
import WorkCard from "./Components/WorkCard";

const Work = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-4 space-y-6 w-full max-w-screen-lg mx-10">
        <div className="w-full max-w-5xl text-left">
          <h1 className="text-4xl md:text-5xl font-light tracking-tightest">
            my <span className="font-bold">works</span>
            <span className="ml-1 w-3 h-3 md:w-4 md:h-4 bg-black inline-block rounded-full" />
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 tracking-tightest">
            Premium quality creative at lean rates for growing businesses.
            <br />
            Packaged as
          </p>
        </div>
      </div>
      <hr className="border-t border-[#BABABA] w-full max-w-7xl mx-10 py-4" />
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-12 max-w-5xl mx-auto">
        <WorkCard
          image="/images/placeholder.png"
          title="Tech"
          link="/works/tech"
        />
        <WorkCard
          image="/images/placeholder.png"
          title="Design"
          link="/works/design"
        />
      </div>
    </div>
  );
};

export default Work;
