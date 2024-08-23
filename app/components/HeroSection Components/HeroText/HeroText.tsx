"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

const HeroText: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = textRef.current?.querySelectorAll("span.word");

    if (words) {
      gsap.fromTo(
        words,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "cubic-text", stagger: 0.1 }
      );
    }
  }, []);

  return (
    <div
      ref={textRef}
      className="w-full max-w-full md:max-w-2xl h-auto relative px-4 md:px-10 pt-24 pb-8"
    >
      <div className="leading-tight">
        <span className="word text-black text-5xl md:text-5xl font-normal tracking-tightest mr-2">
          a
        </span>{" "}
        <span className="word text-black text-5xl md:text-5xl font-normal tracking-tightest mr-2">
          content
        </span>{" "}
        <span className="word text-black text-5xl md:text-5xl font-normal tracking-tightest mr-2">
          that
        </span>{" "}
        <span className="word text-black text-5xl md:text-5xl font-normal tracking-tightest mr-2">
          defines
        </span>{" "}
        <span className="word text-black text-5xl md:text-5xl font-normal tracking-tightest mr-2">
          me
        </span>{" "}
        <span className="word text-black text-5xl md:text-5xl font-normal tracking-tightest mr-2">
          in
        </span>{" "}
        <span className="word text-black text-5xl md:text-5xl font-normal tracking-tightest mr-2">
          every
        </span>{" "}
        <span className="word text-black text-5xl md:text-5xl font-normal tracking-tightest mr-2">
          aspect
        </span>{" "}
        <span className="word text-black text-5xl md:text-5xl font-normal tracking-tightest mr-2">
          mention
        </span>{" "}
        <span className="word text-black text-5xl md:text-5xl font-bold tracking-tightest mr-2">
          designer
        </span>
        <span className="ml-1 inline-block w-3 h-3 md:w-4 md:h-4 bg-black rounded-full align-middle word" />
      </div>
    </div>
  );
};

export default HeroText;
