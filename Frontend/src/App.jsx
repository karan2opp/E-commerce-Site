import React from 'react';
import './index.css';


import Signup from './components/Signup';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import ProductCard from './UserDashboard/ProductCard';
import Home from './UserDashboard/Home';
import Navbar from './components/Navbar';
import Rowt from './UserDashboard/Rowt';
import Rows from './UserDashboard/rows';
import Slide from './UserDashboard/slide';
import ImageSlide from './UserDashboard/ImageSlide'


const App = () => {
  
  return (
    <>
    
<Routes>
  <Route path="/" element={<Signup/>}/>
  <Route path="/Login" element={<Login />} />
  <Route path="/ProductCard" element={<ProductCard/>}/>
  <Route path="/Home" element={<Home/>} />
  <Route path='/Rowt' element={<Rowt/>}   />
  <Route path='/Rows' element={<Rows/>}   />
  <Route path='/Slide' element={<Slide/>} />
   <Route path='/ImageSlide' element={<ImageSlide/>} />
  
</Routes>

            
 </>
  );
};

export default App;