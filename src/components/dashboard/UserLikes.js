import React, { useEffect } from 'react';
import { Grid, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// components
import DashboardCard from "../shared/DashboardCard"

const UserLikes = () => {

    const productsState = useSelector(store => store.productsState)
    const products = [productsState.products.mobiles[5], productsState.products.headphones[1]]

    return (
        <Paper elevation={0} sx={{ mt: 5, minHeight: "100vh" }} >
            <Grid
                container
                spacing={{ xxs: 2 }}
                sx={{
                    width: { xxs: "100%", ml: 'auto' },
                    p: { xxs: "0 13px", xsm: '0 34px' }
                }}
            >
                {
                    products.map(item => (
                        <Grid
                            item
                            key={item.id}
                            xxs={12}
                            sx={{ pb: { xxs: "16px", xs: 0 } }}
                        >
                            <DashboardCard section={item.ears ? 'headphones' : 'mobiles'} item={item} color={item.colors[0]} />
                        </Grid>
                    ))
                }
            </Grid>
        </Paper >
    );
};

export default UserLikes;