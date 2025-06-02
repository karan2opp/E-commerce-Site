import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../assets/images/myzone.png"
import Img2 from "../assets/images/myzone1.png"
import Img3 from "../assets/images/myzone2.png"
import Img4 from "../assets/images/myzone3.png"
import Rbutton from "../assets/images/chevron.png"
import Lbutton from "../assets/images/left-chevron.png"
const data = [
  Img1,Img2,Img3,Img4
];

function Arrow({ onClick, direction }){
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
        src={direction === "left" ? `${Lbutton}` : `${Rbutton}`}
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
            <img src={slide} alt="" className="w-full h-full rounded-lg " />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
