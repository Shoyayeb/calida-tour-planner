import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddPlan.css";

const AddPlan = () => {
  const { register, handleSubmit, reset } = useForm();
  const handleAddPlan = (data) => {
    axios
      .post("https://calida-tour-planner.herokuapp.com/plans", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added");
          reset();
        }
      });
  };
  return (
    <div className="bg-gradient-to-b from-red-400 to-yellow-400">
      <div className="w-full py-10  font-sans ">
        <div className=" container flex items-center  justify-center flex-1 h-full mx-auto ">
          <form
            onSubmit={handleSubmit(handleAddPlan)}
            className="flex w-full max-w-sm space-x-3"
          >
            <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                Add New Service
              </div>
              <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                <div className="col-span-2 ">
                  <div className=" block ">
                    <input
                      {...register("name", { required: true, maxLength: 30 })}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Title"
                    />
                  </div>
                </div>
                <div className="col-span-2 ">
                  <div className=" block ">
                    <input
                      {...register("image", { required: true })}
                      type="url"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Image Url"
                    />
                  </div>
                </div>
                <div className="col-span-2 ">
                  <div className=" block ">
                    <input
                      {...register("price", { required: true, maxLength: 70 })}
                      type="number"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Price"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="text-gray-700" for="description">
                    <textarea
                      className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Enter your Description"
                      {...register("description", { required: true })}
                      rows="5"
                      cols="40"
                    ></textarea>
                  </label>
                </div>
                <div className="col-span-2 text-right">
                  <button
                    type="submit"
                    className="py-2 px-4  bg-green-500 hover:bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPlan;
