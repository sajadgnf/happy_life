import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

// images
import { error404 } from '../constants/images'

const useStyle = makeStyles(theme => {
    return {
        container: {
            background: "#757575",
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: " 50px 5px",
            [theme.breakpoints.up('xs')]: {
                flexDirection: 'row-reverse',
                alignItems: 'unset',
            }
        },
        errorIcon: {
            width: "90%",
            [theme.breakpoints.up('xs')]: {
                width: "100%",
                height: 700,
            },
            [theme.breakpoints.up('xxl')]: {
                width: "100%",
                height: 700
            }
        },
        content: {
            [theme.breakpoints.up('xs')]: {
                position: 'absolute',
                right: '5%'
            }
        },
        errorButton: {
            textDecoration: 'none',
            color: "#333",
            padding: '8px 10px',
            width: '100%',
            [theme.breakpoints.up('xxl')]: {
                fontSize: 16,
                padding: '10px 20px',
            }
        }
    }
})

const ErrorPage = () => {

    const classes = useStyle()

    return (
        <div className={classes.container}>
            <img className={classes.errorIcon} src={error404} alt="404" />
            <Box textAlign='center' marginBottom={10} className={classes.content} >
                <Typography
                    color={"#fff"}
                    marginBottom={2}
                    fontSize={{ xxl: 22 }}
                >
                    متاسفانه صفحه مورد نظر شما یافت نشد
                </Typography>
                <Button variant='contained' sx={{ backgroundColor: '#92e3af', width: 300, p: 0 }}>
                    <Link className={classes.errorButton} to="/">بازگشت به صفحه اصلی</Link>
                </Button>
            </Box>
        </div>
    );
};

export default ErrorPage;