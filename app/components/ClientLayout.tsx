"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";
import { ScrollProvider } from "@/context/ScrollContext";
import { usePathname } from "next/navigation";
import { slide, opacity, perspective } from "../anim";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <ScrollProvider>
      <NavBar />
      <AnimatePresence>
        <motion.div className="inner" key={pathname}>
          <motion.div
            className="slide"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={slide}
          />
          <motion.div
            className="page"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={perspective}
          >
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={opacity}
            >
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </ScrollProvider>
  );
}
