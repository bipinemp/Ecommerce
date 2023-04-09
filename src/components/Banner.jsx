import React from "react";
import bann1 from "../assets/bann1.jpg";
import bann2 from "../assets/bann2.jpg";
import bann3 from "../assets/bann3.jpg";
import Carousel from "./Carousel";

function Banner() {
  const images = [bann1, bann2, bann3];

  return (
    <div className="banner">
      <Carousel autoSlide={true}>
        {images.map((s, i) => (
          <img
            src={s}
            alt="bannerimg"
            style={{
              objectFit: "contain",
              filter: "brightness(105%)",
              borderRadius: "5px",
              userSelect: "none",
            }}
            key={i}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
