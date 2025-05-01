import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React, { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = ["/finance.png", "/reactRedux.png", "/klinik.png", "/disasters.png"];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="relative w-full overflow-hidden">
      <div
        id="carousel"
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel Image ${index}`}
            className="w-full h-[450px] object-cover"
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
        {/* Left button */}
        <button
          onClick={prevSlide}
          className=" text-white border hover:border-none hover:bg-[#0463fA] p-2 rounded-full transition-colors duration-200 ease-in-out "
        >
          <ChevronLeft />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {images.map((_, item) => (
            <div
              key={item}
              className={`h-3 w-3 rounded-full  ${
                currentSlide === item
                  ? "bg-[#0463fA]"
                  : "border border-[#ffffff]"
              }`}
            />
          ))}
        </div>

        {/* Right button */}
        <button
          onClick={nextSlide}
          className=" text-white border hover:border-none hover:bg-[#0463fA] p-2 rounded-full transition-colors duration-200 ease-in-out  "
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
