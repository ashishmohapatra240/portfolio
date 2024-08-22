import BottomHero from "./components/HeroSection Components/BottomHero/BottomHero";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import HeroImage from "./components/HeroSection Components/HeroImage/HeroImage";
import HeroText from "./components/HeroSection Components/HeroText/HeroText";
import Motto from "./components/Motto/Motto";
import Playground from "./components/Playground/Playground";
import Skill from "./components/Skills/Skills";
import HeroSection from "./components/HeroSection Components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Skill />
      <Experience />
      <Playground />
      <Motto />
    </>
  );
}
