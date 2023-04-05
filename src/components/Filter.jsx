import { AiOutlineCaretDown } from "react-icons/ai";
import { IoOptions } from "react-icons/io5";
import { useContext, useState } from "react";
import { productsContext } from "../context/productsContext";
import "../styles/products.css";

function Filter() {
  const { dispatch } = useContext(productsContext);
  const [priceValue, setPriceValue] = useState("all");
  const [ratingValue, setRatingValue] = useState("all");

  const handleChange1 = (e) => {
    dispatch({ type: "ACC_TO_TYPE", payload: e.target.value });
    setPriceValue("all");
    setRatingValue("all");
  };

  const handleChange2 = (e) => {
    dispatch({ type: "ACC_TO_PRICE", payload: e.target.value });
    setPriceValue(e.target.value);
  };

  const handleChange3 = (e) => {
    dispatch({ type: "ACC_TO_RATING", payload: e.target.value });
    setRatingValue(e.target.value);
  };

  return (
    <div className="filter">
      <div>
        <span>Headphone Type :</span>
        <select onChange={handleChange1}>
          <option value="all">All</option>
          <option value="headphone">Headphone</option>
          <option value="earphone">Earphone</option>
          <option value="watch">Watch</option>
          <option value="speaker">Speaker</option>
          <option value="airpod">Airpod</option>
        </select>
        <span className="icon-container">
          <AiOutlineCaretDown />
        </span>
      </div>
      <div>
        <span>Price :</span>
        <select value={priceValue} onChange={handleChange2}>
          <option value="all">All</option>
          <option value="lowprice">Low - High</option>
          <option value="highprice">High - Low</option>
        </select>
        <span className="icon-container">
          <AiOutlineCaretDown />
        </span>
      </div>
      <div>
        <span>Rating :</span>
        <select value={ratingValue} onChange={handleChange3}>
          <option value="all">All</option>
          <option value="lowrating">Low - High</option>
          <option value="highrating">High - Low</option>
        </select>
        <span className="icon-container">
          <AiOutlineCaretDown />
        </span>
      </div>
      <div>
        <p>All Filters</p>
        <IoOptions />
      </div>
    </div>
  );
}

export default Filter;
