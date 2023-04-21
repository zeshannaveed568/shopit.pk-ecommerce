import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className='slider'>
      <div
        className='container'
        style={{
          transform: `translate(-${currentSlide * 100}vw)`,
        }}
      >
        <img src='assets/images/Slider1.jpg' alt='' />
        <img src='assets/images/Slider2.jpg' alt='' />
        <img src='assets/images/Slider3.jpg' alt='' />
      </div>
      <div className='icons'>
        <div className='icon' onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className='icon' onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
