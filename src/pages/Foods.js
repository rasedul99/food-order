import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import products from "../assets/fake-data/products";
import Banner from "../components/Banner/Banner";
import FoodCard from "../components/FoodsCard/FoodCard";
const Foods = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [productData, setSearchProductData] = useState(products);

  return (
    <div>
      <div >
        <Banner title="All Foods" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="my-7">
          <div className="flex justify-between w-2/4 p-2 mx-auto border border-red-600  items-center px-3">
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
    </div>
  );
};

export default Foods;
