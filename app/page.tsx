import Footer from "./components/Footer/Footer";
import HeroImage from "./components/HeroImage/HeroImage";
import HeroText from "./components/HeroText/HeroText";
import NavBar from "./components/Navbar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="mx-10 my-10">
        <HeroText />
      </div>
      <HeroImage/>
      <Footer/>
    </>
  );
}
