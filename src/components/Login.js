import React from 'react';
import { Button, Paper, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

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
            width: '90%',
            height: 500,
            border: '2px solid #dadada',
            borderRadius: 40,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: "hidden",

            "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backdropFilter: "blur(15px)",
                boxShadow: "inset -5px -5px 10px rgba(255, 255, 255, 0.3), inset 5px 5px 10px rgba(255, 255, 255, 0.3)",
            }
        },
        logo: {
            margin: "20px auto 60px",
            width: 200,
            zIndex: 2,
        },
        headButton: {
            color: '#333 !important',
            fontSize: "12px !important",
            width: 'fit-content'
        },
        active: {
            position: 'relative',
            "&::before": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: 'translateX(-50%)',
                width: "50%",
                borderBottom: `2px solid ${theme.palette.primary.main}`
            }
        }
    }
})

const Login = () => {

    useTitle("فروشگاه هپی لایف - ورود")

    const classes = useStyle()

    return (
        <Paper elevation={0} className={classes.container}>
            <Box className={classes.content}>
                <img className={classes.logo} src={loginLogo} alt="logo" />
                <Box>
                    <Button className={`${classes.headButton} ${classes.active}`}>ورود</Button>
                    <Button className={classes.headButton}>ثبت نام</Button>
                </Box>
                <form autoCapitalize='off' noValidate>
                    <TextField
                        color="primary"
                        label="نام کاربری"
                        fullWidth
                        margin="normal"
                        required
                        name="نام کاربری"
                        error={'f'}
                    />
                    <TextField
                        color="primary"
                        label="رمز عبور"
                        fullWidth
                        margin="normal"
                        required
                        name="رمز عبور"
                        error={'f'}
                    />
                </form>
                <Typography>رمز عبور خود را فراموش کرده اید؟</Typography>
                <Button variant='contained'>ورود</Button>
            </Box>
        </Paper>
    );
};

export default Login;