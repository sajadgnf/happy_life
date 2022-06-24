import { Divider, IconButton, List, ListItemText, Paper, Typography } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { makeStyles } from "@mui/styles"
import { Box } from '@mui/system';
import Close from '@mui/icons-material/Close'
import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useRef } from 'react';

// icons
import { dashUser, dashCart, dashChat, dashLogin, dashRedo, dashWeb, heart, navbarLogo } from "../../constants/icons"

const useStyle = makeStyles(theme => {
    return {
        link: {
            textDecoration: "none",
            color: "#333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: 'relative',

            "& div": {
                margin: '16px 0',
            },

            "& span": {
                fontSize: "16px",
                [theme.breakpoints.up('ml')]: {
                    fontSize: "14px"
                },
                [theme.breakpoints.up('lg')]: {
                    fontSize: "16px"
                },
            },

            "& img": {
                width: "32px",
                height: "32px",
                margin: "0 8px"
            },
        },

        selected: {
            "&::after": {
                content: '""',
                position: 'absolute',
                right: 0,
                top: "50%",
                transform: 'translateY(-50%)',
                height: '45px',
                width: "5px",
                backgroundColor: "#227872"
            }
        },

        logo: {
            width: 120
        }

    }
})

const Sidebar = ({ setDirect, setOpen, show }) => {

    const classes = useStyle()
    const ref = useRef()
    const location = useLocation()

    useEffect(() => {
        if (ref.current) {
            for (let i = 0; i < ref.current.children.length; i++) {
                const item = ref.current.children[i]
                if (item.nodeName === "A") {
                    item.classList.add('selected')
                    if (item.dataset.name === location.pathname.split("/")[2]) {
                        setDirect(item.children[1].firstElementChild.innerText)
                    }
                }
            }
        }
    }, [location])

    return (
        <Paper
            elevation={0}
            sx={{
                position: "relative",
                width: { xxs: "100vw", ml: "auto" }
            }}>
            <Box backgroundColor="#227872" height='178px' textAlign='left'>
                {
                    !show &&
                    <IconButton
                        disableRipple
                        sx={{ color: '#fff' }}
                        onClick={() => setOpen(false)}
                    >
                        <Close />
                    </IconButton>
                }
            </Box>
            <Box
                position="absolute"
                top={112.9}
                left="50%"
                display='flex'
                justifyContent='center'
                alignItems="center"
                flexDirection='column'
                sx={{ transform: "translateX(-50%)" }}
            >
                <Box
                    backgroundColor="#fff"
                    width={{ xxs: 130, ml: 95, lg: 130 }}
                    height={{ xxs: 130, ml: 95, lg: 130 }}
                    borderRadius="50%"
                    display='flex'
                    justifyContent='center'
                    alignItems="center"
                    background="rgb(255, 255, 255)"
                    border="1px solid silver"
                >
                    <PersonOutlineIcon sx={{ fontSize: { xxs: '100px', ml: "70px", lg: "100px" }, color: "#333" }} />
                </Box>
                <Typography variant='subtitle2' marginTop={1} color='textSecondary'>{JSON.parse(localStorage.getItem('auth_info')).email}</Typography>
            </Box>
            <List
                ref={ref}
                aria-label="main mailbox folders"
                sx={{ mt: { xxs: 15, ml: 10, lg: 18 } }}
            >

                <Divider />
                <Link
                    className={`${classes.link} ${location.pathname.includes('info') && classes.selected}`}
                    to="/profile/info"
                    onClick={() => !show && setOpen(false)}
                    data-name="info"
                >
                    <img src={dashUser} alt="info" />
                    <ListItemText primary="اطلاعات حساب کاربری" />
                </Link>

                <Divider />
                <Link
                    className={`${classes.link} ${location.pathname.includes('my-orders') && classes.selected}`}
                    to="/profile/my-orders"
                    onClick={() => !show && setOpen(false)}
                    data-name="my-orders"
                >
                    <img src={dashCart} alt="my-orders" />
                    <ListItemText primary="سفارش های من" />
                </Link>

                <Divider />
                <Link
                    className={`${classes.link} ${location.pathname.includes('likes') && classes.selected}`}
                    to="/profile/likes"
                    onClick={() => !show && setOpen(false)}
                    data-name="likes"
                >
                    <img src={heart} alt="likes" />
                    <ListItemText primary="علاقه مندی ها" />
                </Link>

                <Divider />
                <Link
                    className={`${classes.link} ${location.pathname.includes('addresses') && classes.selected}`}
                    to="/profile/addresses"
                    onClick={() => !show && setOpen(false)}
                    data-name="addresses"
                >
                    <img src={dashWeb} alt="addresses" />
                    <ListItemText primary="آدرس ها" />
                </Link>

                <Divider />
                <Link
                    className={`${classes.link} ${location.pathname.includes('messages') && classes.selected}`}
                    to="/profile/messages"
                    onClick={() => !show && setOpen(false)}
                    data-name="messages"
                >
                    <img src={dashChat} alt="messages" />
                    <ListItemText primary="پیام ها" />
                </Link>

                <Divider />
                <Link
                    className={`${classes.link} ${location.pathname.includes('return-goods') && classes.selected}`}
                    to="/profile/return-goods"
                    onClick={() => !show && setOpen(false)}
                    data-name="return-goods"
                >
                    <img src={dashRedo} alt="return" />
                    <ListItemText primary="بازشت کالا" />
                </Link>

                <Divider />
                <Box
                    className={classes.link}
                    sx={{ cursor: "pointer" }}
                >
                    <img src={dashLogin} alt="exit" />
                    <ListItemText primary="خروج" />
                </Box>

                <Box
                    textAlign="center"
                    marginTop={15}
                >
                    <img className={classes.logo} src={navbarLogo} alt="logo" />
                </Box>
            </List>
        </Paper >
    );
};

export default Sidebar;