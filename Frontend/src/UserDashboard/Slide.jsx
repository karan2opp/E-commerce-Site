import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const refurb = [
  {
    img: "/selllap.png",
    dis: "99",
    disc: "Acer Aspire-7 intel core i5 11th gen",
    price: "199",
  },
  {
    img: "/selllap.png",
    dis: "99",
    disc: "Acer Aspire-7 intel core i5 11th gen",
    price: "299",
  },
  {
    img: "/selllap.png",
    dis: "99",
    disc: "Acer Aspire-7 intel core i5 11th gen",
    price: "399",
  },
  {
    img: "/selllap.png",
    dis: "99",
    disc: "Acer Aspire-7 intel core i5 11th gen",
    price: "499",
  },
  {
    img: "/selllap.png",
    dis: "99",
    disc: "Acer Aspire-7 intel core i5 11th gen",
    price: "599",
  },
  {
    img: "/selllap.png",
    dis: "99",
    disc: "Acer Aspire-7 intel core i5 11th gen",
    price: "699",
  },
];
function Arrow({ onClick, direction }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 z-20 p-2 bg-gray-300 bg-opacity-100 hover:bg-opacity-100 transition shadow-white shadow-2xl rounded-lg -translate-y-1/2 ${
        direction === "left" ? "lg:left-2 left-0" : "lg:right-2 right-0"
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


function MultipleItems() {
  const [slidesToShow, setSlidesToShow] = useState(4);

 useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 640) {
      setSlidesToShow(2); // small screens
    } else if (width >= 640 && width < 1024) {
      setSlidesToShow(3); // medium screens
    } else {
      setSlidesToShow(4); // large screens and above
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
    
   
  };

  return (
    <div className="w-screen h-72 flex justify-center overflow-x-hidden relative">
      <Slider {...settings} className="w-full h-[90%] relative">
        {refurb.map((ref, index) => (
          <div key={`slide${index}`} className="px-1.5"> 
            <div className="col-span-1 h-full border-[1px] rounded-lg border-gray-200 flex flex-col w-2/3 mx-auto">
              <div className="w-full h-1/2 flex justify-center">
                <img src={ref.img} alt={ref.disc} className="w-3/4 mt-3" />
              </div>
              <div className="text-sm ml-3 mt-5 grid grid-rows-5">
                <h1 className="bg-[#fce5bf] w-1/3 row-span-1">{ref.dis} OFF</h1>
                <p className="text-sm row-span-2 w-full">{ref.disc}</p>
                <button className="bg-[#1d3d93] sm:text-sm text-xs lg:w-1/2 sm:w-2/3 w-3/4 text-white row-span-1">
                  Lowest Price
                </button>
                <h1 className="text-sm row-span-1">${ref.price}</h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;