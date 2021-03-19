// src/store/reducer.js
import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";
import productsSliceReducer from "./products/reducer";
import userSliceReducer from "./user/reducer";

const reducer = combineReducers({
  // someFeature: someFeatureReducer
  product: productsSliceReducer,
  user: userSliceReducer,

  // etc...
});

export default reducer;
