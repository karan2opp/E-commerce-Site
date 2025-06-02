import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
    navigate('/home');
  };

  return (
    <div className="bg-[#003d95] h-screen w-screen flex items-center justify-center">
      <div className="bg-[#e2edff] h-3/4 w-3/4 rounded-2xl p-6">
        <h1 className="text-4xl font-bold text-[#003d95] text-center mb-6">LOGIN</h1>
        
        <div className="grid sm:grid-cols-12 grid-cols-1 w-full h-full sm:gap-4 gap-6">
          
          <div className="sm:col-span-8 col-span-1">
            <form onSubmit={submithandler} className="grid gap-5">
              
              <div className="flex flex-col">
                <label htmlFor="name" className="text-[#003d95] font-medium mb-1">Name</label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter Name"
                  className="bg-white text-sm rounded-lg p-2 outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-[#003d95] font-medium mb-1">Email</label>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter Email"
                  className="bg-white text-sm rounded-lg p-2 outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="text-[#003d95] font-medium mb-1">Password</label>
                <input
                  id="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  placeholder="Enter Password"
                  className="bg-white text-sm rounded-lg p-2 outline-none"
                />
              </div>

              <button
                type="submit"
                className="bg-[#003d95] text-white text-lg rounded-lg p-2 mt-2"
              >
                Submit
              </button>

            </form>
          </div>

          <div className="sm:col-span-4 hidden sm:flex justify-center items-center">
            <img src="./mobile.png" alt="Login Visual" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
