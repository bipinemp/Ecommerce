import React, { useContext, useEffect } from "react";
import { cartContext } from "../context/cartContext";
import { AiOutlineShopping } from "react-icons/ai";
import { toast, Flip } from "react-toastify";
import "../styles/cart.css";
import Rating from "./Rating";
import "../styles/global.css";
import Checkout from "./Checkout";
import Modal from "./Modal";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import checked from "../assets/checked.png";

function Cart() {
  const navigate = useNavigate();
  const { state, dispatch, modal, setModal, success, setSuccess } =
    useContext(cartContext);

  const handleDecrement = (item) => {
    dispatch({ type: "DECREMENT", payload: item });
  };
  const handleIncrement = (item) => {
    dispatch({ type: "INCREMENT", payload: item });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart, dispatch]);

  return (
    <div className="cartmain">
      <Modal
        open={modal}
        close={() => {
          setModal(false);
          document.body.classList.remove("noscroll");
        }}
      >
        <Form />
      </Modal>
      {success && (
        <>
          <div className="successoverlay" />
          <div className="success">
            <img src={checked} alt="checked" style={{ maxWidth: "150px" }} />
            <h1>
              Your order has been <br /> accepted
            </h1>
            <p>Transaction ID: {(123456798 * Math.random()).toFixed()}</p>
            <button
              onClick={() => {
                navigate("/");
                setSuccess(false);
                document.body.classList.remove("noscroll");
              }}
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
      <div className="carttitle">
        <div>
          <AiOutlineShopping fontSize="70px" />
          <h1>My Cart</h1>
        </div>
      </div>
      {state.cart.length > 0 ? (
        <div className="cartcheckout">
          <div className="cart">
            {state.cart.map((item) => (
              <div className="cartitem">
                <img src={item.images[0]} alt="product" width="100px" />
                <div className="cartitemtitle">
                  <div>
                    <h1>{item.name}</h1>
                    <p>
                      <Rating stars={item.rating} reviews={item.reviews} />
                    </p>
                  </div>
                  <div>
                    <p
                      onClick={() => {
                        dispatch({ type: "REMOVE_FROM_CART", payload: item });
                        toast.error("Item removed from Cart", {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: false,
                          progress: undefined,
                          theme: "colored",
                          transition: Flip,
                        });
                      }}
                    >
                      Remove
                    </p>
                  </div>
                </div>
                <div className="incdec">
                  <button
                    onClick={() => handleDecrement(item)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantityvalue">{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
                <div className="priceeachtotal">
                  <div>
                    <p className="bold">Each</p>
                    <p>$ {item.price}</p>
                  </div>
                  <div>
                    <p className="bold">Total</p>
                    <p className="totalvalue">$ {item.quantity * item.price}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="grandtotal">
              <h3>
                {state.cart.length} item
                {state.cart.length > 1 && <span>s</span>}
              </h3>
              <h3>${state.total}</h3>
            </div>
          </div>
          <Checkout />
        </div>
      ) : (
        <p className="noitemincart">
          No items in Cart &nbsp;&nbsp;:(
          <br />{" "}
          <button className="shopping" onClick={() => navigate("/")}>
            Continue Shopping <span>{" >>"}</span>
          </button>
        </p>
      )}
    </div>
  );
}

export default Cart;
