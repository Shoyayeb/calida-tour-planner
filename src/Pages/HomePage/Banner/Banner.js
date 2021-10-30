/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-white items-center overflow-hidden">
      <div className="sm:container mx-auto px-6 sm:flex sm:flex-row flex-col py-16">
        <div className="sm:w-2/3 lg:w-3/6 flex flex-col">
          <span className="w-20 h-2 bg-gray-800 md:mb-12"></span>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            Live with
            <span className="text-5xl sm:text-7xl">Nature</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white">
            Dimension of reality that makes change possible and understandable.
            An indefinite and homogeneous environment in which natural events
            and human existence take place.
          </p>
          <div className="flex mt-8">
            <Link
              to="/"
              className="uppercase py-2 px-4 rounded-lg bg-yellow-500 border-2 border-transparent text-white text-md mr-4 hover:bg-yellow-400"
            >
              Get started
            </Link>
            <Link
              to="/"
              className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-yellow-500 text-yellow-500 dark:text-white hover:bg-yellow-500 hover:text-white text-md"
            >
              Read more
            </Link>
          </div>
        </div>

        <div className="hidden sm:block sm:w-1/3 lg:w-3/6 ">
          <img
            src="/banner.png"
            alt="banner"
            className="max-w-xs md:max-w-lg m-auto"
          />
        </div>
        <div className="sm:hidden flex justify-center items-center my-4">
          <img src="/banner.png" alt="banner" className="max-w-xs" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
