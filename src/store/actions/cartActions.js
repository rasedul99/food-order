import {
  ADD_QTY,
  ADD_TO_CART,
  DELETE_TO_CART,
  hide_cart,
  REDUCE_QTY,
  show_cart,
} from "../types/actionTypes";
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

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const deleteToCart = (id) => {
  return {
    type: DELETE_TO_CART,
    payload: id,
  };
};
export const addQty = (id) => {
  return {
    type: ADD_QTY,
    payload: id,
  };
};
export const reduceQty = (id) => {
  return {
    type: REDUCE_QTY,
    payload: id,
  };
};
