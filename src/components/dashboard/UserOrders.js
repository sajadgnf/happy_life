import { Badge, Button, Divider, Paper, styled } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// components
import CurrentOrders from "./userOrdersPages/CurrentOrders"
import DeliveredOrders from "./userOrdersPages/DeliveredOrders"
import ReferredOrders from "./userOrdersPages/ReferredOrders"

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        top: 16,
        left: 8,
        fontSize: 10,
        minWidth: 10,
        width: 14,
        height: 14,
        lineHeight: 2,
        color: "#fff",

        [theme.breakpoints.up('ml')]: {
            width: 18,
            height: 18,
            fontSize: 11,
            lineHeight: 12,
        },
    }
}))

const useStyle = makeStyles(theme => {
    return {
        directionBtn: {
            fontSize: 12
        },
        selectedDirection: {
            position: 'relative',

            "&:after": {
                content: "''",
                position: "absolute",
                bottom: 0,
                left: -5,
                width: "100%",
                height: "3px",
                backgroundColor: theme.palette.customRed.main
            }
        }
    }
})

const UserOrders = () => {

    const classes = useStyle()
    const [direct, setDirect] = useState('current')
    const counter = useSelector(store => store.cartState.itemsCounter)

    const directHandler = evt => {
        setDirect(evt.target.dataset.name)
    }

    return (
        <Paper elevation={0} sx={{ minHeight: "100vh", p: "48px 20px" }} >
            <Box display="flex" justifyContent={{ xxs: 'space-between', xs: 'unset' }} marginLeft="10px">
                <StyledBadge
                    color='customRed'
                    badgeContent={counter}
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                >
                    <Button
                        className={`${classes.directionBtn} ${direct === "current" && classes.selectedDirection}`}
                        data-name="current"
                        color='customRed'
                        onClick={evt => directHandler(evt)}
                    >
                        جاری
                    </Button>
                </StyledBadge>

                <StyledBadge
                    color='customRed'
                    badgeContent={2}
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                >
                    <Button
                        className={`${classes.directionBtn} ${direct === "delivered" && classes.selectedDirection}`}
                        sx={{ ml: "11px", mr: "20px" }}
                        data-name="delivered"
                        color='customRed'
                        onClick={evt => directHandler(evt)}
                    >
                        تحویل شده
                    </Button>
                </StyledBadge>

                <StyledBadge
                    color='customRed'
                    badgeContent={2}
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                >
                    <Button
                        className={`${classes.directionBtn} ${direct === "referred" && classes.selectedDirection}`}
                        sx={{ ml: "11px", mr: "20px" }}
                        data-name="referred"
                        color='customRed'
                        onClick={evt => directHandler(evt)}
                    >
                        مرجوع شده
                    </Button>
                </StyledBadge>
            </Box>
            <Divider />
            <Box>
                {direct === 'current' && <CurrentOrders />}
                {direct === "delivered" && <DeliveredOrders />}
                {direct === "referred" && <ReferredOrders />}
            </Box>
        </Paper>
    );
};

export default UserOrders;