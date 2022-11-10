import React from "react";
import { AiFillCar, AiOutlineSafety } from "react-icons/ai";
import fastfood from "../assets/images/category-01.png";
import pizza from "../assets/images/category-02.png";
import asianfood from "../assets/images/category-03.png";
import rowmeat from "../assets/images/category-04.png";
import hero from "../assets/images/hero.png";
import Category from "../components/FoodsCategory/Category";

const Home = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2  justify-items-center items-center">
        <div className="md:-mt-10 mt-10  flex flex-col justify-center items-center md:inline">
          <p className="text-xl font-medium mb-4 ">Easy way to make an order</p>
          <p className="text-4xl mb-6 w-3/4">
            <span className="text-red-600 5">HUNGRY?</span> Just wait food at{" "}
            <span className="text-red-600">your door</span>
          </p>
          <p className="text-base my-6 font-['Istok_Web'] mx-3  md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni
            delectus tenetur autem, sint veritatis!
          </p>
          <div className="flex gap-12 mb-6">
            <button className="bg-red-600 text-white py-2 px-3 rounded hover:bg-slate-600">
              Order now
            </button>
            <button className="text-red-600 py-2 px-3 border border-red-600 rounded">
              See all foods
            </button>
          </div>

          <div className="flex gap-5 font-['Istok_Web'] font-semibold md:mt-10">
            <div className="flex items-center gap-3">
              <div className=" p-2 rounded-full bg-red-600">
                <AiFillCar className="text-white" />
              </div>
              <p className="text-sm ">No shipping charge</p>
            </div>

            <div className="flex items-center gap-3 ">
              <div className="p-2 rounded-full bg-red-600">
                {" "}
                <AiOutlineSafety className="text-white" />
              </div>

              <p className="text-sm">100% secure checkout</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src={hero} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Category  name="Fastfood" image={fastfood} />
        <Category name="Pizza" image={pizza} />
        <Category name="Asian Food" image={asianfood} />
        <Category name="Row Meats" image={rowmeat} />
      </div>
    </div>
  );
};

export default Home;
