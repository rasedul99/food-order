import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner/Banner";
import { deleteToCart } from "../store/actions/cartActions";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subTotal = cartItems.reduce((total, item) => {
    return total + parseFloat(item.price * item.qty);
  }, 0);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        {" "}
        <Banner title="Your Cart" />
      </div>

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
                    <tr className="border" key={item.id}>
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
                        <p className="text-center">{item.qty}</p>
                      </td>
                      <td>
                        <button
                          onClick={(e) => {
                            dispatch(deleteToCart(item.id));
                          }}
                        >
                          {" "}
                          <AiOutlineDelete size={24} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>

        <div>
          <p>
            Subtotal : $<span className="text-red-600">{subTotal}</span>{" "}
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
