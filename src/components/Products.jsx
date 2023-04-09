import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/products.css";
import Rating from "./Rating";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Filter from "./Filter";
import { favouriteContext } from "../context/favouriteContext";

function Products({ state }) {
  const navigate = useNavigate();
  const { state: state1, dispatch } = useContext(favouriteContext);

  const addtofavourite = (val) => {
    dispatch({ type: "ADD_TO_FAVOURITE", payload: val });
  };

  return (
    <div className="products">
      <Filter />
      <h1 className="producttitle">Headphones For You!</h1>
      <div className="productPage">
        {state.filter.map((item, index) => {
          const img = item.images[0];
          const isFavourite = state1.favourite.includes(item);

          return (
            <div
              className="product"
              onClick={(event) => {
                if (!event.target.classList.contains("favouritebtn")) {
                  navigate(`/product/${item.id}`);
                }
              }}
              key={index}
            >
              <div className="img">
                <img src={img} alt="product" />
                <span
                  className="favouritebtn"
                  onClick={(event) => {
                    event.stopPropagation();
                    addtofavourite(item);
                  }}
                  style={{ border: isFavourite && "1px solid var(--error)" }}
                >
                  {isFavourite ? (
                    <AiFillHeart
                      fontSize="20px"
                      className="iconheart"
                      style={{ fill: "var(--error)" }}
                    />
                  ) : (
                    <AiOutlineHeart
                      fontSize="20px"
                      className="iconheart"
                      style={{ fill: "var(--DarkBlack)" }}
                    />
                  )}
                </span>
              </div>
              <div className="names">
                <h1>{item.name}</h1>
                <p>
                  <span>$</span>
                  {item.price}&nbsp;&nbsp;
                </p>
              </div>
              <Rating stars={item.rating} reviews={item.reviews} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
