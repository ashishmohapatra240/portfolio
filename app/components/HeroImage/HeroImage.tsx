import Image from "next/image";

const HeroImage: React.FC = () => {
  return (
    <div className="w-full">
      <Image
        src="/images/heroImage.png"
        alt="Hero Image"
        layout="responsive"
        width={16}
        height={9}
        objectFit="cover"
        className="block"
      />
    </div>
  );
};

export default HeroImage;
