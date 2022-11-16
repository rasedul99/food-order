import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer, toogleReducer } from "./reducer/cartReducer";
const rootReducer = combineReducers({
  toggle: toogleReducer,
  cart: cartReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
