import React from 'react'

const Navbar = () => {
  return (
    <>
    
    <div className=' w-screen h-20 grid-cols-6 grid bg-white shadow-lg border-b-[0.125px] border-gray-500 '>
       <div className='col-span-1  flex items-center justify-center text-blue-500 '>
          <h2>Myzone</h2>
       </div>
       <div className='col-span-4  flex items-center justify-center  '> 
        <input type="text" placeholder=' Search Your Product' className='sm:w-1/2 w-3/4 sm:text-lg  text-md border-2 border-transparent rounded-xl bg-[#e4e4e4] hover:border-[#faebf9] outline-none' />
       </div>
       <div className='col-span-1 flex items-center justify-center '> 
        <button className='sm:w-2/3 w-full rounded-md sm:text-lg text-xs text-white bg-red-500 p-2'>Logout</button>
       </div>
    </div> 
    <div className=' sm:h-15 h-25 grid sm:grid-cols-6 grid-cols-4 sm:text-lg text-sm border-[0.5px] border-gray-500 '>
      <div  className='sm:col-span-1 col-span-1'> 
        <div className='flex items-center justify-center h-full w-full '>
        <div className='group relative flex items-center justify-center w-fit'>
           <button  className='    group-hover:text-[#42c8b7] sm:text-lg text-md'>All</button>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5  fill-current group-hover:fill-[#42c8b7]  transition-transform duration-300 group-hover:rotate-180"
  viewBox="0 0 24 24"
>
  <path d="M7 10l5 5 5-5H7z" />
</svg>
<div className="absolute top-full mt-2 left-0 z-50 w-40 bg-white shadow-md rounded border border-gray-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    <ul className="py-2">
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Smartwatch</li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tablet</li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Other Gadget</li>
    </ul>
  </div>
</div>
 </div> </div>
       
       
       <div  className='sm:col-span-1 col-span-1'> 
        <div className='flex items-center justify-center h-full w-full '>
       <div className=" group flex relative items-center justify-center w-fit">
  <button className="group-hover:text-[#42c8b7]  sm:text-lg text-md">
    Sell Phone
  </button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-1 fill-current group-hover:fill-[#42c8b7] transition-transform duration-300 group-hover:rotate-180"
    viewBox="0 0 24 24"
  >
    <path d="M7 10l5 5 5-5H7z" />
  </svg>

  <div className="absolute top-full mt-2 left-0 z-50 w-40 bg-white shadow-md rounded border border-gray-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    <ul className="py-2">
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Smartwatch</li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tablet</li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Other Gadget</li>
    </ul>
  </div>
</div>

 </div> </div>

       <div  className='sm:col-span-1 col-span-1'> 
        <div className='flex items-center justify-center h-full w-full '>
      <div className='group relative flex items-center justify-center w-fit'>
  <button className='group-hover:text-[#42c8b7] sm:text-lg text-md'>
    Sell gadgets
  </button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 fill-current group-hover:fill-[#42c8b7] transition-transform duration-300 group-hover:rotate-180"
    viewBox="0 0 24 24"
  >
    <path d="M7 10l5 5 5-5H7z" />
  </svg>

  {/* ✅ Dropdown */}
  <div className="absolute top-full mt-2 left-0 z-50 w-40 bg-white shadow-md rounded border border-gray-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    <ul className="py-2">
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Smartwatch</li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tablet</li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Other Gadget</li>
    </ul>
  </div>
</div>

 </div> </div>
        <div  className='sm:col-span-1 col-span-1'> 
        <div className='flex items-center justify-center h-full w-full '>
        <div className='group relative flex items-center justify-center w-fit'>
           <button  className='   group-hover:text-[#42c8b7]  sm:text-lg text-md'>Buy Phone</button>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5  fill-current group-hover:fill-[#42c8b7]  transition-transform duration-300 group-hover:rotate-180 "
  viewBox="0 0 24 24"
>
  <path d="M7 10l5 5 5-5H7z" />
</svg>
<div className="absolute top-full mt-2 sm:left-0 right-1/3 z-50 w-40 bg-white shadow-md rounded border border-gray-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    <ul className="py-2">
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Smartwatch</li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tablet</li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Other Gadget</li>
    </ul>
  </div>
</div>
 </div> </div>
         <div  className='sm:col-span-1 sm:block hidden'> 
        <div className='flex items-center justify-center h-full w-full '>
        <div className='group relative flex items-center justify-center w-fit'>
           <button  className='   group-hover:text-[#42c8b7] sm:text-lg text-md '>Find New Gadget</button>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5  fill-current group-hover:fill-[#42c8b7]  transition-transform duration-300 group-hover:rotate-180 "
  viewBox="0 0 24 24"
>
  <path d="M7 10l5 5 5-5H7z" />
</svg>
<div className="absolute top-full mt-2 left-0 z-50 w-40 bg-white shadow-md rounded border border-gray-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    <ul className="py-2">
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Smartwatch</li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tablet</li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Other Gadget</li>
    </ul>
  </div>
</div>
 </div> </div>
         <div  className='sm:col-span-1 sm:block hidden'> 
        <div className='flex items-center justify-center h-full w-full '>
        <div className='group relative  flex items-center justify-center w-fit'>
           <button  className='   group-hover:text-[#42c8b7] sm:text-lg text-md '>Buy Laptop</button>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5  fill-current group-hover:fill-[#42c8b7]  transition-transform duration-300 group-hover:rotate-180"
  viewBox="0 0 24 24"
>
  <path d="M7 10l5 5 5-5H7z" />
</svg>
<div className="absolute top-full mt-2 right-0  z-50 sm:w-48  bg-white shadow-md rounded border border-gray-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    <ul className="py-2">
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Smartwatch</li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tablet</li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Other Gadget</li>
    </ul>
  </div>
</div>
 </div> </div>
      </div> </>
  )
}

export default Navbar
