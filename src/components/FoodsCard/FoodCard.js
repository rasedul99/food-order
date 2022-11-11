import React from "react";
import logo from "../../assets/images/res-logo.png";

const FoodCard = () => {
  return (
    <div className="p-4 border border-red-100 ">
      <div className="flex  flex-col gap-5 items-center mb-8 ">
        {" "}
        <div className="w-28 h-28 flex justify-center items-center ">
          {" "}
          <img src={logo} className=" w-24 h-24 hover:w-28 hover:h-28 " />
        </div>
        <p>vegetarian Pizza</p>
      </div>

      <div className="flex justify-between my-3">
        {" "}
        <p>$115</p>
        <input
          type="btn"
          value="Add to Cart"
          className="bg-red-600 text-center py-2 rounded text-white cursor-pointer"
        />
      </div>
    </div>
  );
};

export default FoodCard;
