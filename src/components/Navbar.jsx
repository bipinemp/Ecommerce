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
import { favouriteContext } from "../context/favouriteContext";

function Navbar() {
  const navigate = useNavigate();
  const { state } = useContext(productsContext);
  const { state: state1 } = useContext(cartContext);
  const { state: state2 } = useContext(favouriteContext);
  const [searchValue, setSearchValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [display, setDisplay] = useState(false);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setShowDropdown(true);
  };

  let ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const searchFocus = () => {
    setDisplay(!display);
  };
  const searchFocusOut = () => {
    setDisplay(false);
  };

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
              <a href="#">Location</a> <BsChevronDown />
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
          <li id={display ? "none" : "notnone"}>
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
                onFocus={searchFocus}
                onBlur={searchFocusOut}
                id="searchinput"
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
                        <p style={{ fontWeight: "bold" }}>${item.price}</p>
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div id={display ? "none" : "notnone"}>
              <NavLink
                to="/favourites"
                style={({ isActive }) => ({
                  color: isActive ? "var(--LightGreen)" : "var(--DarkBlack)",
                })}
                className="cartlink"
              >
                <AiOutlineHeart fontSize="25px" className="navicon" />
                {state2.favourite.length > 0 && (
                  <span style={{ backgroundColor: "crimson" }}>
                    {state2.favourite.length}
                  </span>
                )}
              </NavLink>
              <NavLink
                to="/cart"
                style={({ isActive }) => ({
                  color: isActive ? "var(--LightGreen )" : "var(--DarkBlack)",
                })}
                className="cartlink"
              >
                <AiOutlineShoppingCart fontSize="25px" className="navicon" />
                {state1.cart.length > 0 && <span>{state1.cart.length}</span>}
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
