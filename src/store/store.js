import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer, toogleReducer } from "./reducer/cartReducer";
const rootReducer = combineReducers({
  toggle: toogleReducer,
  cart: cartReducer,
});

const initialState = {
  toggle: false,
  cart: { cartItems: [] },
};

const store = createStore(rootReducer, initialState, composeWithDevTools());

export default store;
