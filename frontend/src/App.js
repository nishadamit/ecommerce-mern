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
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermAndCondition from './pages/TermAndCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';

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
                  <Route path='reset-password' element={<ResetPassword />}/>
                  <Route path='blogs/:id' element={<SingleBlog />}/>
                  <Route path='privacy-policy' element={<PrivacyPolicy />}/>
                  <Route path='refund-policy' element={<RefundPolicy />}/>
                  <Route path='shipping-policy' element={<ShippingPolicy />}/>
                  <Route path='term-condition' element={<TermAndCondition />}/>
              </Route>
            </Routes>
            </BrowserRouter>
         </>
}

export default App;
