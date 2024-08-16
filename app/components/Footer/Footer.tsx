import React from "react";
import ConnectText from "./ConnectText";

interface SocialLinkProps {
  name: string;
  url: string;
}

const socialLinks: SocialLinkProps[] = [
  { name: "Email", url: "mailto:ashishmohapatra240@gmail.com" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ashish-mohapatra-366974204/",
  },
  { name: "GitHub", url: "https://github.com/ashishmohapatra240" },
  { name: "Leetcode", url: "https://leetcode.com/u/ashishmohapatra240/" },
  { name: "Twitter", url: "https://x.com/ashish_mohapat" },
];

const SocialLink: React.FC<SocialLinkProps> = ({ name, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-3xl font-normal leading-9 hover:underline tracking-tightest"
  >
    {name}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black py-12">
      <div className="container mx-10">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center flex-wrap">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <ConnectText />
            <div className="mt-12">
              <a
                href="https://calendly.com/ashishmohapatra240"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl font-normal flex items-center group tracking-tightest"
              >
                Schedule a Meeting
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  &#8594;
                </span>
              </a>
              <div className="w-72 h-px mt-2 bg-white"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col space-y-4 md:space-y-2 mt-8 md:mt-0 md:pl-24">
            <span className="text-white text-2xl font-bold leading-9 tracking-tightest">
              Connect
            </span>
            {socialLinks.map((link) => (
              <SocialLink key={link.name} {...link} />
            ))}
          </div>
        </div>
        <div className="w-full text-left mt-8 md:mt-12 text-white text-lg font-normal leading-9 tracking-tightest md:order-3 order-1">
          © Ashish Mohapatra, 2024
        </div>
        <div className="absolute top-[140px] right-[40px] w-5 h-5 bg-white rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
