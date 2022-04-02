import React from 'react';
import { Box, Container, Typography } from "@mui/material"

// functions
import { useTitle } from '../helper/functions';

const Cart = () => {

    useTitle("فروشگاه هپی لایف - سبد خرید")

    return (
        <Container>
            <Box>

            </Box>
            <Box>
                <Box>
                    <Typography>قیمت کالاها(1)</Typography>
                    <Typography></Typography>
                </Box>
                <Box>
                    <Typography>هزینه ارسال</Typography>
                    <Typography>رایگان</Typography>
                </Box>
                <Box>
                    <Typography>جمع سبد خرید</Typography>
                    <Typography></Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Cart;