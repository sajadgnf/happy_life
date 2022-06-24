import React, { useEffect } from 'react';
import { Box, Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';

// components
import DashboardCard from "../../shared/DashboardCard"

// api
import { fetchProducts } from '../../../redux/products/productsAction';

const useStyle = makeStyles(theme => {
    return {
        paymentContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        payment: {
            fontFamily: 'shabnam',
            fontSize: "16px",
            [theme.breakpoints.up('xl')]: {
                fontSize: "14px",
            },
            [theme.breakpoints.up('xxl')]: {
                fontSize: "16px",
            }
        }
    }
})

const CurrentOrders = () => {

    const classes = useStyle()

    const dispatch = useDispatch()
    const productsState = useSelector(store => store.productsState)
    const cartState = useSelector(store => store.cartState)
    const { itemsCounter, total, selectedItems } = cartState

    useEffect(() => {
        if (!!productsState.products.length) dispatch(fetchProducts())
    }, [])

    return (
        <Paper elevation={0} sx={{ mt: 5, minHeight: "100vh" }} >
            <Grid
                container
                spacing={2}
                sx={{
                    width: { xxs: "100%", ml: 'auto' },
                    p: { xxs: "0 13px", xsm: '0 34px' }
                }}
            >
                {
                    selectedItems.map(item => (
                        <Grid
                            item
                            key={item.id + item.color.title}
                            xxs={12}
                            sx={{ pb: { xxs: "16px", xs: 0 } }}
                        >
                            <DashboardCard section={item.section} item={item} color={item.color.title} />
                        </Grid>
                    ))
                }
            </Grid>

            <Card
                className={classes.card}
                sx={{
                    width: "90%",
                    p: { xxs: 1, xsm: 4 },
                    mx: 'auto',
                    mt: { xxs: 2, ml: 3 },
                    border: '1px solid #cbcbcb'
                }}
            >
                <CardContent sx={{ padding: 0 }}>
                    <Box className={classes.paymentContainer} marginBottom={3}>
                        <Typography className={classes.payment}>قیمت کالاها({itemsCounter})</Typography>
                        <Typography className={classes.payment}>{Number(total).toLocaleString()} تومان</Typography>
                    </Box>
                    <Box className={classes.paymentContainer} borderBottom='1px solid #cbcbcb' paddingBottom={5}>
                        <Typography className={classes.payment}>هزینه ارسال</Typography>
                        <Typography className={classes.payment}>رایگان</Typography>
                    </Box>
                    <Box className={classes.paymentContainer} marginTop={2.5}>
                        <Typography className={classes.payment} fontWeight={400}>جمع سبد خرید</Typography>
                        <Typography className={classes.payment} fontWeight={400}>{Number(total).toLocaleString()} تومان</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Paper >
    );
};

export default CurrentOrders;