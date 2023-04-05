import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/favourite.css";
import { favouriteContext } from "../context/favouriteContext";
import Rating from "../components/Rating";

function Favourite() {
  const { state } = useContext(favouriteContext);
  const navigate = useNavigate();
  return (
    <div className="favourite">
      <h1 className="favtitle">Favourites</h1>
      {state.favourite.length > 0 ? (
        <div className="favouriteitems">
          {state.favourite.map((prod) => (
            <div
              className="favouriteitem"
              onClick={() => navigate(`/product/${prod.id}`)}
            >
              <img src={prod.images[0]} alt="product" />
              <h1>{prod.name}</h1>
              <Rating stars={prod.rating} reviews={prod.reviews} />
            </div>
          ))}
        </div>
      ) : (
        <div className="errorfav">
          <p className="favouriteerror">
            No items added in Favourites &nbsp;&nbsp;:)
          </p>
          <button className="favouritebtn" onClick={() => navigate("/")}>
            Continue Shopping {">>"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Favourite;
