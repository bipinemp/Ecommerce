import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../context/cartContext";
import "../styles/cart.css";

function Checkout() {
  const { state, dispatch, setModal } = useContext(cartContext);
  const [promoCode, setPromoCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "PROMO_CODE", payload: promoCode });
  };

  useEffect(() => {
    dispatch({ type: "SUMMARY_TOTAL" });
  }, [state.cart, state.total, state.shipping, state.discount]);

  return (
    <div className="checkout">
      <div>
        <label htmlFor="checkout">ENTER PROMO CODE</label>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="checkout"
            placeholder="PROMO CODE"
            onChange={(e) => setPromoCode(e.target.value)}
            value={promoCode}
          />
          <button type="submit">Submit</button>
        </form>
        {state.error && <p className="invalidpromo">Invalid PROMO CODE :(</p>}
      </div>
      <div>
        <h3>Order Summary</h3>
        <div>
          <p>
            Subtotal ({state.cart.length} item
            {state.cart.length > 1 && <span>s</span>})
          </p>
          <p>${state.total}</p>
        </div>
        <div>
          <p>Shipping Fee</p>
          <p>${state.shipping}</p>
        </div>
        <div>
          <p>Discount</p>
          <p>${state.discount > 0 ? state.discount : 0}</p>
        </div>
      </div>
      <div className="summtotal">
        <h3>Total :</h3>
        <p className="summarytotal">${state.summary}</p>
      </div>
      <div>
        <button
          onClick={() => {
            setModal(true);
            document.body.classList.add("noscroll");
          }}
        >
          PROCEED TO CHECKOUT ({state.cart.length})
        </button>
      </div>
    </div>
  );
}

export default Checkout;
