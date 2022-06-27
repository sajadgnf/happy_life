import { Box, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import DoneIcon from '@mui/icons-material/Done';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import React from 'react';

const useStyle = makeStyles(theme => {
    return {
        list: {
            display: "flex",
            flexDirection: 'column',
            marginTop: 8,
            "& li": {
                marginLeft: 30,
                color: '#757575',
                fontSize: 12,
                fontFamily: 'shabnam',
                listStyle: 'none',
                marginBottom: 10
            },
            "& li:first-child": {
                listStyle: 'none'
            },
            [theme.breakpoints.up('xs')]: {
                flexDirection: 'row',
                "& li": {
                    listStyle: 'disc',
                }
            }
        }
    }
})

const DeliveredOrders = () => {
    const classes = useStyle()
    const productsState = useSelector(store => store.productsState)
    const products = [productsState.products.mobiles[1], productsState.products.headphones[7]]

    return (
        <div>
            <Card
                elevation={0}
                sx={{ border: '1px solid #333', mt: 4 }}
            >
                <CardContent>
                    <Box display="flex" alignItems='center'>
                        <Typography>تحویل شده</Typography>
                        <DoneIcon
                            sx={{
                                mr: 1,
                                fontSize: 18,
                                color: "#fff",
                                background: "#00A310",
                                borderRadius: '50%'
                            }}
                        />
                    </Box>
                    <ul className={classes.list}>
                        <li>20 فروردین 1400 </li>
                        <li>کد سفارش 192136758</li>
                        <li>مبلغ {Number(17894000).toLocaleString()}</li>
                    </ul>
                </CardContent>
                <Divider color="#999" />
                {
                    products.map(product => (
                        <CardMedia
                            key={product.id}
                            component='img'
                            image={product.image.main}
                            alt="feature"
                            sx={{
                                objectFit: 'contain',
                                my: 2,
                                display: 'inline-block',
                                mx: { xxs: 'auto', ml: 'unset' },
                                height: { xxs: 117.7, ml: 150, xxl: 177 },
                                width: { xxs: 'fit-content', xs: 'unset' }
                            }}
                        />
                    ))
                }
                <Divider color="#999" />
                <CardActions sx={{ justifyContent: "flex-end", py: 2 }}>
                    <Box sx={{ cursor: "pointer", display: 'flex' }}>
                        <ReceiptLongIcon color="primary" />
                        <Typography fontSize="14px" color="primary">مشاهده فاکتور</Typography>
                    </Box>
                </CardActions>
            </Card>
        </div>
    );
};

export default DeliveredOrders;