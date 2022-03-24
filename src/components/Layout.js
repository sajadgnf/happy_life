import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// components
import Contac from './Contac';
import Footer from './Footer';
import Landing from './Landing';
import Navbar from './Navbar';
import Products from './Products';
import Support from './Support';
import AboutUs from './AboutUs'
import Cart from "./Cart"

const Layout = () => {

    const [searchBarText, setSearchBarText] = useState(() => window.innerWidth < 620 ?
        "جستوجو..." :
        "نام محصول یا کالای مورد نظر خود را تایپ نمایید..."
    )
    const [show, setShow] = useState(() => window.innerWidth < 620 ? false : true)

    // window resize listener
    useEffect(() => {
        window.addEventListener('resize', () => {

            if (window.innerWidth < 620) {
                setSearchBarText("جستوجو...")
                setShow(false)
            } else {
                setSearchBarText("نام محصول یا کالای مورد نظر خود را تایپ نمایید...")
                setShow(true)
            }
            if (window.innerWidth < 720) {
                setShow(false)
            } else {
                setShow(true)
            }
        })
    }, [])

    return (
        <div>
            <Navbar show={show} />
            <Routes>
                <Route path='/' element={<Landing searchBarText={searchBarText} />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path='/products' element={<Products />} />
                <Route path='/support' element={<Support />} />
                <Route path='/contac' element={<Contac />} />
                <Route path='/aboutUs' element={<AboutUs />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default Layout;