import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "./../../hooks/useAuth";

const UpdateOrder = () => {
  const [plan, setPlan] = useState([]);
  const [planDetails, setPlanDetails] = useState();
  const { planId } = useParams();
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const handleUpdatePlan = (data) => {
    axios
      .put(
        `https://calida-tour-planner.herokuapp.com/updateplan/${planId}`,
        data
      )
      .then((res) => alert("Successfully updateds"));
  };
  useEffect(() => {
    const url = `https://calida-tour-planner.herokuapp.com/plans/${planId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlan(data));
  }, []);
  useEffect(() => {
    const url = `https://calida-tour-planner.herokuapp.com/bookedplans/${planId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlanDetails(data));
  }, []);
  return (
    <div>
      <div id="#bookplan" className="lg:my-12">
        <section className="lg:my-20 bg-pink-100 bg-opacity-50">
          <form
            onSubmit={handleSubmit(handleUpdatePlan)}
            className="container max-w-2xl mx-auto shadow-md md:w-3/4"
          >
            <div className="p-4 bg-gray-500 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
              <div className="max-w-sm mx-auto md:w-full md:mx-0">
                <div className="inline-flex items-center space-x-4">
                  <a href="/home" className="block relative">
                    <img
                      alt="profil"
                      src={user.photoURL}
                      className="mx-auto object-cover rounded-full h-16 w-16 "
                    />
                  </a>
                  <h1 className="text-gray-600">{user.displayName}</h1>
                </div>
              </div>
            </div>
            <div className="space-y-6 bg-white">
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">Account</h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                  <div className=" relative ">
                    <input
                      value={user.email}
                      type="email"
                      {...register("email", { required: true, maxLength: 40 })}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">Contact info</h2>
                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                  <div>
                    <div className=" relative ">
                      <input
                        value={user.displayName}
                        type="text"
                        {...register("name", { required: true, maxLength: 40 })}
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <input
                        type="number"
                        {...register("phone", {
                          required: true,
                          min: 10,
                        })}
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <input
                        type="text"
                        {...register("address", {
                          required: true,
                          maxLength: 40,
                        })}
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">
                  Additional information
                </h2>
                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                  <div className="relative">
                    <label className="text-gray-700" for="adults">
                      Adults
                      <select
                        {...register("adults", { required: true })}
                        className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Select an option</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </label>
                  </div>
                  <div className="relative">
                    <label className="text-gray-700" for="child">
                      Child
                      <select
                        {...register("child", { required: false })}
                        className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Select an option</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </label>
                  </div>
                  <div className="relative">
                    <label className="text-gray-700" for="chistatusld">
                      Status
                      <select
                        {...register("status", { required: true })}
                        className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Select an option</option>
                        <option value="">Pending</option>
                        <option value="appr">Approved</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>
              <hr />
              <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3 relative">
                <button
                  type="submit"
                  className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UpdateOrder;
