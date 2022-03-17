import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles"
import React from 'react';

const useStyle = makeStyles(theme => {
    return {
        featureCard: {
            height: 64,
            width: 64,
            margin: 'auto',

            [theme.breakpoints.up('xs')]: {
                width: 'auto',
                height: 80,
                borderRadius: "25px !important"
            },
            [theme.breakpoints.up('lg')]: {
                height: 120,
                borderRadius: "40px !important",
                fontSize: "14px !important"
            },
            [theme.breakpoints.up('xl')]: {
                height: 184,
                borderRadius: "58px !important"
            }
        },
        featureTitle: {
            [theme.breakpoints.up('ml')]: {
                fontSize: "8.5px !important"
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: "14px !important"
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
            sx={{ borderRadius: "18.77px" }}
        >
            <CardMedia
                component='img'
                height="70%"
                image={feature.img}
                alt="feature"
                sx={{ objectFit: "contain" }}
            />
            <CardContent sx={{ padding: 0 }}>
                <Typography
                    align='center'
                    className={classes.featureTitle}
                    sx={{ fontSize: 4.77 }}
                >
                    {feature.title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FeaturesCard;