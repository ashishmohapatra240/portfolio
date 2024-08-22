import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import { ScrollProvider } from "@/context/ScrollContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashish Mohapatra",
  description: "Portfolio of Ashish Mohapatra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProvider>
          <NavBar />
          {children}
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
