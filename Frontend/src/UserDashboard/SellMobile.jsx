import React from 'react'

const SellMobile = () => {
  return (
    <div>
       <div className='w-full  flex items-center justify-center'>
            
            <div className='w-3/4 h-3/4  shadow-white bg-[#f7f7f7] shadow-3xl rounded-lg grid grid-cols-6 overflow-hidden'>
                         <div className='col-span-4 grid grid-rows-4 ml-10'>
                           <div className='row-span-1 flex items-center '> 
                             <h1 className='text-2xl'> Sell Old Mobile Phone For Instant Cash</h1>
                           </div>
                                <div className='row-span-1 flex items-center gap-8   '>
                                    <ul>
                                      <li>Maximum Value</li>
                                    </ul>
                                    <ul><li> Safe & Hassle Free</li></ul>
                                    <ul>
                                      <li> Free Doorstep Pickup</li>
                                    </ul>
                                      
                                </div>
                                <div className='row-span-1 flex  items-center'>
                                  <input type="text " placeholder='Search Your Mobile Phone to Sell' className='w-3/4 bg-white p-2 outline-none' />
                                </div>
                                <div className='row-span-1 bg-blue-500'></div>
                         </div>
                         <div className='col-span-2 h-full  flex items-center  justify-center '>
                           <img src="./Man.png" alt="" className='h-3/4 w-3/4 ' />
                         </div>
            </div>
        </div> 
    </div>
  )
}

export default SellMobile
