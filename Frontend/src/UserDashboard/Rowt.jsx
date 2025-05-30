import React, { useEffect } from 'react'
import { useState } from 'react';
import Slider from "react-slick";

const refurb=[
  {
    img:"/selllap.png",
    dis: "99",
    disc:"Acer Aspire-7 intel core i5 11th gen",
    price:"199"
  },
   {
    img:"/selllap.png",
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
    img:"/selllap.png",
    dis: "99",
    disc:"Acer Aspire-7 intel core i5 11th gen",
    price:"499"
  },
   {
    img:"/selllap.png",
    dis: "99",
    disc:"Acer Aspire-7 intel core i5 11th gen",
    price:"599"
  },
   {
    img:"/selllap.png",
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
  };
 return(
  <div className="slider-container overflow-x-hidden h-screen w-screen flex justify-center bg-red-600">

   {<Slider {...settings} className='w-[90%] h-68 bg-amber-300   '>
    
   {refurb.map((item) => (
       <div className='px-2'>
        <div className='  grid grid-rows-2 h-64   border-2 '>
          <div className='row-span-1 w-full flex items-center justify-center'>
            <img src={item.img} alt="" className='w-full h-full' />
          </div>
          <div className='row-span-1 w-full'> 
             <h1 className="  inline-block bg-red-200">7000 OFF</h1>
             <p className="">Acer Aspire 7 intel i5 </p>
             
             <h1 className=' inline '> 69000 </h1>
             <button className=" bg-red-400 block">Lowest Price</button>
          </div>
        </div> </div>
   ))} 
    
      </Slider> } 
  </div>
 )
}

export default Rowt
