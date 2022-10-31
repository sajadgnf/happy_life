import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';

// components
import Footer from './Footer';
import Navbar from './Header';
import Landing from '../components/Landing';
import { Paper, Typography } from '@mui/material';

// api
import { fetchProducts } from '../redux/products/productsAction';

// gif
import loadingGif from '../assets/gifs/loading.gif'

const Contact = lazy(() => import('../components/Contact'))
const Mobiles = lazy(() => import('../components/Mobiles'))
const Accessories = lazy(() => import('../components/Accessories'))
const Headphones = lazy(() => import('../components/Headphones'))
const Details = lazy(() => import('../components/Details'))
const Support = lazy(() => import('../components/Support'))
const AboutUs = lazy(() => import('../components/AboutUs'))
const Cart = lazy(() => import('../components/Cart'))
const Profile = lazy(() => import('../components/Profile'))
const UserInfo = lazy(() => import('../components/dashboard/UserInfo'))
const Addresses = lazy(() => import('../components/dashboard/Addresses'))
const Messages = lazy(() => import('../components/dashboard/Messages'))
const ReturnGoods = lazy(() => import('../components/dashboard/ReturnGoods'))
const UserLikes = lazy(() => import('../components/dashboard/UserLikes'))
const UserOrders = lazy(() => import('../components/dashboard/UserOrders'))

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
        if (!!productsState.products) dispatch(fetchProducts())
    }, [])

    const { loading, error } = productsState
    const param = useParams()

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
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path='/' element={<Landing searchBarText={searchBarText} productsState={productsState} />} />
                            {
                                !param["*"].includes("profile") &&
                                <Route path="*" element={<Navigate to="/error" />} />
                            }
                            <Route path='/mobiles' element={<Mobiles show={show} productsState={productsState} />} />
                            <Route path='/accessories' element={<Accessories show={show} productsState={productsState} />} />
                            <Route path='/headphones' element={<Headphones show={show} productsState={productsState} />} />
                            <Route path={`${productsCategories}/:id`} element={<Details searchBarText={searchBarText} productsState={productsState} />} />
                            <Route path='/support' element={<Support show={show} />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/aboutUs' element={<AboutUs />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path="/profile" element={<Profile show={show} />}>
                                <Route path='/profile/info' element={<UserInfo />} />
                                <Route path='/profile/addresses' element={<Addresses />} />
                                <Route path='/profile/messages' element={<Messages />} />
                                <Route path='/profile/return-goods' element={<ReturnGoods />} />
                                <Route path='/profile/likes' element={<UserLikes />} />
                                <Route path='/profile/my-orders' element={<UserOrders />} />
                            </Route>
                        </Routes>
                    </Suspense>
                    <Footer />
                </Paper>
    );
};

export default Layout;