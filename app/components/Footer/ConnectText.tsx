import React from "react";

const ConnectText: React.FC = () => {
  return (
    <div className="w-full max-w-full md:max-w-2xl h-auto relative">
      <div>
        <span className="text-white text-5xl md:text-5xl font-normal tracking-tightest">
          if you liked my work
          <br /> let’s{" "}
        </span>
        <span className="text-white text-5xl md:text-5xl font-bold tracking-tightest">
          connect
        </span>
        <span className="ml-1 inline-block w-3 h-3 md:w-4 md:h-4 bg-white rounded-full align-middle" />
      </div>
    </div>
  );
};

export default ConnectText;
