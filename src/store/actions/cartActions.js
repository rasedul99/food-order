import { hide_cart, show_cart } from "../types/actionTypes";
export const showCartToggle = () => {
  return {
    type: show_cart,
    payload: true,
  };
};
export const hideCartToggle = () => {
  return {
    type: hide_cart,
    payload: false,
  };
};
