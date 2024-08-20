import React from "react";

interface SkillsCardProps {
  title: string;
  skills: string[];
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, skills }) => {
  return (
    <div className="w-full p-6 rounded-lg border border-gray-200 flex flex-col gap-4  tracking-tightest">
      <h3 className="text-2xl font-bold text-gray-900  tracking-tightest">
        {title}
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700  tracking-tightest">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
