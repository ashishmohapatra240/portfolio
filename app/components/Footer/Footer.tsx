import React from "react";
import ConnectText from "./ConnectText";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between ml-10 mr-80">
          {/* Left Section */}
          <div className="mb-8 md:mb-0">
            <ConnectText />
            <div className="mt-16">
              {/* Underline Button with Calendly Link */}
              <a
                href="https://calendly.com/ashishmohapatra240"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl font-normal leading-9 flex items-center group tracking-tightest"
              >
                Schedule a Meeting
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  &#8594;
                </span>
              </a>
              <div className="w-full h-px mt-2 bg-white"></div>
            </div>
            <div className="mt-12 text-white text-lg font-normal leading-9 tracking-tightest">
              © Ashish Mohapatra, 2024
            </div>
          </div>

          {/* Right Section with Social Links */}
          <div className="flex flex-col space-y-4">
            <span className="text-white text-2xl font-bold leading-9 tracking-tightest">
              Connect
            </span>
            <a
              href="mailto:ashishmohapatra240@gmail.com"
              className="text-white text-3xl font-normal leading-9 hover:underline tracking-tightest"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-mohapatra-366974204/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl font-normal leading-9 hover:underline tracking-tightest"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ashishmohapatra240"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl font-normal leading-9 hover:underline tracking-tightest"
            >
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/ashishmohapatra240/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl font-normal leading-9 hover:underline tracking-tightest"
            >
              Leetcode
            </a>
            <a
              href="https://x.com/ashish_mohapat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl font-normal leading-9 hover:underline tracking-tightest"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-[140px] right-[40px] w-5 h-5 bg-white rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
