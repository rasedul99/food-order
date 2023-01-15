import React from "react";
import { GrFormClose } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addQty,
  deleteToCart,
  hideCartToggle,
  reduceQty,
} from "../../store/actions/cartActions";

const Carts = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  const subTotal = cart.reduce((total, item) => {
    return total + parseFloat(item.price * item.qty);
  }, 0);
  localStorage.setItem("cart", JSON.stringify(cart));
  return (
    <div className="fixed top-0 left-0  w-full bg-black bg-opacity-50 h-screen  z-40  ">
      <div className="absolute top-0 right-0 h-full w-96  bg-white  z-50 ">
        <div className=" fixed w-full  h-12">
          <button
            onClick={() => {
              dispatch(hideCartToggle());
            }}
            className="m-2 p-1 bg-slate-900 rounded-full"
          >
            <MdOutlineClose size={24} className="text-white " />
          </button>
        </div>

        {cart.length > 0 ? (
          <div className=" w-screen overflow-y-scroll my-12">
            {cart.map((product) => {
              return (
                <div className="flex justify-between m-2  ">
                  <div className="flex gap-3">
                    <img
                      src={product.image01}
                      alt="img"
                      className="w-10 h-10"
                    />

                    <div className="flex flex-col gap-2">
                      <p>{product.title}</p>
                      <div className="flex justify-between">
                        {" "}
                        <p>{product.qty}x</p>
                        <p>${product.price}</p>
                      </div>

                      <div className="flex justify-between  bg-pink-200 p-2 rounded ">
                        <button
                          onClick={() => {
                            dispatch(addQty(product.id));
                          }}
                        >
                          +
                        </button>
                        <p>1</p>
                        <button
                          onClick={() => {
                            dispatch(reduceQty(product.id));
                          }}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="self-center"
                    onClick={(e) => {
                      dispatch(deleteToCart(product.id));
                    }}
                  >
                    <GrFormClose size={24} />
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center text-red-600"> No Items in card</div>
        )}

        <div className="p-5 flex flex-col gap-3 ">
          <p className="bg-red-600 p-4 text-white text-center rounded">
            Subtotal : ${subTotal}
          </p>
          <button className="bg-red-600 text-white p-4 rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
