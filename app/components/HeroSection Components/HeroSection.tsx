import BottomHero from "./BottomHero/BottomHero";
import HeroImage from "./HeroImage/HeroImage";
import HeroText from "./HeroText/HeroText";

const HeroSection = () => {
  return (
    <div className="bg-white">
      <HeroText />
      <HeroImage />
      <BottomHero />
    </div>
  );
};

export default HeroSection;
