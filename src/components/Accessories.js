import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles"
import Grid from "@mui/material/Grid"
import React from 'react';

// components
import CardComponent from "./shared/CardComponent";

// images
import { eidOffer } from "../constants/images"

// functions
import { useTitle } from "../helper/functions";

const useStyle = makeStyles(theme => {
    return {
        container: {
            padding: "0 32px",

            [theme.breakpoints.up('sm')]: {
                padding: "0 40px"
            },
            [theme.breakpoints.up('ml')]: {
                padding: "0 80px"
            },
            [theme.breakpoints.up('lg')]: {
                padding: "0 108px"
            }
        },
        headerImage: {
            background: `url(${eidOffer}) no-repeat center`,
            backgroundSize: 'cover',
            height: 180,
            marginTop: '89px',

            [theme.breakpoints.up('lg')]: {
                marginTop: '120px',
                height: 225
            },
            [theme.breakpoints.up('xxl')]: {
                height: 306,
            }
        }
    }
})


const Accessories = ({ show, productsState }) => {

    const classes = useStyle()
    
    useTitle("خرید و قیمت لوازم جانبی")

    return (
        <Paper elevation={0} className={classes.container}>

            {show && <div className={classes.headerImage}></div>}

            <div>
                <div>
                    {/* filters */}
                </div>

                <Grid
                    container
                    spacing={{ xxs: 2, xl: 5, xxl: 6 }}
                    sx={{
                        m: {
                            xxs: "50px 0 24px !important",
                            ml: '20px 0 40px !important',
                            lg: '40px 0 !important'
                        }
                    }}>
                    {
                        productsState.products.accessories.map(item => (
                            <Grid item key={item.id} xxs={6} lg={4}>
                                <CardComponent item={item} section="accessories" />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </Paper>
    );
};

export default Accessories;