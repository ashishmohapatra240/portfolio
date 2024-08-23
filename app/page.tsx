"use client";

import { useRef } from "react";
import HeroSection from "./components/HeroSection Components/HeroSection";
import Skill from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Playground from "./components/Playground/Playground";
import Motto from "./components/Motto/Motto";
import useGsap from "./useGsap";

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useGsap(sectionsRef); // Apply GSAP animations

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <main>
      {" "}
      {/* Use a main wrapper to ensure proper DOM structure */}
      <div ref={addToRefs}>
        <HeroSection />
      </div>
      <div ref={addToRefs}>
        <Skill />
      </div>
      <div ref={addToRefs}>
        <Experience />
      </div>
      <div ref={addToRefs}>
        <Playground />
      </div>
      <div ref={addToRefs}>
        <Motto />
      </div>
    </main>
  );
}
