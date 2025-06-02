import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  { img: "/myzone1.png" },
  { img: "/myzone.png" },
  { img: "/myzone2.png" },
  { img: "/myzone3.png" },
];

function Arrow({ onClick, direction }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 z-20 p-2 bg-gray-300 bg-opacity-70 hover:bg-opacity-100 transition shadow-white shadow-2xl rounded-lg -translate-y-1/2 ${
        direction === "left"
          ? "left-0 -translate-x-9 rounded-l-lg"
          : "right-0 translate-x-9 rounded-r-lg"
      }`}
      aria-label={`${direction === "left" ? "Previous" : "Next"} Slide`}
    >
      <img
        src={direction === "left" ? "/left-chevron.png" : "/chevron.png"}
        alt=""
        className="w-5 h-4"
      />
    </button>
  );
}

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
  
    responsive:[
    {
        breakpoint: 600,
        settings: {
        
          arrows: false,
          
        }
      },]
  };

  return (
    <div className="w-screen  overflow-hidden relative h-[250px] sm:h-[300px] flex items-center justify-center  ">
     
     
      <Slider {...settings} className=" w-[95%] sm:w-3/4 h-[200px] sm:h-[250px]  ">
        {data.map((slide, index) => (
          <div key={index} className="w-full h-[180px] sm:h-[240px] outline-none ">
            <img src={slide.img} alt="" className="w-full h-full rounded-lg " />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
