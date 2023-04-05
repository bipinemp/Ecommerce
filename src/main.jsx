import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductsProvider from "./context/productsContext";
import CartProvider from "./context/cartContext";
import FavouriteProvider from "./context/favouriteContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <ProductsProvider>
        <ToastContainer />
        <FavouriteProvider>
          <App />
        </FavouriteProvider>
      </ProductsProvider>
    </CartProvider>
  </React.StrictMode>
);
