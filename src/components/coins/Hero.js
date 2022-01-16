import React from "react";
import HeroImage from "../../images/hero.jpg";

const Hero = () => {
  return (
    <div
      className="h-[40vh] bg-center bg-cover grid place-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.7)), url('${HeroImage}')`,
      }}
    >
      <div className="container mx-auto max-w-[1170px]  px-[1rem]">
        <h1 className="font-extrabold text-2xl sm:text-4xl text-white max-w-[40rem] capitalize leading-snug mb-[.5rem] tracking-wide shadow-xl drop-shadow-2xl">
          Welcome to the world’s largest source for cryptocurrency data
        </h1>
        <h2 className="text-gray-200 font-semibold text-lg sm:text-xl flex items-center gap-[.5rem]">
          <span>
            Our mission is to make crypto discoverable and efficient globally
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
