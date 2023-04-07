import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [current, setCurrent] = useState(0);
  const prev = () => {
    setCurrent((curr) => (curr === 0 ? slides.length - 1 : current - 1));
  };
  const next = () => {
    setCurrent((curr) => (curr === slides.length - 1 ? 0 : current + 1));
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <div
        style={{
          Width: "805px",
          display: "flex",
          transition: "transform 500ms ease-out",
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides}
      </div>
      <div
        style={{
          position: "absolute",
          inset: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AiOutlineLeft
          onClick={prev}
          fontSize="50px"
          color="var(--LightLightBlack)"
          cursor="pointer"
        />
        <AiOutlineRight
          onClick={next}
          fontSize="50px"
          color="var(--LightLightBlack)"
          cursor="pointer"
        />
      </div>
      <div style={{ position: "absolute", bottom: "10px", right: 0, left: 0 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {slides.map((_, index) => (
            <div
              style={{
                transition: "all 150ms linear",
                width: "6px",
                height: "6px",
                borderRadius: "25px",
                background: "white",
                padding: `${current === index ? "6px" : "3px"}`,
                opacity: `${current === index ? "1" : "0.5"}`,
              }}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
