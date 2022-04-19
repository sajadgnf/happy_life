import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import LinesEllipsis from 'react-lines-ellipsis'
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom"
import React from 'react';
import { useDispatch } from 'react-redux';

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
        cardLink: {
            color: "#333",
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'row-reverse',
            [theme.breakpoints.up('xs')]: {
                flexDirection: 'column'
            },
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
            fontSize: 11,
            fontWeight: '400',
            fontFamily: 'estedad', height: 50,

            [theme.breakpoints.up('xs')]: {
                fontSize: 11
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: 12
            },
            [theme.breakpoints.up('xxl')]: {
                fontSize: 13.2,
            },
        }
    }
})

const CardComponent = ({ item, section }) => {

    const classes = useStyle()
    const dispatch = useDispatch()

    const detailsHandler = () => {
        dispatch({ type: section.toUpperCase() })
    }

    return (
        <Card
            elevation={13}
            className={classes.cardContainer}
            sx={{ borderRadius: '8px' }}
        >
            <Link to={`/${section}/${item.id}`} className={classes.cardLink} onClick={() => detailsHandler()}>
                <CardMedia
                    component='img'
                    image={item.image.main}
                    alt="feature"
                    sx={{
                        objectFit: 'contain',
                        my: 1,
                        height: { xxs: 117.7, ml: 150, xxl: 177 },
                        width: { xxs: 'fit-content', xs: 'unset' }
                    }}
                />
                <div className={classes.cardUnderLine}></div>
                <CardContent sx={{ p: '20px 9px 20px !important', pt: { xs: "0 !important" } }}>

                    <LinesEllipsis
                        className={classes.title}
                        text={item.title}
                        maxLine='2'
                        ellipsis='...'
                        trimRight
                        component={'p'}
                        basedOn='words'
                    />
                    {
                        item.available ?

                            <Typography
                                align='left'
                                fontSize={{ xxs: '14px', xl: '16.2px' }}
                                fontWeight='400'
                                fontFamily='shabnam'
                                sx={{ pt: { xxs: "22.24px", lg: "36px" } }}
                            >
                                {item.price.toLocaleString()} تومان
                            </Typography> :

                            <Typography
                                align='left'
                                fontSize={{ xxs: '14.37px', sm: "14px", xl: '16.2px' }}
                                fontWeight='400'
                                fontFamily='shabnam'
                                sx={{ pt: { xxs: "22.24px", lg: "36px" } }}
                            >
                                ناموجود
                            </Typography>
                    }
                </CardContent>
            </Link>
        </Card >
    );
};

export default CardComponent;