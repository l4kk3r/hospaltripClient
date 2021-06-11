import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slide = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="slidedddderrr">
      <Slider {...settings} className="slidedddd">
        <div className="slider_page_div_hhhh">
          <p className="slider_page_div_hhhh_p">
            It is only digital
            <br /> platform that covers many countries and the best clinics.{" "}
            <br /> Great job!
          </p>
          <h3 className="slider_page_div_hhhh_h">Benali Ousama</h3>
          <p className="slider_page_div_hhhh_pp">Morocco</p>
        </div>
        <div className="slider_page_div_hhhh">
          <p className="slider_page_div_hhhh_p">
            In Bangladesh, it is quite dificult for me to find a good clinic
            that <br />
            best suits me for different criteria.
            <br /> The Hospaltrip guys came up with a great option. And it's
            free.
          </p>
          <h3 className="slider_page_div_hhhh_h">Aminul Begun</h3>
          <p className="slider_page_div_hhhh_pp">Bangladesh</p>
        </div>
      </Slider>
    </div>
  );
};

export default Slide;
