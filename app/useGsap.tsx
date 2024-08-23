"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useGsap = (sections: React.RefObject<HTMLDivElement[]>) => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      const triggers = sections.current?.map((section) => {
        if (section) {
          return ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: () => `+=${section.offsetHeight}`,
            pin: true,
            pinSpacing: false,
            scrub: 5,
            onEnter: () => gsap.to(section, { y: 16, duration: 0.2 }),
            onLeaveBack: () => gsap.to(section, { y: 0, duration: 0.5 }),
            onLeave: () => gsap.to(section, { y: 0, duration: 0.5 }),
          });
        }
        return null;
      });

      return () => {
        triggers?.forEach((trigger) => trigger?.kill());
      };
    });

    mm.add("(max-width: 599px)", () => {
      const triggers = sections.current?.map((section) => {
        if (section) {
          return ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: () => `+=${section.offsetHeight}`,
            pin: true,
            pinSpacing: true,
            scrub: 2,
            onEnter: () => gsap.to(section, { y: 8, duration: 0.2 }),
            onLeaveBack: () => gsap.to(section, { y: 0, duration: 0.5 }),
            onLeave: () => gsap.to(section, { y: 0, duration: 0.5 }),
          });
        }
        return null;
      });

      return () => {
        triggers?.forEach((trigger) => trigger?.kill());
      };
    });

    return () => {
      mm.revert();
    };
  }, [sections]);
};

export default useGsap;
