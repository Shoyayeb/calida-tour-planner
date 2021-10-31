import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import OrderedCards from "../Shared/OrderedCards/OrderedCards";

const AllOrders = () => {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    fetch("https://calida-tour-planner.herokuapp.com/bookedplans")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  const { isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <div
          className="
        animate-spin
        rounded-full
        h-32
        w-32
        border-t-2 border-b-2 border-purple-500
      "
        ></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:m-12">
      {" "}
      {plans.map((plan) => (
        <OrderedCards
          plans={plans}
          plan={plan}
          setPlans={setPlans}
          key={plan._id}
        ></OrderedCards>
      ))}
    </div>
  );
};

export default AllOrders;
