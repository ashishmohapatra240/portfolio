import React from "react";

const skills = [
  {
    title: "problem solving",
    description: "solved over 200+ questions on Leetcode",
  },
  {
    title: "frontend development",
    description: "design pixel-perfect apps and websites",
  },
  {
    title: "backend development",
    description: "connected servers to databases",
  },
  {
    title: "devops",
    description: "deployed on vercel",
  },
  {
    title: "design thinking",
    description: "designed creative posters and graphics",
  },
];

const Skill = () => {
  return (
    <div className="w-full px-4 md:px-10 flex flex-col gap-5 mt-10">
      <div className="flex items-center">
        <span className="text-black text-2xl md:text-2xl font-normal tracking-tightest">
          what I
        </span>
        <span className="text-black text-2xl md:text-2xl font-bold tracking-tightest ml-1">
          do
        </span>
        <span
          className="ml-1 inline-block w-3 h-3 md:w-4 md:h-4 bg-black rounded-full relative"
          style={{ bottom: "-0.1em" }}
        />
      </div>

      {skills.map((skill, index) => (
        <div key={index} className="flex justify-between items-center w-full">
          <div className="text-black text-4xl sm:text-4xl md:text-5xl font-normal tracking-tightest text-left">
            {skill.title}
          </div>
          <div className="text-black text-2xl sm:text-2xl md:text-3xl font-normal tracking-tightest text-right">
            {skill.description}
          </div>
        </div>
      ))}
      <hr className="border-t border-[#BABABA] w-full my-8 md:my-10" />

    </div>
  );
};

export default Skill;
