import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import OrderedCards from "../Shared/OrderedCards/OrderedCards";
import useAuth from "./../../hooks/useAuth";

const MyOrders = () => {
  const [plans, setPlans] = useState([]);
  const { user } = useAuth();
  const useremail = user.email;
  console.log(useremail);

  useEffect(() => {
    const url = `https://calida-tour-planner.herokuapp.com/bookedplans`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);
  console.log(plans);

  let myOrders = [];
  for (let i = 0; i < plans.length; i++) {
    if (plans[i].email === user.email) {
      myOrders.push(plans[i]);
    }
  }
  console.log(myOrders);
  if (!myOrders.length) {
    return (
      <div class="bg-white dark:bg-gray-800 ">
        <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block text-indigo-500">No plan ordered yet</span>
          </h2>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
              <HashLink
                to="/home#services"
                type="button"
                class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Add Now
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center text fw-bold text-green-500 lh-lg">
        My ordered plans
      </h1>
      {myOrders.map((plan) => (
        <OrderedCards
          plans={myOrders}
          plan={plan}
          setPlans={setPlans}
          key={plan._id}
        ></OrderedCards>
      ))}
    </div>
  );
};

export default MyOrders;
