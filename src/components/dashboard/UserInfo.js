import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from "@mui/styles"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from 'react';

// components
import Gauge from './Chart';
import UserInfoForm from './UserInfoForm';
import UserBankInfo from './UserBankInfo';

const useStyle = makeStyles({
    walletInfo: {
        fontSize: 20,
        fontWeight: 'bold',
        "& sub": {
            fontWeight: 'lighter',
            fontSize: 12,
            color: '#757575',
            display: 'flex',
            alignItems: "center",
            justifyContent: 'flex-end',
            marginRight: 30,
            cursor: 'pointer'
        }
    },
    infoTitleContainer: {
        margin: "80px 0 20px",
        backgroundColor: "#fff",
        padding: 26,
        borderRadius: 8
    }
})

const UserInfo = () => {

    const classes = useStyle()

    return (
        <Paper elevation={0} sx={{ background: 'transparent' }}>
            <Box
                display='flex'
                justifyContent="space-between"
                alignItems="center"
                flexDirection={{ xxs: "column", lg: 'row' }}
                height={{ lg: 234 }}
            >
                <Box
                    height={{ lg: "100%" }}
                    backgroundColor="#fff"
                    width={{ xxs: '100%', lg: "48%" }}
                    borderRadius='10px'
                    marginBottom={{xxs: 5, lg: 0}}
                    marginTop={{xxs: 5, lg:0}}
                >
                    <Gauge />
                </Box>

                <Box
                    backgroundColor="#D0F0CB"
                    height={{ lg: "100%" }}
                    width={{ xxs: '100%', lg: "48%" }}
                    borderRadius='10px'
                    padding={6}
                    display="flex"
                    flexDirection='column'
                    justifyContent='space-between'
                >
                    <Box display='flex' justifyContent='space-between'>
                        <Typography className={classes.walletInfo}>
                            کیف پول <sub>فعال سازی<ArrowBackIosIcon sx={{ fontSize: 12 }} /></sub>
                        </Typography>
                        <Typography
                            className={classes.walletInfo}
                            fontFamily="shabnam"
                        >
                            0 تومان
                        </Typography>
                    </Box>
                    <Box display='flex' justifyContent='space-between'>
                        <Typography className={classes.walletInfo}>
                            امتیاز ها<sub>نحوه امتیاز گیری<ArrowBackIosIcon sx={{ fontSize: 12 }} /></sub>
                        </Typography>
                        <Typography
                            className={classes.walletInfo}
                            fontFamily="shabnam"
                        >10 امتیاز
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box>
                <Box className={classes.infoTitleContainer}>
                    <Typography variant='h5' fontFamily='shabnam'>
                        مشخصات فردی
                    </Typography>
                </Box>
                <Box>
                    <UserInfoForm />
                </Box>
            </Box>

            <Box>
                <Box className={classes.infoTitleContainer}>
                    <Typography variant='h5' fontFamily='shabnam'>
                        اطلاعات حقوقی
                    </Typography>
                </Box>
                <Box>
                    <UserBankInfo />
                </Box>
            </Box>
        </Paper >
    );
};

export default UserInfo;