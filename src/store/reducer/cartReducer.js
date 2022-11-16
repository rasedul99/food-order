import { ADD_TO_CART, hide_cart, show_cart } from "../types/actionTypes";

const initialState = false;
export const toogleReducer = (state = initialState, action) => {
  switch (action.type) {
    case show_cart:
      return {
        ...state,
        display_cart: true,
      };
    case hide_cart:
      return {
        ...state,
        display_cart: false,
      };

    default:
      return state;
  }
};

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;
      const exist = state.cartItems.find((item) => item.id === product.id);
      if (exist) {
        return state;
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    default:
      return state;
  }
};
