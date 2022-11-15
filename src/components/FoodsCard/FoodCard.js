import React from "react";

const FoodCard = ({ product }) => {
  console.log(product);
  return (
    <div className="p-4 border border-red-100 ">
      <div className="flex  flex-col gap-5 items-center mb-8 ">
        {" "}
        <div className="w-28 h-28 flex justify-center items-center ">
          {" "}
          <img
            src={product?.image01}
            className=" w-24 h-24 hover:w-28 hover:h-28 "
          />
        </div>
        <p>{product?.title}</p>
      </div>

      <div className="flex justify-between my-3">
        {" "}
        <p>${product?.price}</p>
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
