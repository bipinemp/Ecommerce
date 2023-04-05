import React, { useContext, useState, useEffect, useRef } from "react";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsTelephone, BsChevronDown } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.png";
import { productsContext } from "../context/productsContext";
import { cartContext } from "../context/cartContext";

function Navbar() {
  const navigate = useNavigate();
  const { state } = useContext(productsContext);
  const { state: state1 } = useContext(cartContext);
  const [searchValue, setSearchValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setShowDropdown(true);
  };

  let ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="navbar">
      <div className="topnavbar">
        <ul>
          <li>
            <BsTelephone /> +00123456789
          </li>
          <li>
            <span>Get 50% Off on Selected Items | </span>
            <NavLink to="/">Shop Now</NavLink>
          </li>
          <li>
            <span>
              <a href="#">Eng</a> <BsChevronDown />
            </span>
            <span>
              <a href="#">Loaction</a> <BsChevronDown />
            </span>
          </li>
        </ul>
      </div>
      <nav>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="website_logo" width="40px" />
          <span>Shopper</span>
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "var(--LightGreen)" : "var(--DarkBlack)",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <div className="search">
              <span>
                <AiOutlineSearch fontSize="20px" />
              </span>
              <input
                type="text"
                placeholder="Search Product"
                value={searchValue}
                onChange={handleChange}
              />
              {showDropdown && (
                <div className="dropdown" ref={ref}>
                  {state.products
                    .filter((item) => {
                      const searchProduct = searchValue.toLowerCase();
                      const name = item.name.toLowerCase();

                      if (searchProduct && name.startsWith(searchProduct)) {
                        return true;
                      }
                    })
                    .map((item) => (
                      <div
                        className="searchproduct"
                        onClick={() => {
                          navigate(`/product/${item.id}`);
                          setShowDropdown(false);
                        }}
                      >
                        <img src={item.images[0]} alt="product" />
                        <p>{item.name}</p>
                        <p>$ {item.price}</p>
                      </div>
                    ))}
                </div>
              )}
            </div>
            <NavLink
              to="/favourites"
              style={({ isActive }) => ({
                color: isActive ? "var(--LightGreen)" : "var(--DarkBlack)",
              })}
            >
              <AiOutlineHeart fontSize="25px" />
            </NavLink>
            <NavLink
              to="/cart"
              style={({ isActive }) => ({
                color: isActive ? "var(--LightGreen )" : "var(--DarkBlack)",
              })}
              className="cartlink"
            >
              <AiOutlineShoppingCart fontSize="25px" />
              {state1.cart.length > 0 && <span>{state1.cart.length}</span>}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
