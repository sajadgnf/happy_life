import React from 'react';
import { Input, Paper, TextField, Typography, InputBase, FormControl, InputLabel } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box, styled, alpha } from '@mui/system';

// functions
import { useTitle } from '../helper/functions';

// images & icons
import { blurBg } from '../constants/images';
import { contactUs, callIcon, office, email } from "../constants/icons"

const useStyle = makeStyles(theme => {
    return {
        container: {
            background: `url(${blurBg}) center no-repeat`,
            backgroundSize: 'cover',
            minHeight: '100vh',
            paddingTop: 62,
            paddingBottom: 40,
            display: 'flex',
            alignItems: 'center',
            flexDirection: "column"
        },
        containerIcon: {
            width: 220,
            minWidth: '40%',
        },
        content: {
            background: "#757575",
            width: 280,
            minWidth: '60%',
            borderRadius: 14.81,
            padding: "30px 20px",
            [theme.breakpoints.up("sm")]: {
                padding: '60px 20px',
            },
        },
        info: {
            textAlign: 'center',
            color: '#fff'
        },
        title: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 5
        },
        titleText: {
            fontWeight: 100,
            fontSize: 12,
            marginRight: 8,
            [theme.breakpoints.up("sm")]: {
                fontSize: 14,
            },
            [theme.breakpoints.up("sm")]: {
                fontSize: 16,
            },
            [theme.breakpoints.up("xl")]: {
                fontSize: 18,
            },
        },
        details: {
            fontSize: 12,
            [theme.breakpoints.up("sm")]: {
                fontSize: 14,
            },
            [theme.breakpoints.up("sm")]: {
                fontSize: 16,
            },
            [theme.breakpoints.up("xl")]: {
                fontSize: 18,
            },
        },
        form: {
            border: "1px solid #333",
            borderRadius: 14.81,
            padding: '30px 20px',
            [theme.breakpoints.up("xs")]: {
                margin:"0 20px"
            },
            [theme.breakpoints.up("lg")]: {
                padding: '30px',
                margin:"0 80px"
            },
            [theme.breakpoints.up("xl")]: {
                padding: '30px 50px',
                margin:"0 120px"
            },
            [theme.breakpoints.up("xxl")]: {
                padding: '30px 50px',
                margin:"0 180px"
            },
        },
        textarea: {
            border: "2px solid #555",
            outline: 'none',
            padding: 10,
            background: "transparent",
            color: '#fff',
            resize: 'none',
            borderRadius: 4,
            width: "100%",
            fontSize: 12,
            transition: 'all .5s ease',
            "&::placeholder": {
                color: "#c0c0c0"
            },
            "&:hover": {
                borderColor: "#000"
            },
            "&:focus": {
                borderColor: "#92E3A9"
            },
            [theme.breakpoints.up("sm")]: {
                fontSize: 14,
            },
            [theme.breakpoints.up("lg")]: {
                fontSize: 16,
            },
        }
    }
})

const Contact = () => {

    const classes = useStyle()

    useTitle("تماس با ما - هپی لایف")

    const formHandler = () => {

    }

    return (
        <Paper elevation={0} className={classes.container}>
            <img className={classes.containerIcon} src={contactUs} alt="contact-us" />

            <div className={classes.content}>
                <Box className={classes.info}>
                    <Box className={classes.title}>
                        <img src={email} alt="ایمیل" />
                        <Typography className={classes.titleText}>ایمیل سازمانی</Typography>
                    </Box>
                    <Typography
                        className={classes.details}
                        letterSpacing={{ xxs: 5, ml: 10, lg: 15 }}
                        fontFamily='roboto'
                        marginBottom={3}>
                        happy life@yahoo.com
                    </Typography>
                </Box>

                <Box className={classes.info}>
                    <Box className={classes.title}>
                        <img src={callIcon} alt="تلفن تماس" />
                        <Typography className={classes.titleText}>تلفن تماس</Typography>
                    </Box>
                    <Typography
                        className={classes.details}
                        letterSpacing={{ xxs: 5, ml: 10, lg: 15 }}
                        fontFamily='roboto'
                        marginBottom={3}
                    >
                        02188887744
                    </Typography>
                </Box>

                <Box className={classes.info}>
                    <Box className={classes.title}>
                        <img src={office} alt="دفتر مرکزی هپی لایف" />
                        <Typography className={classes.titleText}>دفتر مرکزی هپی لایف</Typography>
                    </Box>
                    <Typography className={classes.details} marginBottom={{xxs:3, sm: 5,xl: 8}}>
                        تهران - خیابان شادی - پلاک ۴۴ - ساختمان هپی لایف
                    </Typography>
                </Box>

                <form className={classes.form} autoCapitalize='off' noValidate onSubmit={e => formHandler(e)}>
                    <Input
                        placeholder="نام و نام خانوادگی"
                        name='name'
                        color='focus'
                        fullWidth
                        required
                        sx={{ marginBottom: {xxs:2, sm: 4}, color: "#fff", fontSize: {xxs:12, sm: 14, lg: 16} }}
                    // color='white'
                    // value={"title"}
                    // onChange={e => inputHandler(e)}
                    // error={"titleError"}
                    />
                    <Input
                        placeholder="پست الکترونیکی"
                        name='email'
                        color='focus'
                        fullWidth
                        required
                        sx={{ marginBottom: {xxs:2, sm: 4}, color: "#fff", fontSize: {xxs:12, sm: 14, lg: 16} }}
                    // value={"title"}
                    // onChange={e => inputHandler(e)}
                    // error={"titleError"}
                    />
                    <Input
                        placeholder="تلفن تماس"
                        name='phoneNumber'
                        color='focus'
                        fullWidth
                        required
                        sx={{ marginBottom: {xxs:5, sm: 8}, color: "#fff", fontSize: {xxs:12, sm: 14, lg: 16} }}
                    // value={"title"}
                    // onChange={e => inputHandler(e)}
                    // error={"titleError"}
                    />
                    <textarea rows={5} placeholder='پیام متن' className={classes.textarea} />
                </form>
            </div>
        </Paper>
    );
};

export default Contact;