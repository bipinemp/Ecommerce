import React from "react";
import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.jpg";
import { useState } from "react";
import { useEffect } from "react";

function Banner() {
  const [current, setCurrent] = useState(0);

  const images = [
    { img: banner1, desc: "Hello world !!" },
    { img: banner2, desc: "Best framework reactjs" },
    { img: banner3, desc: "Free deal available hurry up !!" },
    { img: banner4, desc: "Grab Upto 50% Off " },
  ];

  const handlePrev = () => {
    setCurrent((curr) =>
      curr === images.length - 4 ? images.length - 1 : curr - 1
    );
  };
  const handleNext = () => {
    setCurrent((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    console.log(current);
  }, [current]);

  return (
    <div className="banner">
      {images.map((item, index) => {
        return (
          <div className="banneritem">
            <div>
              <h1>{item.desc}</h1>
              <button>Buy Now</button>
            </div>
            <img src={item.img} alt="bannerimages" />
          </div>
        );
      })}
      <div className="buttons">
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
      </div>
    </div>
  );
}

export default Banner;
