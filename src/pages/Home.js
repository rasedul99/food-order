import React from "react";
import { AiFillCar, AiOutlineSafety } from "react-icons/ai";
import fastfood from "../assets/images/category-01.png";
import pizza from "../assets/images/category-02.png";
import asianfood from "../assets/images/category-03.png";
import rowmeat from "../assets/images/category-04.png";
import hero from "../assets/images/hero.png";
import service1 from "../assets/images/service-01.png";
import service2 from "../assets/images/service-02.png";
import service3 from "../assets/images/service-03.png";
import Category from "../components/FoodsCategory/Category";

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <div className=" grid grid-cols-1 md:grid-cols-2  justify-items-center items-center">
        <div className="md:-mt-10 mt-10  flex flex-col justify-center items-center md:inline">
          <p className="text-xl font-medium mb-4 ">Easy way to make an order</p>
          <p className="text-4xl mb-6 w-3/4">
            <span className="text-red-600 ">HUNGRY?</span> Just wait food at{" "}
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
      {/* Food Category */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Category name="Fastfood" image={fastfood} />
        <Category name="Pizza" image={pizza} />
        <Category name="Asian Food" image={asianfood} />
        <Category name="Row Meats" image={rowmeat} />
      </div>

      {/* section three */}
      <div>
        <div className="flex flex-col items-center justify-center py-20">
          <h4 className="text-red-600  text-xl font-medium mb-5">
            What we serve
          </h4>
          <h3 className="text-4xl mb-5 text-center">
            Just sit back at home <br></br> we will{" "}
            <span className="text-red-600 ">take care</span>{" "}
          </h3>
          <div className="text-base font-['Istok_Web'] ">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              officiis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              eius.
            </p>
          </div>
        </div>
        <div className=" md:flex ">
          <div className="flex flex-col gap-y-4 my-5 items-center ">
            <img src={service1} className="w-28" />
            <h4 className="text-xl font-medium">Quick Delivery</h4>
            <p className="text-base  font-['Istok_Web'] text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
              doloremque.
            </p>
          </div>

          <div className="flex flex-col gap-y-4 my-5 items-center ">
            <img src={service2} className="w-28" />
            <h4 className="text-xl font-medium">Super Dine In</h4>
            <p className="text-base  font-['Istok_Web'] text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
              doloremque.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 my-5 items-center  ">
            <img src={service3} className="w-28" />
            <h4 className="text-xl font-medium">Easy Pick Up</h4>
            <p className="text-base  font-['Istok_Web'] text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
              doloremque.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
