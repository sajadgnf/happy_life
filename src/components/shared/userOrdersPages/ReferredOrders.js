import { Box, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import Close from "@mui/icons-material/Close"
import React from 'react';

const useStyle = makeStyles({
    list: {
        display: "flex",
        marginTop: 8,
        "& li": {
            marginLeft: 30,
            color: '#757575',
            fontSize: 12,
            fontFamily: 'shabnam'
        },
        "& li:first-child": {
            listStyle: 'none'
        }
    }
})

const ReferredOrders = () => {
    const classes = useStyle()
    const productsState = useSelector(store => store.productsState)
    const products = [productsState.products.mobiles[5], productsState.products.headphones[2]]

    return (
        <div>
            <Card
                elevation={0}
                sx={{ border: '1px solid #333', mt: 4 }}
            >
                <CardContent>
                    <Box display="flex" alignItems='center'>
                        <Typography>مرجوع شده</Typography>
                        <Close
                            sx={theme => ({
                                mr: 1,
                                fontSize: 18,
                                color: "#fff",
                                background: theme.palette.customRed.main,
                                borderRadius: '50%'
                            })}
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

export default ReferredOrders;