const initialState = { loading: true, categories: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case "products/loadingStart":
      return { ...state, loading: action.payload };

    case "products/fetched":
      return {
        loading: false,
        categories: action.payload,
      };

    case "products/fetchedById":
      return {
        loading: false,
        categories: action.payload,
      };
    default:
      return state;
  }
};
