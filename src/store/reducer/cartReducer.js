import { hide_cart, show_cart } from "../types/actionTypes";

const initialState = false;
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case show_cart:
      return {
        ...state,
        cart: true,
      };
    case hide_cart:
      return {
        ...state,
        cart: false,
      };

    default:
      return state;
  }
};
