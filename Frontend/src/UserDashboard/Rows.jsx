import React from 'react'

const Rows = ({services}) => {
  return (
      
     <div className='grid ml-5 lg:grid-cols-6 sm:grid-cols-4 grid-cols-3 w-screen  gap-3 mx-auto text-xs '>
      {services.map((ser,index) => (
        <div  key={index} className=' sm:h-28 sm:w-32 h-24 w-24  grid grid-rows-4 sm:gap-2 gap-3  col-span-1 '>
          <div className='row-span-3 bg-[#eaf6f4] flex justify-center items-center '>
               <img src={ser.img} alt="" className=' w-auto h-full '  />
               </div>
               <div className='row-span-1 flex justify-center '><h1 >{ser.name}</h1></div>
               
                </div>
      ))}
      </div> 
     
  )
}

export default Rows
