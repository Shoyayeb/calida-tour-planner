import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <main class="bg-white  overflow-hidden h-screen ">
        <div class="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
          <div class="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center ">
            <div class="w-full mb-16 md:mb-8 text-center lg:text-left">
              <h1 class="font-light font-sans text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0 mb-8 text-gray-700">
                Sorry, this page isn&#x27;t available
              </h1>
              <Link
                to="/"
                class="px-2 py-2 font-light transition ease-in duration-200 hover:bg-green-400 border-2 text-lg border-gray-700 bg-green-300 focus:outline-none"
              >
                Go back home
              </Link>
            </div>
            <div class="block w-full mx-auto md:mt-0 max-w-md lg:max-w-2xl">
              <img
                src="https://www.tailwind-kit.com/images/illustrations/1.svg"
                alt="error"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
