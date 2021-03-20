// src/store/reducer.js
import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";
import productReducer from "./products/reducer";
import userReducer from "./user/reducer";
import orderReducer from "./order/reducer";

const reducer = combineReducers({
  // someFeature: someFeatureReducer
  product: productReducer,
  user: userReducer,
  order: orderReducer,

  // etc...
});

export default reducer;
