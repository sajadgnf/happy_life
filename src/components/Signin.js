import React from 'react';
import { Paper } from '@mui/material'
import { makeStyles } from '@mui/styles';

// functions
import { useTitle } from '../helper/functions';

// images
import { forestBg } from '../constants/images';

const useStyle = makeStyles({
    container: {
        background: `url(${forestBg})no-repeat center`
    }
})

const Signin = () => {

    const classes = useStyle()

    useTitle("فروشگاه هپی لایف - ثبت نام")

    return (
        <Paper elevation={0} className={classes.container}>
            coming soon
        </Paper>
    );
};

export default Signin;