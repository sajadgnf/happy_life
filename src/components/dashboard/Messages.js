import { Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

//images
import { mailBox } from '../../constants/images';

const useStyles = makeStyles(theme => {
    return {
        mailBoxIcon: {
            width: '150px',
            [theme.breakpoints.up('ml')]: {
                width: 'auto',
            }
        }
    }
})

const Messages = () => {

    const classes = useStyles()

    return (
        <Paper
            elevation={0}
            sx={{
                backgroundColor: 'transparent',
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <img className={classes.mailBoxIcon} src={mailBox} alt="صندق پیام ها" />
            <Typography fontWeight='bold'>هنوز هیج پیامی نیومده</Typography>
        </Paper>
    );
};

export default Messages;