import { ImageList, ImageListItem, Paper, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles"
import React from 'react';

// functions
import { useTitle } from '../helper/functions';

//images
import { blurBg } from "../constants/images"
import { itemData } from '../constants/itemData';
import { Box } from '@mui/system';

const useStyle = makeStyles(theme => {
    return {
        container: {
            background: `url(${blurBg}) center no-repeat`,
            backgroundSize: 'cover',
            minHeight: '100vh',
            marginTop: 32,
            display: "flex",
            justifyContent: 'center',
            flexDirection: 'column',
        }
    }
})

const srcset = (image, size, rows = 1, cols = 1) => {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
    }
}

const AboutUs = () => {

    useTitle('هپی لایف - درباره ما')
    const classes = useStyle()

    return (
        <Paper elevation={0} className={classes.container}>
            <Box margin="50px 0 80px">
                <Typography
                    variant='h3'
                    fontSize={{xxs:40,sm:50, ml: 60}}
                    color={"#fff"}
                    fontFamily="maktab"
                    textAlign='center'
                >
                    کیفیتی که انتظارش را داشتید
                </Typography>
                <Typography
                    variant='h3'
                    fontSize={{sm:60, ml: 70, lg: 80}}
                    fontFamily="maktab"
                    textAlign='center'
                >
                    قیمتی که باور نخواهید کرد.
                </Typography>
            </Box>

            <ImageList
                variant='quilted'
                cols={6}
                sx={{
                    px: { xsm: 5, xs: 10, sm: 15, ml: 20, lg: 30 }
                }}
            >
                {itemData.map(item => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <Typography
                sx={{ mb: 10, mt: 8, mx: { xxs: 3, sm: 10, ml: 20, lg: 30 }}}
                textAlign="center"
                fontSize={{ml:20}}
            >
                هدف فروشگاه اینترنتی هپی لایف، فروش و معرفی محصولات با کیفیت به منظور رضایتمندی و ایجاد رابطه‌ی دوستانه با خریدار است. پشتیبانان این سایت، اهدافی بلند مدت داشته و برای رسیدن به این اهداف، برنامه‌های بلند مدتی را تهیه و تنظیم کرده‌اند تا بتوانند آینده‌ای روشن و موفق را برای این سایت رقم بزنند.<br/>
                این مهم به ثمر نخواهد نشست مگر با رضایت خریداران از محصولات خریداری شده و وفادار شدن مشتریان به سایت و تبدیل مشتریان وفادار به مشتریان طرفدار، از طریق سیاست‌های پشتیبانان سایت.
            </Typography>
        </Paper>
    );
};

export default AboutUs;