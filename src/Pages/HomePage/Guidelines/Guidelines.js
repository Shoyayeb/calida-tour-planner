import React from "react";

const Guidelines = () => {
  return (
    <div id="guidelines">
      <div className="bg-white dark:bg-gray-800 ">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">How to stay safe while travelling ?</span>
            <span className="block text-indigo-500">
              See our guidelines from experts.
            </span>
          </h2>
          <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
            Travel can be an exciting, eye-opening experience. It’s easy to get
            caught up in the thrill of adventure. But don’t forget about travel
            security and safety considerations while you’re abroad.
          </p>
        </div>
      </div>
      {/* video section */}

      <div className="bg-white dark:bg-gray-800 overflow-hidden relative">
        <div className="text-start lg:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block text-indigo-500">
              Watch this special video from our specialist.
            </span>
          </h2>
          <p className="text-xl mt-4 text-gray-400">
            To get more detailed guidelines dont hesitate to contact us.
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <a
                href="https://www.youtube.com/embed/YIn9nyGWoy8"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="py-4 px-6  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Watch Now
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* <img
          src="/images/object/1.png"
          className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0"
        /> */}
        <iframe
          className="absolute h-full max-w-1/2 hidden lg:block right-8 top-0"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YIn9nyGWoy8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Guidelines;
