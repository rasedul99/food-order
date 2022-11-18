import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import products from "../assets/fake-data/products";
import FoodCard from "../components/FoodsCard/FoodCard";
const Foods = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [productData, setSearchProductData] = useState(products);

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
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
          <span>
            <CiSearch size="20" />
          </span>
        </div>
        <div className="flex justify-between w-1/4 border border-red-600  items-center">
          <select className="bg-white border-none focus:outline-none w-full">
            <option>Default</option>
            <option value="male">Alphabetically,A-Z</option>
            <option value="female">Alphabetically,Z-A</option>
            <option value="other">High Price</option>
            <option value="other">Low Price</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {productData
          .filter((item) => {
            return item.title.toLowerCase().includes(searchProduct);
          })
          .map((product) => (
            <FoodCard product={product} />
          ))}
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
