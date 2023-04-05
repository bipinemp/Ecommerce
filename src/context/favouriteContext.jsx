import { createContext, useReducer } from "react";
import { INITIAL_STATE, reducer } from "../reducers/favouriteReducer";

export const favouriteContext = createContext();

const FavouriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <favouriteContext.Provider value={{ state, dispatch }}>
      {children}
    </favouriteContext.Provider>
  );
};

export default FavouriteProvider;
