import { IconButton, Paper, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const Header = ({ direct, setOpen, show }) => {
    return (
        <Paper elevation={0} sx={{ display: "flex", justifyContent: 'space-between', height: "83px", mx: { ml: 3 } }}>
            <Typography variant='h5' fontSize={{xxs: "20px", ml: "22px"}} marginRight={3} lineHeight="83px">{direct}</Typography>
            {
                !show &&
                <IconButton
                    size="large"
                    edge="start"
                    aria-label='open drawer'
                    disableRipple
                    sx={{ p: 0, ml: 3 }}
                    onClick={() => setOpen(true)}
                >
                    <MenuIcon sx={{ color: '#333' }} />
                </IconButton>
            }
        </Paper>
    );
};

export default Header;