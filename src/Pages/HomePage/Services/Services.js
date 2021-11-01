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
      <div className="w-full bg-white p-12">
        <div className="header flex items-end justify-between mb-12">
          <div className="title">
            <p className="text-4xl font-bold text-gray-800 mb-4">
              Available Plans
            </p>
            <p className="text-2xl font-light text-blue-400">
              Book now to get up to 20% cashback
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {plans.map((plan) => (
            <ServiceCard key={plan._id} planDetails={plan}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
