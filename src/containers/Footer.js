import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Container, IconButton, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

// image 
import { forest } from '../constants/images'

// icon
import { navbarLogo, facebook } from "../constants/icons"

const useStyle = makeStyles(theme => {
    return {
        container: {
            background: `url(${forest}) no-repeat center`,
            backgroundSize: 'cover',
            position: 'relative',
            bottom: 0,
            height: 91,
            [theme.breakpoints.up('sm')]: {
                height: 100
            },
            [theme.breakpoints.up('ml')]: {
                height: 120
            },
            [theme.breakpoints.up('lg')]: {
                height: 150
            },
            [theme.breakpoints.up('xl')]: {
                height: 200
            }
        },
        footerLinks: {
            textDecoration: 'none',
            marginLeft: 15,
            display: "flex"
        },
        footerLogo: {
            width: "100%"
        },
        socialMedia: {
            background: '#fff',
            color: '#333',
            width: 6,
            height: 6,
            margin: '0 4px 4px',

            "&:hover": {
                background: "#c0c0c0",
            },

            [theme.breakpoints.up('xs')]: {
                width: 20,
                height: 20,
            },
            [theme.breakpoints.up('ml')]: {
                width: 25,
                height: 25,
            },
            [theme.breakpoints.up('xl')]: {
                width: 30,
                height: 30,
            },
        },
        socialMediaIcon: {
            width: 10,
            height: 10,

            [theme.breakpoints.up('xs')]: {
                width: 12,
                height: 12,
            },
            [theme.breakpoints.up('ml')]: {
                width: 15,
                height: 15,
            },
            [theme.breakpoints.up('xl')]: {
                width: 20,
                height: 20,
            },
        }
    }
})

const Footer = () => {
    const [show, setShow] = useState(true)
    const param = useParams()
    const classes = useStyle()

    useEffect(() => {
        if (param['*'].replace(/[^0-9]/g, '') || param['*'].includes("profile")) {
            setShow(false)
        } else {
            setShow(true)
        }
    }, [param])

    return (
        show &&
        <footer className={classes.container}>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: "space-between",
                    maxWidth: "100% !important",
                    paddingTop: { sm: .5, ml: 1 }
                }}
            >
                <Box display='flex' alignItems='center'>
                    <Link to='/' className={classes.footerLinks}>
                        <Typography className={classes.navOption} fontSize={{ xxs: 10, sm: 12, xl: 14, xxl: 16 }} color='#333'>صفحه اصلی</Typography>
                    </Link>
                    <Link to='/support' className={classes.footerLinks}>
                        <Typography className={classes.navOption} fontSize={{ xxs: 10, sm: 12, xl: 14, xxl: 16 }} color='#333'>پشتیبانی</Typography>
                    </Link>
                    <Link to='/contact' className={classes.footerLinks}>
                        <Typography className={classes.navOption} fontSize={{ xxs: 10, sm: 12, xl: 14, xxl: 16 }} color='#333'>تماس با ما</Typography>
                    </Link>
                    <Link to='/aboutUs' className={classes.footerLinks}>
                        <Typography className={classes.navOption} fontSize={{ xxs: 10, sm: 12, xl: 14, xxl: 16 }} color='#333'>درباره ما</Typography>
                    </Link>
                </Box>
                <Box width={{ xxs: 33, xs: 54, sm: 64, ml: 74, lg: 84, xl: 94, xxl: 120 }}>
                    <img className={classes.footerLogo} src={navbarLogo} alt="logo" />
                </Box>
            </Container>

            <Box position='absolute' bottom="0" left="50%" sx={{ transform: "translateX(-50%)" }}>
                <IconButton className={classes.socialMedia} aria-label="TwitterIcon">
                    <TwitterIcon className={classes.socialMediaIcon} />
                </IconButton>
                <IconButton className={classes.socialMedia} aria-label="facebook">
                    <img className={classes.socialMediaIcon} src={facebook} alt="facebook" />
                </IconButton>
                <IconButton className={classes.socialMedia} aria-label="InstagramIcon">
                    <InstagramIcon className={classes.socialMediaIcon} />
                </IconButton>
            </Box>
        </footer>
    );
};

export default Footer;