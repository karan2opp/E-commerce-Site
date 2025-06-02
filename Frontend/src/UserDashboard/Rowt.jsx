import React, { useEffect } from 'react'
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Lap1 from "../assets/images/Lenovo.webp"
import Lap2 from "../assets/images/HP-15.jpg"
import Lap3 from "../assets/images/selllap.png"
import Lap4 from "../assets/images/HP-13.webp"
import Lap5 from "../assets/images/acer.webp"


const refurb=[
  {
    img:Lap1,
    dis: "99",
    disc:"Acer Aspire-7 intel core i5 11th gen",
    price:"199"
  },
   {
    img:Lap2,
    dis: "99",
    disc:"Acer Aspire-7 intel core i5 11th gen",
    price:"299"
  },
   {
    img:Lap3,
    dis: "99",
    disc:"Acer Aspire-7 intel core i5 11th gen",
    price:"399"
  },
   {
    img:Lap4,
    dis: "99",
    disc:"Acer Aspire-7 intel core i5 11th gen",
    price:"499"
  },
   {
    img:Lap1,
    dis: "99",
    disc:"Acer Aspire-7 intel core i5 11th gen 12GB,512GB DDR4 Ram ,MS office 2025",
    price:"599"
  },
   {
    img:Lap5,
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
          arrows: false,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
           arrows: false,
        }
      },
       {
        breakpoint: 360,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
           arrows: false,
        }
      }
    ]

  };
 return(
  <div className="slider-container pl-2 pr-5  h-[300px] sm:h-[350px] overflow-x-hidden   w-screen flex justify-center sm:pr-2">

   {<Slider {...settings} className='  w-[80%]  sm:w-[90%] h-64 sm:h-80  '>
    
   {refurb.map((item) => (
       <div className=' px-2  '>
        <div className='  grid grid-rows-4 w-full  justify-items-center  sm:w-full h-60 sm:h-72 max-[400px]:h-56 border-[1px] rounded-sm border-gray-300 '>
          <div className='   row-span-2 h-[90%] w-full sm:w-full relative top-2 '>
            <img src={item.img} alt="" className='w-3/4 mx-auto   h-full sm:h-full' />
          </div>
          <div className='row-span-2  w-full ml-5 text-xs sm:text-sm font-sans font-light '> 
             <span className=" rounded-xs  bg-[#fce6c3] ">₹ 7000 OFF</span>
             <p className="">{item.disc} </p>
             
             <h1 className=' inline relative top-2  '> ₹69000 </h1>
             <button className=" bg-[#1d3d93] text-white rounded-xs w-1/2 block mt-2 ">Lowest Price</button>
          </div>
        </div> </div>
   ))} 
    
      </Slider> } 
  </div>
 )
}

export default Rowt
