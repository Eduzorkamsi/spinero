import { combineReducers } from "redux";
import user from "./user";
import home from "./home";
import product from "./product";
import cart from "./cart";

const rootReducers = combineReducers({
  user,
  home,
  product,
  cart
});

export default rootReducers;
