"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface WorkCardProps {
  image: string;
  title: string;
  link: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ image, title, link }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <div
      className="w-full sm:w-[640px] h-[240px] flex flex-col cursor-pointer group"
      onClick={handleClick}
    >
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 640px) 100vw, 640px"
        />
      </div>
      <div className="flex  items-center bg-white bg-opacity-80 py-2">
        <div className="text-xl md:text-3xl tracking-tightest">
          {title}
        </div>
        <span className="ml-2 text-xl md:text-3xl transition-transform duration-300 group-hover:translate-x-1">
          &#8594;
        </span>
      </div>
    </div>
  );
};

export default WorkCard;
