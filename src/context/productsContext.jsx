import { createContext, useReducer } from "react";
import { INITIAL_STATE, reducer } from "../reducers/productsReducer";

export const productsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <productsContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsProvider;
