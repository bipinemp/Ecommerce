export const INITIAL_STATE = {
  favourite: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      const favourites = state.favourite.includes(action.payload)
        ? state.favourite.filter((item) => item !== action.payload)
        : [...state.favourite, action.payload];
      return {
        ...state,
        favourite: favourites,
      };
    default:
      return state;
  }
};
