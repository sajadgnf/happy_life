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
            textDecoration: 'none'
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
                    sx={{ objectFit: 'contain', my: 1, height: { xxs: 117.7, ml: 150, xxl: 177 } }}
                />
                <div className={classes.cardUnderLine}></div>
                <CardContent sx={{ p: '0 9px 20px !important' }}>

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
                            <>
                                <Typography
                                    align='left'
                                    fontSize={{ xxs: '11.37px', sm: "14px", xl: '16.2px' }}
                                    fontWeight='400'
                                    fontFamily='shabnam'
                                    sx={{ pt: { xxs: "22.24px", lg: "36px" } }}
                                >
                                    {item.discount ? item.discount.toLocaleString() : item.price.toLocaleString()} تومان
                                </Typography>

                                <Typography
                                    align='left'
                                    fontSize={{ xxs: '9.2px', sm: "11px", xl: '13px' }}
                                    fontWeight='400'
                                    color='secondary'
                                    sx={{
                                        textDecoration: "line-through",
                                        marginLeft: { xxs: 4, sm: 5, xl: 5.5 }
                                    }}
                                >
                                    {item.discount && item.price.toLocaleString()}
                                </Typography>
                            </> :
                            <Typography
                                align='left'
                                fontSize={{ xxs: '11.37px', sm: "14px", xl: '16.2px' }}
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