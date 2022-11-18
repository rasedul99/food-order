import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideCartToggle } from "../../store/actions/cartActions";

const Carts = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  localStorage.setItem("cart", JSON.stringify(cart));
  return (
    <div className="fixed top-0 left-0 w-full bg-black bg-opacity-50 h-full  z-40">
      <div className="absolute top-0 right-0 w-96 h-full bg-white  z-50">
        <button
          onClick={() => {
            dispatch(hideCartToggle());
          }}
          className="mx-2 mb-5"
        >
          X
        </button>
        {cart.length > 0 ? (
          <>
            {cart.map((product) => {
              return (
                <div className="flex justify-between m-2">
                  <div className="flex gap-3 ">
                    <img
                      src={product.image01}
                      alt="img"
                      className="w-10 h-10"
                    />

                    <div className="flex flex-col gap-2">
                      <p>{product.title}</p>
                      <div className="flex justify-between">
                        {" "}
                        <p>1x</p>
                        <p>${product.price}</p>
                      </div>

                      <div className="flex justify-between  bg-pink-200 p-2 rounded ">
                        <p>+</p>
                        <p>1</p>
                        <p>-</p>
                      </div>
                    </div>
                  </div>
                  <div className="self-center">x</div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="text-center text-red-600"> No Items in card</div>
        )}

        <div className="absolute bottom-0 w-full">
          <div className="bg-red-600  p-5 flex items-center  justify-between">
            <p className="text-white">Subtotal : $0</p>
            <button className="bg-white p-2 rounded">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
