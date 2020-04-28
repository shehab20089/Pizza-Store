import { combineReducers } from "redux";
import authReducer from "./authReducer/index";
import productReducer from "./productReducer/index";

//import and add more child reducers as your project builds.
export default combineReducers({
  authReducer,
  productReducer
});
