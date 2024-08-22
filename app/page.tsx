import BottomHero from "./components/BottomHero/BottomHero";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import HeroImage from "./components/HeroImage/HeroImage";
import HeroText from "./components/HeroText/HeroText";
import Motto from "./components/Motto/Motto";
import Playground from "./components/Playground/Playground";
import Skill from "./components/Skills/Skills";

export default function Home() {
  return (
    <>
      <div className="px-4 md:px-10 pt-24 pb-8">
        <HeroText />
      </div>
      <HeroImage />
      <BottomHero />
      <Skill />
      <Experience />
      <Playground />
      <Motto />
    </>
  );
}
