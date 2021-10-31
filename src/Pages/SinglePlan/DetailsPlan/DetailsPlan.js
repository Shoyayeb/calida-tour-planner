import React from "react";

const DetailsPlan = (props) => {
  const { plan } = props;
  return (
    <div>
      <div className="bg-white lg:flex">
        <div className="text-start px-2 lg:w-1/2 py-12 lg:py-16 lg:px-8  flex-1">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Want to go {plan.name}?</span>
            <span className="block text-indigo-500">
              Book now to get exciting offers.
            </span>
          </h2>
          <p className="text-xl mt-4 text-gray-400">{plan.description}</p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <a
                href="#bookplan"
                className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <img
          src={plan.image}
          className="lg:w-1/3 px-2 flex-1"
          alt={plan.name}
        />
      </div>
      <div></div>
    </div>
  );
};

export default DetailsPlan;
