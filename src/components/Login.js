import React from 'react';
import { Button, FormControl, InputLabel, InputBase, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

// functions
import { useTitle } from '../helper/functions';

// images & icons
import { forestBg } from '../constants/images';
import { loginLogo } from "../constants/icons"

const useStyle = makeStyles(theme => {
    return {
        container: {
            background: `url(${forestBg})no-repeat center`,
            backgroundSize: 'cover',
            minHeight: "100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center"
        },
        content: {
            width: '300px',
            height: 500,
            border: '2px solid #dadada',
            borderRadius: 40,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: "hidden",
            padding: 20,
            "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backdropFilter: "blur(15px)",
                boxShadow: "inset -5px -5px 10px rgba(255, 255, 255, 0.3), inset 5px 5px 10px rgba(255, 255, 255, 0.3)",
                background: "linear-gradient(168.05deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)"
            },
            [theme.breakpoints.up("lg")]: {
                width: '360px',
            },
            [theme.breakpoints.up("xxl")]: {
                width: '400px',
            }
        },
        logoContainer: {
            margin: "0 auto 30px",
            zIndex: 2
        },
        logo: {
            width: 200,
            zIndex: 2,
        },
        headButton: {
            color: '#000',
            fontSize: 14,
            textDecoration: "none",
            fontWeight: 700,
        },
        active: {
            position: 'relative',
            paddingBottom: 5,
            marginLeft: 20,
            "&::before": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: 'translateX(-50%)',
                width: "100%",
                borderBottom: `2px solid ${theme.palette.primary.main}`
            }
        },
        submitBtn: {
            marginTop: "40px !important",
            borderRadius: "24px !important",
            height: 33,
            boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.25), inset -2px -2px 4px rgba(0, 0, 0, 0.25) !important",
            [theme.breakpoints.up("lg")]: {
                height: 43,
            }
        }
    }
})

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 16,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, .5)' : '#2b2b2b',
        boxShadow: "2.56px 5.12px 10.24px rgba(0, 0, 0, 0.25)",
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '100%',
        margin: '0 auto',
        border: 'none',
        padding: '5px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        [theme.breakpoints.up("lg")]: {
            padding: '10px 12px',
            borderRadius: 24,
        }
    },
}));

const Login = () => {

    useTitle("فروشگاه هپی لایف - ورود")

    const classes = useStyle()


    //                         fetch('http://localhost:3300/auth/login', {
    //                             method: 'POST',
    //                         headers: {'Content-Type': 'application/json' },
    //                         body: JSON.stringify({
    //                             email: <test email>,
    //                                 password: <test password>,
    //     })
    //   })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))

    return (
        <Paper elevation={0} className={classes.container}>
            <Box className={classes.content}>
                <Link to='/' className={classes.logoContainer}>
                    <img className={classes.logo} src={loginLogo} alt="logo" />
                </Link>
                <Box marginBottom={4} zIndex={2}>
                    <Link to="/login" className={`${classes.headButton} ${classes.active}`}>ورود</Link>
                    <Link to="/signin" className={classes.headButton}>ثبت نام</Link>
                </Box>
                <form autoCapitalize='off' noValidate style={{ zIndex: 2 }}>
                    <FormControl variant="standard" sx={{ width: "100%", mb: 2 }}>
                        <InputLabel sx={{ color: '#fff', width: '129%', }} shrink focused={false} htmlFor="userName">
                            نام کاربری
                        </InputLabel>
                        <BootstrapInput id="userName" />
                    </FormControl>

                    <FormControl variant="standard" sx={{ width: "100%", mb: 1 }}>
                        <InputLabel sx={{ color: '#fff', width: '129%', }} shrink focused={false} htmlFor="password">
                            رمز عبور
                        </InputLabel>
                        <BootstrapInput id="password" />
                    </FormControl>

                    <Typography fontSize={12} color={"#fff"} marginBottom={4} sx={{ cursor: 'pointer' }}>رمز عبور خود را فراموش کرده اید؟</Typography>
                    <Button variant='contained' fullWidth className={classes.submitBtn}>ورود</Button>
                </form>
            </Box>
        </Paper>
    );
};

export default Login;