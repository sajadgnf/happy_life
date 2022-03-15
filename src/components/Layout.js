import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Landing from './Landing';
import Navbar from './Navbar';
import Products from './Products';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path='/products' element={<Products />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default Layout;