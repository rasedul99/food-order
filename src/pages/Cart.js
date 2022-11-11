import React from "react";

const Cart = () => {
  return (
    <div>
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
          <tbody>
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
          </tbody>
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
  );
};

export default Cart;
