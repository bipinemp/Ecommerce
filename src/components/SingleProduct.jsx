import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../context/productsContext";
import Rating from "./Rating";
import "../styles/products.css";
import { cartContext } from "../context/cartContext";
import Quantity from "./Quantity";
import { toast, Flip } from "react-toastify";

function SingleProduct() {
  const { productId } = useParams();
  const { state } = useContext(productsContext);
  const { dispatch: dispatch1 } = useContext(cartContext);
  const [showMore, setShowMore] = useState(false);
  const [quan, setQuan] = useState(1);

  const toggleshowmore = () => setShowMore(!showMore);

  const prod = state.products.find((item) => item.id === Number(productId));
  const displayText = prod.description;
  const updatedProd = {
    ...prod,
    description: showMore ? displayText : displayText.slice(0, 300),
  };
  const [activeImg, setActiveImg] = useState(prod.images[0]);
  const [boder, setBoder] = useState("img1");

  const handleDecrement = () => {
    if (quan > 1) {
      setQuan(quan - 1);
    }
  };
  const handleIncrement = () => {
    setQuan(quan + 1);
  };

  const addToCart = (val) => {
    dispatch1({ type: "ADD_TO_CART", payload: val, quan: quan });
    toast.success("Item Added To Cart", {
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
  };

  return (
    <div className="singleProduct">
      <div className="singleProductleft">
        <div>
          <img src={activeImg} alt="product" />
        </div>
        <div>
          <img
            src={prod.images[0]}
            alt="product"
            onMouseOver={() => {
              setActiveImg(prod.images[0]);
              setBoder("img1");
            }}
            style={{
              border: boder === "img1" ? "2px solid var(--LightGreen)" : "",
            }}
          />
          <img
            src={prod.images[1]}
            alt="product"
            onMouseOver={() => {
              setActiveImg(prod.images[1]);
              setBoder("img2");
            }}
            style={{
              border: boder === "img2" ? "2px solid var(--LightGreen)" : "",
            }}
          />
          <img
            src={prod.images[2]}
            alt="product"
            onMouseOver={() => {
              setActiveImg(prod.images[2]);
              setBoder("img3");
            }}
            style={{
              border: boder === "img3" ? "2px solid var(--LightGreen)" : "",
            }}
          />
          <img
            src={prod.images[3]}
            alt="product"
            onMouseOver={() => {
              setActiveImg(prod.images[3]);
              setBoder("img4");
            }}
            style={{
              border: boder === "img4" ? "2px solid var(--LightGreen)" : "",
            }}
          />
        </div>
      </div>
      <div className="singleProductright">
        <div>
          <h1>{prod.name}</h1>
          <p>
            {updatedProd.description}
            <span onClick={toggleshowmore} className="showmore">
              {showMore ? "Show Less ..." : "... Show More"}
            </span>
          </p>
          <div className="singlerating">
            <Rating stars={prod.rating} reviews={prod.reviews} />
          </div>
        </div>
        <div>
          <Quantity
            quan={quan}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
          <p>
            <span>Price:&nbsp; </span> ${prod.price}
          </p>
        </div>
        <div>
          <button onClick={() => addToCart(prod)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
