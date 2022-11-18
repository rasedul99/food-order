import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import Banner from "../components/Banner/Banner";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      <Banner title="Your Cart" />
      <div className="max-w-7xl mx-auto">
        <div>
          <table class="table-auto w-full my-10">
            <thead>
              <tr className="border ">
                <th>Image</th>
                <th>Product Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Delete</th>
              </tr>
            </thead>
            {cartItems.map((item) => {
              return (
                <>
                  <tbody>
                    <tr className="border">
                      <td className=" flex justify-center">
                        <img src={item.image01} className=" w-24 h-24 " />
                      </td>
                      <td>
                        <p className="text-center">{item.title}</p>
                      </td>
                      <td>
                        <p className="text-center">${item.price}</p>
                      </td>
                      <td>
                        <p className="text-center">{item.title}</p>
                      </td>
                      <td>
                        <button>
                          {" "}
                          <AiOutlineDelete size={24} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
            {/* <tbody>
            <tr className="border">
              <td>The</td>
              <td>Malcolm</td>
              <td>1961</td>
              <td>19</td>
              <td>1961</td>
            </tr>
            <tr className="border">
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
              <td>1972</td>
              <td>1972</td>
            </tr>
            <tr className="border">
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>1975</td>
              <td>1975</td>
            </tr>
          </tbody> */}
          </table>
        </div>

        <div>
          <p>
            Subtotal : $<span className="text-red-600">295</span>{" "}
          </p>
          <p>Taxes and shipping will calculate at checkout</p>
          <div className="flex gap-x-5 my-5">
            <button className="bg-red-600 text-white py-2 px-3 rounded">
              Continue Shopping
            </button>
            <button className="bg-red-600 text-white py-2 px-3 rounded">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
