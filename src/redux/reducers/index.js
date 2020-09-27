import { combineReducers } from "redux";
import user from "./user";
import home from "./home";
import product from "./product";
import cart from "./cart";
import order from "./order";

const rootReducers = combineReducers({
  user,
  home,
  product,
  cart,
  order
});

export default rootReducers;
