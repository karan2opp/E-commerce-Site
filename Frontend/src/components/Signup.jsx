import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate=useNavigate();
  const submithandler=(e)=>{
        e.preventDefault();
        console.log(name);
        console.log(email)
        console.log(pass)
        setName('')
        setEmail('')
        setPass('')
        navigate('/Login')
  }
  return (
   <div className="bg-[#003d95] h-screen w-screen flex items-center justify-center">
  <div className="bg-[#e2edff] h-3/4 w-3/4 rounded-2xl  ">
    <h1 className="text-4xl font-bold text-[#003d95] text-center">SIGN UP</h1>
    <div  className='grid sm:grid-cols-12 grid-cols-6 w-full  h-1/2 sm:gap-4 gap-2 mt-10'>

    <div className=' sm:col-span-8 col-span-6 h-[70%] mt-10'>
      <form action="" onSubmit={submithandler}  className='grid sm:grid-cols-8 grid-cols-6  w-full h-full sm:gap-1 gap-3 '>
        <div className=' sm:col-span-4 col-span-2 flex sm:gap-5 gap-10 flex-col items-center '>
              <h2  className=' w-full sm:text-lg text-md text-center  ' >Name</h2>
              <h2 className=' w-full text-center sm:text-lg text-md '>Email</h2>
              <h2 className=' w-full text-center sm:text-lg text-md '>Password</h2>
        </div>
        <div className=' sm:col-span-4 col-span-4 flex sm:gap-5 gap-10 flex-col '>
                <input value={name}onChange={(e)=>{
                  setName(e.target.value)
                }} type="text"  placeholder='Enter  name' className='bg-white sm:text-md text-xs rounded-lg  w-full outline-none sm:p-2 p-1 ' />
                <input value={email} onChange={(e)=>{
                  setEmail(e.target.value)
                }} type="email" placeholder='Enter  Email' className='bg-white sm:text-md text-xs rounded-lg  w-full outline-none sm:p-2 p-1'/>
                <input value={pass} onChange={(e)=>{setPass(e.target.value) }} type="password" placeholder='Enter  Pasword' className='bg-white sm:text-md text-xs rounded-lg  w-full outline-none sm:p-2 p-1'/>
                <button  type='submit' className='bg-[#003d95] sm:text-lg text-md rounded-lg  w-full  outline-none p-1 text-white'>Submit</button>
                   <p>Already have an Account <a href="/Login" className='text-blue-400'>Login here</a></p>
        </div>
              
      </form>
    </div>
     
    <div className=' sm:col-span-4 h-[70%]  justify-center sm:flex items-center mt-10  hidden '>
      <img src="./mobile.png " alt="" className=' sm:w-full sm:h-full sm:block '/>
    </div>
    </div>
  </div>
</div>
  )
}

export default Signup
