// src/store/reducer.js
import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";
import productsSliceReducer from "./products/reducer";
import userReducer from "./user/reducer";

const reducer = combineReducers({
  // someFeature: someFeatureReducer
  product: productsSliceReducer,
  user: userReducer,

  // etc...
});

export default reducer;
