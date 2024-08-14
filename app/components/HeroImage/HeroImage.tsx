import Image from "next/image";

const HeroImage: React.FC = () => {
  return (
    <div className="relative w-full h-[192px] md:h-[280px]">
      <Image
        src="/images/heroImage.png"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0"
      />
    </div>
  );
};

export default HeroImage;
