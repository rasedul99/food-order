import React from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import FoodCard from "../components/FoodsCard/FoodCard";
const Foods = () => {
  return (
    <div>
      <div>
        <div>All Foods</div>
      </div>
      <div className="flex justify-between my-7">
        <div className="flex justify-between w-2/4 border border-red-600  items-center px-3">
          <input
            placeholder="I am looking for...."
            className="outline-none bg-white"
          />
          <span>
            <CiSearch size="20" />
          </span>
        </div>
        <div className="flex justify-between w-1/4 border border-red-600  items-center">
          <input
            placeholder="I am looking for...."
            className="py-1 px-2  outline-none bg-white "
          />
          <span>
            <BsArrowDownShort size="24" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 ">
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>

      <div className="flex gap-x-2 items-center justify-center my-4">
        <button className="bg-slate-700 text-center px-2 rounded text-white">
          Prev
        </button>
        <button className="bg-slate-700 text-center px-2 rounded text-white">
          1
        </button>
        <button className="bg-slate-700 text-center px-2 rounded text-white">
          2
        </button>
        <button className="bg-slate-700 text-center px-2 rounded text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default Foods;
