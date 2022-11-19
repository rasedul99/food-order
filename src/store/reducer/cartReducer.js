import {
  ADD_TO_CART,
  DELETE_TO_CART,
  hide_cart,
  show_cart,
} from "../types/actionTypes";

export const toogleReducer = (state = false, action) => {
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
    case DELETE_TO_CART:
      const deleteProduct = action.payload;
      console.log(deleteProduct);
      console.log(deleteProduct);
      const restProduct = state.cartItems.filter(
        (item) => item.id !== deleteProduct
      );
      console.log(restProduct);

      return {
        ...state,
        cartItems: restProduct,
      };

    default:
      return state;
  }
};
