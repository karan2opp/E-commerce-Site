import React, { useEffect } from 'react'
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const refurb=[
  {
    img:"/Lenovo.webp",
    dis: "99",
    disc:"Acer Aspire-7 intel core i5 11th gen",
    price:"199"
  },
   {
    img:"/HP-15.jpg",
    dis: "99",
    disc:"Acer Aspire-7 intel core i5 11th gen",
    price:"299"
  },
   {
    img:"/selllap.png",
    dis: "99",
    disc:"Acer Aspire-7 intel core i5 11th gen",
    price:"399"
  },
   {
    img:"/HP-13.webp",
    dis: "99",
    disc:"Acer Aspire-7 intel core i5 11th gen",
    price:"499"
  },
   {
    img:"/Lenovo.webp",
    dis: "99",
    disc:"Acer Aspire-7 intel core i5 11th gen",
    price:"599"
  },
   {
    img:"/acer.webp",
    dis: "99",
    disc:"Acer Aspire-7 intel core i5 11th gen",
    price:"699"
  }
]

const Rowt = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
        responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1
        }
      },
       {
        breakpoint: 350,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1
        }
      }
    ]

  };
 return(
  <div className="slider-container pl-5 pr-5 h-[350px] overflow-x-hidden   w-screen flex justify-center sm:pr-2">

   {<Slider {...settings} className='w-[90%] h-80  '>
    
   {refurb.map((item) => (
       <div className=' px-2  '>
        <div className='  grid grid-rows-3 w-full justify-items-center  sm:w-full h-60 sm:h-72 border-[1px] rounded-sm border-gray-300 '>
          <div className='row-span-2 h-full w-3/4 sm:w-full  '>
            <img src={item.img} alt="" className='w-full  object-contain py-2   h-3/4 sm:h-full' />
          </div>
          <div className='row-span-1  w-full ml-5 text-xs sm:text-sm font-sans font-light '> 
             <span className=" rounded-xs  bg-[#fdebcf] ">₹ 7000 OFF</span>
             <p className="">Acer Aspire 7 intel i5 </p>
             
             <h1 className=' inline  '> ₹69000 </h1>
             <button className=" bg-[#1d3d93] text-white rounded-xs w-1/2 block mt-2 ">Lowest Price</button>
          </div>
        </div> </div>
   ))} 
    
      </Slider> } 
  </div>
 )
}

export default Rowt
