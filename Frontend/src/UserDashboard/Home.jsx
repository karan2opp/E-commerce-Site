import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlide from './ImageSlide'
import Rows from './rows'
import Rowt from './Rowt'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../assets/images/p1.webp"
import Img2 from "../assets/images/phones.webp"
import Img3 from "../assets/images/lap.png"
import Img4 from "../assets/images/re-phones.png"
import Img5 from "../assets/images/re-lap.png"
import Img6 from "../assets/images/smartwatch.png"
import Img7 from "../assets/images/speaker.png"
import Img8 from "../assets/images/selllap.png"
import Img9 from "../assets/images/selltv.png"
import Img10 from "../assets/images/tab.png"
import Img11 from "../assets/images/console.png"
                             

const Services=[{
name:"Sell Phone",
img:Img1,
},
{
name:"Buy Phone",
img:Img2,
},
{
name:"Buy Laptops",
img:Img3,
},
{
name:"Repair Phone",
img:Img4,
},
{
name:"Repair Laptop",
img:Img5,
},
{
name:"Buy Smartwatches",
img:Img6,
},
{
name:"Buy Speakers",
img:Img7,
}

]
const otherServices=[{
name:"Sell Phone",
img:Img1,
},
{
name:"Sell Laptop",
img:Img8,
},
{
name:"Sell Tv",
img:Img9,
},
{
name:"Sell Tablets",
img:Img10,
},
{
name:"Sell Gaming consoles",
img:Img11,
},
{
name:"Sell Smartwatches",
img:Img6,
},
{
name:"Sell Speakers",
img:Img7,
}

]


const Home = () => {
  return (
    <>
      {/* Wrapper to prevent horizontal overflow */}
      <div className='w-full overflow-x-hidden grid grid-rows-[auto_auto_auto] '>
        
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
