import { Button, Paper, Typography, Box, TextField, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect } from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor'
import InputMask from "react-input-mask"
import { useState } from 'react';

const useStyle = makeStyles(theme => {
    return {
        form: {
            display: "flex",
            alignItems: "space-between",
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 48,
            position: 'relative',
            backgroundColor: "#fff",
            borderRadius: '10px'
        },
        content: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
            flexDirection: 'column',
            [theme.breakpoints.up('xs')]: {
                flexDirection: 'row'
            }
        },
        contentHeader: {
            display: 'flex',
            "&:nth-child(2)": {
                marginRight: 20
            }
        },
        contentTitle: {
            color: '#757575',
            marginRight: 5
        },
        infoButton: {
            position: 'absolute',
            bottom: -18, left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: 10
        },
        cardNumber: {
            border: '1px solid #afafaf',
        },
        input: {
            direction: "ltr",
            height: 38,
            width: 220,
            backgroundColor: 'transparent',
            outline: 'none',
            borderRadius: 5,
            padding: "5px 10px",
            fontSize: 20,
            textAlign: "center",
            "&:focus": {
                borderColor: theme.palette.primary.main
            },
            [theme.breakpoints.up('xs')]:{
                width: 280,
            }
        }
    }
})

const UserBankInfo = () => {

    const classes = useStyle()
    const [editInfo, setEditInfo] = useState(false)
    const [info, setInfo] = useState({
        cardNumber: "",
        accountNumber: "",
        shabaNumber: "",
    })

    const infoHandler = evt => {
        setInfo({ ...info, [evt.target.name]: [evt.target.value] })
    }

    const inputValueHandler = (evt, number) => {
        evt.target.value = Math.max(0, parseInt(evt.target.value)).toString().slice(0, number)
    }

    return (
        <form className={classes.form} onSubmit={e => e.preventDefault()}>
            <Box className={classes.contentContainer} marginBottom={4}>

                <Box className={classes.content}>
                    <Box className={classes.contentHeader}>
                        <BorderColorIcon sx={{ fontSize: 20, color: "#333" }} />
                        <Typography className={classes.contentTitle}>شماره کارت</Typography>
                    </Box>
                    <Box>
                        <InputMask
                            className={`${classes.input} ${classes.cardNumber}`}
                            mask="9999 9999 9999 9999"
                            disabled={editInfo ? false : true}
                            value={info.cardNumber}
                            name="cardNumber"
                            onChange={e => infoHandler(e)}
                        ></InputMask>
                    </Box>
                </Box>

                <Box className={classes.content}>
                    <Box className={classes.contentHeader}>
                        <BorderColorIcon sx={{ fontSize: 20, color: "#333" }} />
                        <Typography className={classes.contentTitle}>شماره حساب</Typography>
                    </Box>
                    <TextField
                        disabled={editInfo ? false : true}
                        type='number'
                        value={info.accountNumber}
                        name="accountNumber"
                        required
                        onChange={e => infoHandler(e)}
                        onInput={e => inputValueHandler(e, 16)}
                        InputProps={{
                            className: classes.input,
                        }}
                    />
                </Box>

                <Box className={classes.content}>
                    <Box className={classes.contentHeader}>
                        <BorderColorIcon sx={{ fontSize: 20, color: "#333" }} />
                        <Typography className={classes.contentTitle}>شماره شبا</Typography>
                    </Box>

                    <Box display='flex' alignItems='center'>
                        <InputMask
                            disabled={editInfo ? false : true}
                            mask="99-999-999999999999999999"
                            className={classes.input}
                            value={info.shabaNumber}
                            name="shabaNumber"
                            required
                            onChange={e => infoHandler(e)}
                        >
                        </InputMask>
                        <Typography marginRight>IR</Typography>
                    </Box>
                </Box>
            </Box>
            {
                editInfo ?
                    <Button
                        className={classes.infoButton}
                        variant='contained'
                        type='submit'
                        onClick={() => setEditInfo(false)}
                    >
                        ثبت اطلاعات
                    </Button> :
                    <Button
                        className={classes.infoButton}
                        variant='contained'
                        onClick={() => setEditInfo(true)}
                    >
                        ویرایش اطلاعات
                    </Button>
            }
        </form>
    );
};

export default UserBankInfo;