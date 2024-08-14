import HeroText from "./components/HeroText";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="mx-10 my-10">
        <HeroText />
      </div>
    </>
  );
}
