import axios from "axios";

const apiUrl = process.env.API_URL || "//localhost:4000";

export function productsList(data) {
  console.log(`DATA`, data);
  return {
    type: "products/fetched",
    payload: data,
  };
}

export function fetchProducts() {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/products`);
    console.log("Products response", response.data.category);
    dispatch(productsList(response.data));
  };
}
