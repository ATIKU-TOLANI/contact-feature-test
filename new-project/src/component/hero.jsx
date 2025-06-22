import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[150px] w-full h-screen mx-auto text-center flex flex-col">
        <p className=" text-[#00df9a] font-bold p-2 ">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl font-bold md:text-7xl sm:text-6xl md:py-6">
          Grow with data.
        </h1>
        <div className="flex items-center justify-center gap-2">
          <p className="text-xl font-bold md:text-5xl sm:text-4xl">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="pl-2 text-xl font-bold md:text-5xl sm:text-4xl"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="pl-2 text-xl font-bold text-gray-400 md:text-2xl md:pl-4">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200x] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Hero;
