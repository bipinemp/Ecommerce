import { Products } from "../components/ProductsJson";

export const INITIAL_STATE = {
  products: Products,
  filter: Products,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ACC_TO_TYPE":
      let filteredProducts = Products;
      if (action.payload !== "all") {
        filteredProducts = Products.filter(
          (item) => item.type === action.payload
        );
      }
      return {
        ...state,
        filter: filteredProducts,
      };

    case "ACC_TO_PRICE":
      const sortedProducts = [...state.filter];
      if (action.payload === "highprice") {
        sortedProducts.sort((a, b) => b.price - a.price);
      } else {
        sortedProducts.sort((a, b) => a.price - b.price);
      }
      return {
        ...state,
        filter: sortedProducts,
      };

    case "ACC_TO_RATING":
      const sortedProducts2 = [...state.filter];
      if (action.payload === "highrating") {
        sortedProducts2.sort((a, b) => b.rating - a.rating);
      } else {
        sortedProducts2.sort((a, b) => a.rating - b.rating);
      }
      return {
        ...state,
        filter: sortedProducts2,
      };

    default:
      return state;
  }
};
