import axios from "axios";
import { useParams } from "react-router";

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
    console.log("Products response", response.data);
    dispatch(productsList(response.data));
  };
}

export function productById(data) {
  console.log(`DATA by id`, data);
  return {
    type: "products/fetchedById",
    payload: data,
  };
}

export function fetchproductById(id) {
  // console.log("id at the action", id);
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/products/${id}`);
    console.log("Products by pk response", response.data);
    dispatch(productById(response.data));
  };
}
