import { Button, Input, Modal, Paper, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import React, { useState } from 'react';

//icons
import { address as addressIcon, dashboardPhone, map, person } from '../../constants/icons';

const useStyles = makeStyles({
    option: {
        display: 'block',
        background: "#666",
        borderRadius: "50%",
        width: 7,
        height: 7,
        marginBottom: 1
    },
    info: {
        display: "flex",
        alignItems: "center",
        margin: '8px 0',
        color: '#757575',

        "& img": {
            marginLeft: 8
        }
    },
    modalsOption: {
        fontSize: 15,
        marginRight: 8,
        color: '#333'
    }
})

const style = {
    position: 'absolute',
    top: 190,
    left: 60,
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 1,
    pb: 3,
    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.2)",
    outline: 'none',
};

const Addresses = () => {

    const classes = useStyles()
    const [deleteAddress, setDeleteAddress] = useState(false)
    const [open, setOpen] = useState(false)
    const [changeAddress, setChangeAddress] = useState(false)
    const [addressInfo, setAddressInfo] = useState({
        city: "تهران",
        address: "میدان گشایش .خ آرامش . پلاک 44 . واحد 22",
        zipCode: 19948542288,
        cell: 91922244432,
        name: "سعید رضایی"
    })

    const addressInfoHandler = evt => {
        setAddressInfo({ ...addressInfo, [evt.target.name]: [evt.target.value] })
    }

    const { city, address, zipCode, cell, name } = addressInfo

    return (
        !deleteAddress &&
        <Paper elevation={0} sx={{ p: { xxs: '17px', xsm: "30px" } }}>
            {
                !changeAddress ?
                    <>
                        <Box display="flex" justifyContent="space-between" marginBottom={3}>
                            <Typography fontWeight='bold'>
                                {city} . {address}
                            </Typography>
                            <Box sx={{ position: "relative", cursor: 'pointer' }} onClick={() => setOpen(true)}>
                                <span className={classes.option}></span>
                                <span className={classes.option}></span>
                                <span className={classes.option}></span>
                            </Box>
                        </Box>
                        <Box display='flex' justifyContent="space-between">
                            <Box>
                                <Box className={classes.info}>
                                    <img src={addressIcon} alt="address icon" />
                                    <Typography>{city} - {zipCode}</Typography>
                                </Box>

                                <Box className={classes.info}>
                                    <img src={dashboardPhone} alt="cellphone icon" />
                                    <Typography>{cell}</Typography>
                                </Box>

                                <Box className={classes.info}>
                                    <img src={person} alt="user icon" />
                                    <Typography>{name}</Typography>
                                </Box>
                            </Box>
                            <img src={map} alt="" />
                        </Box>
                    </> :
                    <Box display="flex" flexDirection="column" marginTop={3}>
                        <TextField
                            color="secondary"
                            sx={{ mb: 2 }}
                            placeholder='شهر'
                            name='city'
                            value={addressInfo.city}
                            onChange={(evt) => addressInfoHandler(evt)}
                        />
                        <TextField
                            color="secondary"
                            sx={{ mb: 2 }}
                            placeholder='آدرس'
                            name='address'
                            value={addressInfo.address}
                            onChange={(evt) => addressInfoHandler(evt)}
                        />
                        <TextField
                            color="secondary"
                            sx={{ mb: 2 }}
                            type="number"
                            placeholder='کد پستی'
                            name='zipCode'
                            value={addressInfo.zipCode}
                            onChange={(evt) => addressInfoHandler(evt)}
                        />
                        <TextField
                            color="secondary"
                            sx={{ mb: 2 }}
                            type="number"
                            placeholder='شماره همراه'
                            name='cell'
                            value={addressInfo.cell}
                            onChange={(evt) => addressInfoHandler(evt)}
                        />
                        <TextField
                            color="secondary"
                            sx={{ mb: 2 }}
                            placeholder='نام و نام خانوادگی'
                            name='name'
                            value={addressInfo.name}
                            onChange={(evt) => addressInfoHandler(evt)}
                        />
                        <Button variant='contained' onClick={() => setChangeAddress(false)}>ثبت آدرس</Button>
                    </Box>
            }


            <Modal
                hideBackdrop
                open={open}
                onClick={() => setOpen(false)}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 160 }}>
                    <Button sx={{ cursor: 'pointer' }} onClick={() => setChangeAddress(true)}>
                        <BorderColorIcon sx={{ fontSize: 20, color: "#333" }} />
                        <Typography className={classes.modalsOption}>ویرایش آدرس</Typography>
                    </Button>
                    <Button sx={{ cursor: 'pointer' }} onClick={() => setDeleteAddress(true)}>
                        <DeleteOutlineIcon sx={{ fontSize: 20, color: "#333" }} />
                        <Typography className={classes.modalsOption}>حذف آدرس</Typography>
                    </Button>
                </Box>
            </Modal>
        </Paper>

    );
};

export default Addresses;