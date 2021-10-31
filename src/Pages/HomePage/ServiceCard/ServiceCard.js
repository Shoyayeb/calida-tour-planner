import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  const { planDetails } = props;

  return (
    <div>
      <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        <div href="#" class="w-full block h-full">
          <img
            alt="blog"
            src={planDetails.image}
            class="max-h-40 w-full object-cover"
          />
          <div class="bg-white dark:bg-gray-800 w-full p-4">
            <p class="text-yellow-500 text-md font-medium">
              Starting From BDT {planDetails.price}
            </p>
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {planDetails.name}
            </p>
            <p class="text-gray-400 dark:text-gray-300 font-light text-md">
              {planDetails.description.slice(0, 190)}...
            </p>
          </div>
          <Link
            to={`/plans/${planDetails._id}`}
            className="w-full flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 md:py-3 md:text-lg md:px-6"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;