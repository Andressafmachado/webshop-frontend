// src/store/reducer.js
import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";
import productsSliceReducer from "./products/reducer";

const reducer = combineReducers({
  // someFeature: someFeatureReducer
  product: productsSliceReducer,

  // etc...
});

export default reducer;
