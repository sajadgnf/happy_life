import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';

// components
import Contact from './Contact';
import Footer from './Footer';
import Landing from './Landing';
import Navbar from './Navbar';
import Mobiles from './Mobiles';
import Accessories from './Accessories'
import Headphones from "./Headphones"
import Details from './Details';
import Support from './Support';
import AboutUs from './AboutUs'
import Cart from "./Cart"
import { Paper, Typography } from '@mui/material';

// api
import { fetchProducts } from '../redux/products/productsAction';

// gif
import loadingGif from '../assets/gifs/loading.gif'

const Layout = () => {

    const dispatch = useDispatch()
    const productsState = useSelector(store => store.productsState)
    const productsCategories = useSelector(store => store.productsCategoriesState)
    const [searchBarText, setSearchBarText] = useState(() => window.innerWidth < 620 ?
        "جستجو..." :
        "نام محصول یا کالای مورد نظر خود را تایپ نمایید..."
    )
    const [show, setShow] = useState(() => window.innerWidth < 720 ? false : true)

    useEffect(() => {

        // window resize listener
        window.addEventListener('resize', () => {

            if (window.innerWidth < 620) {
                setSearchBarText("جستوجو...")
            } else {
                setSearchBarText("نام محصول یا کالای مورد نظر خود را تایپ نمایید...")
            }
            if (window.innerWidth < 720) {
                setShow(false)
            } else {
                setShow(true)
            }
        })

        // get Products
        if (!productsState.products.length) dispatch(fetchProducts())
    }, [])

    const { loading, error } = productsState

    return (
        loading ?
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <img src={loadingGif} alt="loading" />
            </Box> :
            error ?
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <Typography variant='h6'>Something went wrong</Typography>
                </Box> :
                <Paper elevation={0}>
                    <Navbar show={show} />
                    <Routes>
                        <Route path='/' element={<Landing searchBarText={searchBarText} productsState={productsState} />} />
                        <Route path="*" element={<Navigate to="/error" />} />
                        <Route path='/mobiles' element={<Mobiles show={show} productsState={productsState} />} />
                        <Route path='/accessories' element={<Accessories show={show} productsState={productsState} />} />
                        <Route path='/headphones' element={<Headphones show={show} productsState={productsState} />} />
                        <Route path={`${productsCategories}/:id`} element={<Details searchBarText={searchBarText} productsState={productsState} />} />
                        <Route path='/support' element={<Support show={show} />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/aboutUs' element={<AboutUs />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                    <Footer />
                </Paper>
    );
};

export default Layout;