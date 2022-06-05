import React from "react";
import image1 from "../../Images/photo_1.jpg";
import image4 from "../../Images/picture_4.jpg";
import image5 from "../../Images/picture_5.jpg";
import Slider from "react-slick";
import style from "./HomeSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={style.homeSlide}>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="image1" />
        </div>
        <div>
          <img src={image4} alt="image4" />
        </div>
        <div>
          <img src={image5} alt="image4" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
