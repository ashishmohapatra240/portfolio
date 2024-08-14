import Image from "next/image";

const HeroImage: React.FC = () => {
  return (
    <div style={{ width: "100%", minHeight: "50vh" }}>
      <Image
        src="/images/heroImage.png"
        alt="Hero Image"
        layout="responsive"
        width={16}
        height={9}
        objectFit="cover"
      />
    </div>
  );
};

export default HeroImage;
