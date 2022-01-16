import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 flex flex-col gap-[1rem] justify-center items-center text-white px-[2rem] py-[1rem]">
      <div className="flex gap-[1rem]">
        <a href="https://www.github.com/sandipshiwakoti">
          <FaGithub className="text-3xl" />
        </a>
        <a href="https://www.linkedin.com/in/sandip-shiwakoti-a88317208/">
          <FaLinkedin className="text-3xl" />
        </a>
      </div>
      <h1 className="text-gray-400 text-md md:text-lg font-semibold text-center">
        Made with ❤ by Sandip Shiwakoti
      </h1>
    </footer>
  );
};

export default Footer;
