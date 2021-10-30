import React from "react";

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
            <p class="text-indigo-500 text-md font-medium">
              Starting From BDT {planDetails.price}
            </p>
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {planDetails.name}
            </p>
            <p class="text-gray-400 dark:text-gray-300 font-light text-md">
              {planDetails.description.slice(0, 190)}...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
