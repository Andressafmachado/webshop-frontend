import axios from "axios";
const apiUrl = process.env.API_URL || "//localhost:4000";

export function orderById(data) {
  console.log(`order by id`, data);
  return {
    type: "order/orderById",
    payload: data,
  };
}

export function fetchOrderById(id) {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/orders/${id}`);
    console.log("Order by pk response", response.data);
    dispatch(orderById(response.data));
  };
}
