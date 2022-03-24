import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import LinesEllipsis from 'react-lines-ellipsis'
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles(theme => {
    return {
        cardContainer: {
            height: '100%',
            border: "1px solid #cbcbcb",
            cursor: 'pointer',
            "&:hover": {
                boxShadow: "1px 3px 8px 0px rgba(0, 0, 0, 50%)",
            }
        },
        cardUnderLine: {
            borderBottom: "1px solid #cbcbcb",
            marginBottom: 5,

            [theme.breakpoints.up('ml')]: {
                marginBottom: 10
            },
            [theme.breakpoints.up('xxl')]: {
                marginBottom: 15
            },
        },

        title: {
            fontSize: 9.37,
            fontWeight: '400',
            fontFamily: 'estedad', height: 50,

            [theme.breakpoints.up('sm')]: {
                fontSize: 12
            },
            [theme.breakpoints.up('xxl')]: {
                fontSize: 13.2,
            },
        }
    }
})

const Amazing = ({ item }) => {

    const classes = useStyle()

    return (
        <Card
            elevation={13}
            className={classes.cardContainer}
            sx={{ borderRadius: '8px'}}
        >
            <CardMedia
                component='img'
                image={item.image.main}
                alt="feature"
                sx={{ objectFit: 'contain', my: 1, height: { xxs: 117.7, ml: 150, xxl: 177 } }}
            />
            <div className={classes.cardUnderLine}></div>
            <CardContent sx={{ p: '0 9px 10px !important' }}>
                
                <LinesEllipsis
                    className={classes.title}
                    text={item.title}
                    maxLine='2'
                    ellipsis='...'
                    trimRight
                    component={'p'}
                    basedOn='words'
                />
                <Typography
                    align='left'
                    fontSize={{ xxs: '9.37px', sm: "12px", xl: '13.2px' }}
                    fontWeight='400'
                    sx={{ paddingTop: { xxs: "22.24px", lg: "36px" } }}
                >
                    {item.discount ? item.discount : item.price} تومان
                </Typography>

                <Typography
                    align='left'
                    fontSize={{ xxs: '8.2px', sm: "10px", xl: '12px' }}
                    fontWeight='400'
                    color='secondary'
                    sx={{
                        textDecoration: "line-through",
                        marginLeft: { xxs: 3, sm: 4, xl: "38px" }
                    }}
                >
                    {item.discount && item.price}
                </Typography>
            </CardContent>
        </Card >
    );
};

export default Amazing;