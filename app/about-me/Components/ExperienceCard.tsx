import React from "react";
import Image from "next/image";

interface ExperienceCardProps {
  image: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  image,
  role,
  company,
  duration,
  location,
  description,
}) => {
  return (
    <div className="w-full p-6 rounded-lg border border-gray-200 flex flex-col gap-4 tracking-tightest">
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={company}
          width={64}
          height={64}
          priority
          className="rounded"
        />
        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-bold tracking-tightest">{company}</h3>
              <p className="text-sm text-gray-600 tracking-tightest">{role}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 tracking-tightest">
                {duration}
              </p>
              <p className="text-sm font-semibold text-gray-700 tracking-tightest">
                {location}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ExperienceCard;
