import BottomHero from "./components/BottomHero/BottomHero";
import Footer from "./components/Footer/Footer";
import HeroImage from "./components/HeroImage/HeroImage";
import HeroText from "./components/HeroText/HeroText";
import NavBar from "./components/Navbar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="px-4 md:px-10 py-8">
        <HeroText />
      </div>
      <HeroImage />
      <BottomHero />
      <Footer />
    </>
  );
}
