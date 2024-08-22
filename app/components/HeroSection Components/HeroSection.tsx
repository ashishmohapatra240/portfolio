import BottomHero from "./BottomHero/BottomHero";
import HeroImage from "./HeroImage/HeroImage";
import HeroText from "./HeroText/HeroText";

const HeroSection = () => {
  return (
    <>
      <div className="px-4 md:px-10 pt-24 pb-8">
        <HeroText />
      </div>
      <HeroImage />
      <BottomHero />
    </>
  );
};


export default HeroSection;

