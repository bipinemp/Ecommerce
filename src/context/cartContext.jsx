import { createContext, useReducer, useState } from "react";
import { INITIAL_STATE, reducer } from "../reducers/cartReducer";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <cartContext.Provider
      value={{
        state,
        dispatch,
        modal,
        setModal,
        success,
        setSuccess,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
