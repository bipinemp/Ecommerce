import React from "react";
import "../styles/global.css";

function Quantity({ quan, handleIncrement, handleDecrement }) {
  return (
    <div className="incdec">
      <button onClick={handleDecrement} disabled={quan <= 1}>
        -
      </button>
      <span className="quantityvalue">{quan}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Quantity;
