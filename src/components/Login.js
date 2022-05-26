import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, InputBase, Paper, Typography, InputAdornment } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import 'react-toastify/dist/ReactToastify.css';

// functions
import { useTitle, validate } from '../helper/functions';

// images & icons
import { forestBg } from '../constants/images';
import { loginLogo } from "../constants/icons"
import loader from "../assets/gifs/loading.gif"

// toast
import { notify } from './shared/Toast';

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
        form: {
            zIndex: 2,
            paddingBottom: 25
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
        },
        loader: {
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 4
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

const Login = ({ setLoggedIn }) => {

    useTitle("فروشگاه هپی لایف - ورود")

    const classes = useStyle()
    const [touched, setTouched] = useState({})
    const [errors, setErrors] = useState({})
    const [showPass, setShowPass] = useState(false)
    const [loading, setLoading] = useState(false)
    const [information, setInformation] = useState({
        email: '',
        password: ''
    })

    const inputHandler = event => {
        setInformation({ ...information, [event.target.id]: event.target.value })
    }

    const focusHandler = event => setTouched({ ...touched, [event.target.id]: true })

    useEffect(() => {
        setErrors(validate(information, "logIn"))
    }, [information, touched])

    const submitHandler = event => {
        event.preventDefault()
        setLoading(true)
        fetch('https://api.freerealapi.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: information.email,
                password: information.password,
            })
        })
            .then((response) => {
                if (!Object.keys(errors).length && 200 <= response.status && response.status < 300) {
                    notify('شما با موفقیت وارد شدید', "success")
                    setLoggedIn(true)
                    window.location.href = "/profile"
                }
                else if (!Object.keys(errors).length) {
                    notify('ایمیل یا پسورد را به صورت اشتباه وارد کرده اید', "error")
                }
                else {
                    notify('لطفا اطلاعات خود را به صورت صحیح وارد نمایید', "error")
                    setTouched({
                        email: true,
                        password: true
                    })
                }
                setLoading(false)
                return response.json()
            })
            .then((json) => console.log(json))
    }



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
                <form autoCapitalize='off' noValidate className={classes.form} onSubmit={event => submitHandler(event)}>
                    <FormControl
                        variant="standard"
                        sx={{ width: "100%", mb: 2 }}
                    >
                        <InputLabel
                            sx={{ color: '#fff', width: '129%' }}
                            shrink
                            focused={false}
                            htmlFor="email"
                        >
                            ایمیل
                        </InputLabel>
                        <BootstrapInput
                            id="email"
                            value={information.email}
                            onChange={event => inputHandler(event)}
                            onFocus={event => focusHandler(event)}
                        />
                        {errors.email && touched.email && <Typography variant='body2' marginTop={.5} color={"#782228"}>{errors.email}</Typography>}
                    </FormControl>

                    <FormControl
                        variant="standard"
                        sx={{ width: "100%", mb: 1 }}
                    >
                        <InputLabel
                            sx={{ color: '#fff', width: '129%' }}
                            shrink
                            focused={false}
                            htmlFor="password"
                        >
                            رمز عبور
                        </InputLabel>
                        <BootstrapInput
                            id="password"
                            value={information.password}
                            onChange={event => inputHandler(event)}
                            onFocus={event => focusHandler(event)}
                            type={showPass ? "text" : "password"}
                            endAdornment={
                                <InputAdornment
                                    position="end"
                                    sx={{ position: 'absolute', left: 5, cursor: "pointer" }}
                                >
                                    {
                                        showPass ?
                                            <VisibilityOffIcon onClick={() => setShowPass(false)} /> :
                                            <VisibilityIcon onClick={() => setShowPass(true)} />
                                    }
                                </InputAdornment>
                            }
                        />
                        {errors.password && touched.password && <Typography variant='body2' marginTop={.5} color={"#782228"}>{errors.password}</Typography>}
                    </FormControl>

                    <Typography
                        fontSize={12}
                        color={"#fff"}
                        marginBottom={4}
                        sx={{ cursor: 'pointer' }}
                    >
                        رمز عبور خود را فراموش کرده اید؟
                    </Typography>
                    <Button
                        type="submit"
                        variant='contained'
                        fullWidth
                        className={classes.submitBtn}
                    >
                        ورود
                    </Button>
                </form>
            </Box>

            {
                loading &&
                <Box>
                    <img className={classes.loader} src={loader} alt="loading" />
                </Box>
            }

        </Paper>
    );
};

export default Login;