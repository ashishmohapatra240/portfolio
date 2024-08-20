import React from "react";
import Image from "next/image";

interface CertificationCardProps {
  image: string;
  title: string;
  dateIssued: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  image,
  title,
  dateIssued,
}) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200">
      <Image src={image} alt="Certification Logo" width={48} height={48} />
      <div className="flex flex-col">
        <h4 className="text-lg font-bold text-gray-900 tracking-tightest">
          {title}
        </h4>
        <p className="text-sm text-gray-600 tracking-tightest">
          Issued {dateIssued}
        </p>
      </div>
    </div>
  );
};

export default CertificationCard;
