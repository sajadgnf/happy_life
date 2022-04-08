import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Paper, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles'
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// toast
import { notify } from './shared/Toast';

// functions
import { useTitle } from '../helper/functions';

// icon 
import { wallet, security, emptyCart } from '../constants/icons'

// redux actions
import { decrease, increase, removeItem, checkout as checkOut } from '../redux/cart/cartActions';

const useStyle = makeStyles(theme => {
    return {
        complete: {
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            flexDirection: 'column',
            minHeight: 'calc(100vh - 100px)',
            marginBottom: 30
        },
        completeImage: {
            width: "300px",
            background: "#fff",
            [theme.breakpoints.up('xsm')]: {
                width: "400px",
            },
        },
        completeBtn: {
            textDecoration: 'none',
            color: '#fff',
            padding: '5px 0',
            width: "100%"
        },
        container: {
            padding: "80px 40px 50px",
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            flexDirection: 'column',

            [theme.breakpoints.up('sm')]: {
                padding: "80px 40px 50px"
            },
            [theme.breakpoints.up('ml')]: {
                padding: "80px 80px 50px",
            },
            [theme.breakpoints.up('lg')]: {
                padding: "80px 80px 50px"
            },
            [theme.breakpoints.up('xl')]: {
                flexDirection: 'row'
            }
        },
        card: {
            border: '1px solid #333',
        },
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
        },
        paymentIcon: {
            marginLeft: 10
        },
        securityIcon: {
            width: 16,
            height: 16,
            [theme.breakpoints.up('xs')]: {
                width: 20,
                height: 20,
            },
        },
        quantityButtonContainer: {
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: 5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: "center",
            width: '70px',
            height: 30,
            overflow: 'hidden',
            [theme.breakpoints.up('sm')]: {
                width: '100px',
                height: 35,
            }
        },
        quantityButton: {
            width: 'fit-content',
            minWidth: "fit-content",
            padding: "0 10px",
            fontSize: 20,
            "&:hover": {
                background: 'transparent'
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: 26,
            }
        },
        cardLink: {
            color: "#333",
            textDecoration: 'none',
            display: "flex",
            alignItems: "center"
        },
    }
})

const Cart = () => {

    useTitle("فروشگاه هپی لایف - سبد خرید")
    const classes = useStyle()
    const cartState = useSelector(store => store.cartState)
    const dispatch = useDispatch()

    const { itemsCounter, total, selectedItems, checkout } = cartState

    const detailsHandler = item => {
        dispatch({ type: item.section.toUpperCase() })
    }

    const paymentHandler = () => {
        notify('خرید شما با موفقیت انجام شد', "success")
        setTimeout(() => {
            dispatch(checkOut())
        }, 3000)
    }

    return (
        checkout || itemsCounter < 1 ?
            <div className={classes.complete}>
                <img className={classes.completeImage} src={emptyCart} alt="صبد خرید خالی" />
                <Typography variant='h6' marginBottom fontSize={16}>سبد خرید شما خالی است!</Typography>
                <Button variant='contained' sx={{ width: 130, p: 0 }}>
                    <Link to="/" className={classes.completeBtn}>خرید</Link>
                </Button>
            </div> :

            <Paper elevation={0} className={classes.container}>
                <Box width={{ xxs: "100%", xl: "70%" }}>
                    {selectedItems.map(item => (
                        <Card
                            className={classes.card}
                            key={item.title + item.color.title}
                            sx={{ marginBottom: 2 }}
                        >
                            <Box>
                                <Link
                                    to={`/${item.section}/${item.id}`}
                                    className={classes.cardLink}
                                    onClick={() => detailsHandler(item)}
                                >
                                    <CardMedia
                                        component="img"
                                        height={65}
                                        sx={{ width: 65 }}
                                        image={item.image.main}
                                        alt="عکس محصول"
                                    />
                                    <CardContent sx={{ width: "100%", pb: "5px !important" }}>
                                        <Typography width="75%" variant='h6' noWrap fontSize={{ xxs: 13, xs: 16 }}>
                                            {item.title}
                                        </Typography>
                                        <Box margin="10px 0" display="flex" alignItems="center">
                                            <img className={classes.securityIcon} src={security} alt="security" />
                                            <Typography color="primary" marginBottom='0 !important' marginRight fontSize={{ xxs: 10, xs: 12 }}>گارانتی 18 ماهه سام تل</Typography>
                                        </Box>
                                        <Box margin="10px 0" display="flex" alignItems="center">
                                            <Box
                                                sx={{
                                                    background: item.color.hex,
                                                    width: { xxs: 14, xs: 16 },
                                                    height: { xxs: 14, xs: 16 },
                                                    borderRadius: "100%",
                                                    ml: 1,
                                                    mr: '1px',
                                                    boxShadow: "0 0 11px 0 rgba(0, 0, 0, .5)",
                                                    "&:hover": { backgroundColor: item.color.hex }
                                                }}
                                            ></Box>
                                            <Typography color="primary" marginBottom='0 !important' marginRight fontSize={{ xxs: 10, xs: 12 }}>{item.color.title}</Typography>
                                        </Box>
                                    </CardContent>
                                </Link>
                            </Box>

                            <Box marginLeft="10%"
                                marginBottom={3}
                                alignItems="end"
                                display="flex"
                                flexDirection="column"
                            >
                                <Box display="flex" alignItems="center" marginBottom={1}>
                                    <IconButton onClick={() => dispatch(removeItem(item, item.color))}><DeleteOutlineSharpIcon color='primary' /></IconButton>
                                    <Box className={classes.quantityButtonContainer}>
                                        <Button onClick={() => dispatch(increase(item, item.color))} className={classes.quantityButton}>+</Button>
                                        <Typography>{item.quantity}</Typography>
                                        <Button onClick={() => item.quantity === 1 ? dispatch(removeItem(item, item.color)) : dispatch(decrease(item, item.color))} className={classes.quantityButton}>-</Button>
                                    </Box>
                                </Box>
                                <Typography variant='h6' fontFamily='shabnam' fontSize={{ xxs: 14, xs: 16 }}>{item.price.toLocaleString()} تومان</Typography>
                            </Box>
                        </Card>
                    ))}
                </Box>

                <Card className={classes.card} sx={{ width: { xxs: "100%", xl: '25%' }, p: { xxs: 1, xsm: 4 }, mt: { xxs: 2, ml: 0 } }}>
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
                    <CardActions sx={{ display: 'flex', justifyContent: 'center', pt: 4, pb: 0 }}>
                        <Button
                            onClick={paymentHandler}
                            variant='contained'
                            fullWidth
                            sx={{ py: 1.2 }}
                            startIcon={<img src={wallet} alt="wallet" className={classes.paymentIcon} />}
                        >
                            پرداخت
                        </Button>
                    </CardActions>
                </Card>
                <ToastContainer theme="colored" />
            </Paper>
    );
};

export default Cart;