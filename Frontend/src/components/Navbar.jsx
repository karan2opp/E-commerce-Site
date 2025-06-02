import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
const menuItems = [
  { title: "All" },
  { title: "Sell Phone" },
  { title: "Sell gadgets" },
  { title: "Buy Phone" },
  { title: " Buy Gadget" },
  { title: "Buy Laptop" },
];

const dropdownOptions = ["Smartwatch", "Tablet", "Other Gadget"];


const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
    
    <div className=' w-screen h-20 grid-cols-6 grid bg-white shadow-lg border-b-[0.125px] border-gray-500'>
       <div className='col-span-1  flex items-center justify-center text-blue-500 '>
          <h2>Myzone</h2>
       </div>
       <div className='col-span-4  flex items-center justify-center  '> 
        <input type="text" placeholder=' Search Your Product' className='sm:w-1/2 w-3/4 sm:text-lg  text-md border-2 border-transparent rounded-xl  bg-[#e4e4e4]  hover:border-[#faebf9] outline-none' />
       </div>
       <div className='col-span-1 flex items-center justify-center '> 
        <button onClick={() => navigate("/")} className='sm:w-2/3 w-full rounded-md sm:text-lg text-xs text-white bg-red-500 p-2'>Logout</button>
       </div>
    </div> 


  <div className="hidden md:grid md:grid-cols-6 md:h-25 md:text-md border-[0.5px] border-gray-500     outline-none">
  {menuItems.map((item, index) => (
    <div
      key={index}
      className={`md:col-span-1`}
    >
      <div className={`flex items-center justify-center h-full w-full $ `}>
        <div
          className={`group relative  flex items-center justify-center w-fit ${
            item.title === "Buy Laptop"|| item.title === " Buy Gadget" ? "pr-5" : ""
          }`}
        >
          <button className="group-hover:text-[#42c8b7] md:text-md">
            {item.title}
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1 fill-current group-hover:fill-[#42c8b7] transition-transform duration-300 group-hover:rotate-180"
            viewBox="0 0 24 24"
          >
            <path d="M7 10l5 5 5-5H7z" />
          </svg>

          <div
            className={`absolute top-full mt-2 z-50 bg-white shadow-md rounded border border-gray-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${
              item.title === "Buy Laptop"
                ? "right-0 md:w-48"
                : item.title === "Buy Phone"
                ? "md:left-0 right-1/3 w-40"
                : "left-0 w-40"
            }`}
          >
            <ul className=" outline-none">
              {dropdownOptions.map((option, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2    cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
</>
  )
}

export default Navbar
