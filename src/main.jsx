import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductsProvider from "./context/productsContext";
import CartProvider from "./context/cartContext";
import FavouriteProvider from "./context/favouriteContext";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <ProductsProvider>
        <FavouriteProvider>
          <App />
          <Toaster />
        </FavouriteProvider>
      </ProductsProvider>
    </CartProvider>
  </React.StrictMode>
);
