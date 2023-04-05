import React from "react";
import headphones_c_1 from "../assets/headphones_c_1.webp";
import "../styles/footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer1">
        <div>
          <p>20% OFF</p>
          <h1>FINE SMILE</h1>
          <p>30 Mar to 10 Apr</p>
        </div>
        <img src={headphones_c_1} alt="" />
        <div>
          <p>Beats Solo Air</p>
          <h1>Summer Sale</h1>
          <p className="company">
            company that's grown from 270 to 480 employees in the last 12
            months.
          </p>
          <button onClick={() => navigate(`/product/3`)}>Shop Now</button>
        </div>
      </div>
      <div className="footer2">
        <h3>&copy; 2023 Shopper&nbsp; All Rights Reversed.</h3>
      </div>
    </div>
  );
}

export default Footer;
