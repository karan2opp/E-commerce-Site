import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlide from './ImageSlide'
import Rows from './rows'
import Rowt from './Rowt'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Services=[{
name:"Sell Phone",
img:"/p1.webp",
},
{
name:"Buy Phone",
img:"/phones.webp",
},
{
name:"Buy Laptops",
img:"/lap.png",
},
{
name:"Repair Phone",
img:"/re-phones.png",
},
{
name:"Repair Laptop",
img:"/re-lap.png",
},
{
name:"Buy Smartwatches",
img:"/smartwatch.png",
},
{
name:"Buy Speakers",
img:"/speaker.png",
}

]
const otherServices=[{
name:"Sell Phone",
img:"/p1.webp",
},
{
name:"Sell Laptop",
img:"/selllap.png",
},
{
name:"Sell Tv",
img:"/selltv.png",
},
{
name:"Sell Tablets",
img:"/tab.png",
},
{
name:"Sell Gaming consoles",
img:"/console.png",
},
{
name:"Sell Smartwatches",
img:"/smartwatch.png",
},
{
name:"Sell Speakers",
img:"/speaker.png",
}

]


const Home = () => {
  return (
    <>
      {/* Wrapper to prevent horizontal overflow */}
      <div className='w-full  overflow-x-hidden grid grid-rows-[auto_auto_auto] '>
        
        {/* Navbar row */}
        <div className=''>
          <Navbar />
        </div>

        
        
            
          <ImageSlide/>
        

        
       <div className='w-full sm:mb-2 mb-5 '>
          <h1 className='ml-5 font-bold text-2xl ' >Our Services</h1>

      </div>
      
      <Rows services={Services}/>
     <div className='w-full sm:mb-2 mb-5 sm:mt-2 mt-2 '>
          <h1 className='ml-5 font-bold text-2xl'>Sell your old Devices Now</h1> 
      </div>
    < Rows  services={otherServices} />
    <div className=''>
      <h1 className=' ml-5 mb-5 font-bold text-2xl'>Refurbished Devices</h1> 
     <Rowt />
     </div>
     <div className=''>
      <h1 className=' ml-5 mb-5 font-bold text-2xl'>Refurbished Laptop</h1> 
     <Rowt />
     </div>
     
      </div>
    
      
    </>
  )
}

export default Home
