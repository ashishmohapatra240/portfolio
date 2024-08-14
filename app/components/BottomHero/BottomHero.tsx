import React from "react";
import Link from "next/link";

const BottomHero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-10 py-8">
      <div className="w-full max-w-2xl">
        <p className="text-black text-3xl font-normal leading-tight tracking-tightest">
          works so <span className="font-bold">Pro</span>, they
          <br />
          started calling it <span className="font-bold">Pro</span>jects
        </p>

        <div className="mt-8">
          <Link href="/works" className="text-black text-3xl font-normal flex items-center group tracking-tightest">
            view Projects{" "}
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              &#8594;
            </span>
          </Link>
          <div className="w-full h-px mt-2 bg-black"></div>
        </div>
      </div>

      <div className="w-full md:w-[36rem] text-black text-4xl font-normal leading-snug tracking-tightest mt-8 md:mt-0 md:ml-10">
        I’m a Premium quality creative at lean rates for growing businesses.
        Packaged as subscriptions or.
      </div>
    </div>
  );
};

export default BottomHero;
