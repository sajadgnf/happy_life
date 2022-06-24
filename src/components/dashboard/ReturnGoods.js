import { Button, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import React from 'react';

const useStyle = makeStyles(theme => {
    return {
        contactBtn: {
            textDecoration: 'none',
            color: "#fff",
            padding: "5px 20px",
            [theme.breakpoints.up('ml')]: {
                padding: "8px 40px",
                fontSize: 18
            },
        }
    }
})

const ReturnGoods = () => {

    const classes = useStyle()

    return (
        <Paper elevation={0} sx={{ textAlign: 'center' }}>
            <Typography sx={{ p: { xxs: "34px", ml: "34px 86px" }, fontSize: '20px' }}>
                برای مرجوع محصول خریداری شده تا 24 الی 48 ساعت وقت دارید تا با پشتیبانی
                تماس گرفته و بعد از هماهنگی بسته را ارسال کنید
                بعد از بررسی و سالم بودن محصول هزینه آن به حساب شما واریز خواهد شد.
            </Typography>
            <Button variant='contained' sx={{ borderRadius: 10, mb: 3, p: 0 }}>
                <Link className={classes.contactBtn} to="/contact">
                    تماس با ما
                </Link>
            </Button>
        </Paper>
    );
};

export default ReturnGoods;