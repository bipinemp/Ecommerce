export const INITIAL_STATE = {
  cart: [],
  total: 0,
  shipping: 15,
  summary: 0,
  discount: 0,
  error: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const prodInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (prodInCart) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + action.quan };
          } else {
            return item;
          }
        });
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const updatedCart = [
          ...state.cart,
          { ...action.payload, quantity: action.quan },
        ];
        return { ...state, cart: updatedCart };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "INCREMENT":
      const incProd = state.cart.find((item) => item.id === action.payload.id);
      if (incProd) {
        const incProdUpdate = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return {
          ...state,
          cart: incProdUpdate,
        };
      }
    case "DECREMENT":
      const decProd = state.cart.find((item) => item.id === action.payload.id);
      if (decProd) {
        const decProdUpdate = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
            };
          } else {
            return item;
          }
        });
        return {
          ...state,
          cart: decProdUpdate,
        };
      }

    case "GET_TOTAL":
      const totalAmount = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      return {
        ...state,
        total: totalAmount,
      };

    case "SUMMARY_TOTAL":
      const upsummary = state.total + state.shipping;
      const updatedSummary = upsummary - state.discount;
      return {
        ...state,
        summary: updatedSummary,
      };
    case "PROMO_CODE":
      if (action.payload === "helloworld" && state.discount !== 10) {
        return {
          ...state,
          discount: 10,
          error: false,
        };
      } else if (
        (action.payload === "helloworld" || action.payload !== "helloworld") &&
        state.discount === 10
      ) {
        return {
          ...state,
          error: false,
        };
      } else {
        return {
          ...state,
          error: true,
        };
      }

    case "RESET_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
