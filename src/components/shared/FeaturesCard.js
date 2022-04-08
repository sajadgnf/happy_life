import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles"
import React from 'react';

const useStyle = makeStyles(theme => {
    return {
        featureCard: {
            height: 85,
            width: 85,

            [theme.breakpoints.up('xs')]: {
                width: 'auto',
                height: 80,
            },
            [theme.breakpoints.up('lg')]: {
                height: 110,
            },
            [theme.breakpoints.up('xl')]: {
                height: 120,
            },
            [theme.breakpoints.up('xxl')]: {
                height: 130,
            }
        }
    }
})

const FeaturesCard = ({ feature }) => {

    const classes = useStyle()

    return (
        <Card
            elevation={14}
            className={classes.featureCard}
            sx={{
                borderRadius: {
                    xxs: "25px",
                    lg: "35px",
                    xl: "45px",
                    xxl: "56px"
                }
            }}
        >
            <CardMedia
                component='img'
                height="70%"
                image={feature.img}
                alt="feature"
                sx={{ objectFit: "contain" }}
            />
            <CardContent sx={{ p: 0 }}>
                <Typography
                    align='center'
                    className={classes.featureTitle}
                    sx={{
                        fontSize: {
                            xxs: 8, xs: 4.77, ml: 8.5, lg: 12
                        }
                    }}
                >
                    {feature.title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FeaturesCard;