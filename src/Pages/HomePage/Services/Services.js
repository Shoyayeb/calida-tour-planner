import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    fetch("https://calida-tour-planner.herokuapp.com/plans")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);
  return (
    <div id="services">
      {" "}
      <div class="w-full bg-white p-12">
        <div class="header flex items-end justify-between mb-12">
          <div class="title">
            <p class="text-4xl font-bold text-gray-800 mb-4">
              Lastest articles
            </p>
            <p class="text-2xl font-light text-gray-400">
              All article are verified by 2 experts and valdiate by the CTO
            </p>
          </div>
          <div class="text-end">
            <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
              <div class=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Search'
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Enter a title"
                />
              </div>
              <button
                class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {plans.map((plan) => (
            <ServiceCard key={plan._id} planDetails={plan}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
