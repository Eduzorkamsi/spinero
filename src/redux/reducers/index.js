import { combineReducers } from "redux";
import user from "./user";
import home from "./home";
import product from "./product";

const rootReducers = combineReducers({
  user,
  home,
  product
});

export default rootReducers;
