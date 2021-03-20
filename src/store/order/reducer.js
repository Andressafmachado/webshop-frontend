const initialState = { loading: true, products: [] };

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case "order/orderById":
      return {
        loading: false,
        categories: action.payload,
      };

      console.log(`ACTION`, action.payload);
    default:
      return state;
  }
}
