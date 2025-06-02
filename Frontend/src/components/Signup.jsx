import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const submithandler = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(pass);
    setName('');
    setEmail('');
    setPass('');
    navigate('/Login');
  }

  return (
    <div className="bg-[#003d95] h-screen w-screen flex items-center justify-center">
      <div className="bg-[#e2edff] h-3/4 w-3/4 rounded-2xl p-6">
        <h1 className="text-4xl font-bold text-[#003d95] text-center">SIGN UP</h1>

        <div className='md:grid md:grid-cols-12 flex flex-col w-full h-5/6 gap-4 '>

          {/* Form Section */}
          <div className='md:col-span-8 col-span-12 p-4 rounded-lg flex items-center justify-center'>
            <form onSubmit={submithandler} className='w-full flex flex-col gap-4'>

              <div className='flex flex-col'>
                <label for="name" className='text-[#003d95] cursor-pointer  font-medium'>Name</label>
                <input 
                id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter name"
                  className="bg-white rounded-lg outline-none p-2"
                />
              </div>

              <div className='flex flex-col'>
                <label for="email" className='text-[#003d95]  cursor-pointer font-medium'>Email</label>
                <input
                id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email"
                  className="bg-white rounded-lg outline-none p-2"

                />
              </div>

              <div className='flex flex-col'>
                <label for="pass" className='text-[#003d95]  cursor-pointer font-medium'>Password</label>
                <input
                id="pass"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  placeholder="Enter password"
                  className="bg-white rounded-lg outline-none p-2"
                />
              </div>

              <button type='submit' className='bg-[#003d95] text-white text-lg rounded-lg p-2 mt-2'>
                Submit
              </button>

              <p className='text-center'>
                Already have an Account? <a href="/Login" className="text-blue-400">Login here</a>
              </p>
            </form>
          </div>

          {/* Image Section */}
          <div className='md:col-span-4 hidden md:flex items-center justify-center'>
            <img src="./mobile.png" alt="Signup Visual" className='w-full h-auto object-contain' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
