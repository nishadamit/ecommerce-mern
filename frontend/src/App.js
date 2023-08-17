import React from 'react';
import {BrowserRouter, Routes, Route }from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';

function App() {
  return <>
            <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout />}>
                  <Route index element={<Home />}/>
                  <Route path='about' element={<About />}/>
                  <Route path='contact' element={<Contact />}/>
                  <Route path='our-store' element={<OurStore />}/>
                  <Route path='blogs' element={<Blog />}/>
                  <Route path='compare-product' element={<CompareProduct />}/>
                  <Route path='wishlist' element={<Wishlist />}/>
                  <Route path='login' element={<Login />}/>
                  <Route path='forgot-password' element={<ForgotPassword />}/>
                  <Route path='signup' element={<SignUp />}/>
              </Route>
            </Routes>
            </BrowserRouter>
         </>
}

export default App;
