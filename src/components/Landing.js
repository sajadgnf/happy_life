import { Paper, InputBase, Grid, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import React, { useEffect, useState } from 'react';

// images
import {
    frame, frame1, logo, delivery, guarantee, originality, payment, price, support
} from "../constants/landingImages"

//components
import FeaturesCard from './shared/FeaturesCard';


const useStyle = makeStyles(theme => {
    return {
        bgImage: {
            background: `url(${frame}) no-repeat center`,
            backgroundSize: 'cover',
            height: 276,
            width: "100%",
            position: 'relative',
            transition: ".5s all linear",

            [theme.breakpoints.up('xs')]: {
                height: 350
            },
            [theme.breakpoints.up('sm')]: {
                height: 480,
            },
            [theme.breakpoints.up('lg')]: {
                height: 500
            },
            [theme.breakpoints.up('xl')]: {
                background: `url(${frame1}) no-repeat bottom`,
                backgroundSize: 'cover',
                height: 520,
            },
        },
        searchBox: {
            position: "absolute",
            top: "94.5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 219,
            height: 32,
            borderRadius: 4,
            transition: ".5s all linear",

            [theme.breakpoints.up('xs')]: {
                top: "95.5%",
            },
            [theme.breakpoints.up('sm')]: {
                width: 319,
                top: "96.5%"
            },
            [theme.breakpoints.up('ml')]: {
                height: 40,
                top: "96%",
            },
            [theme.breakpoints.up('lg')]: {
                width: 500,
                height: 55,
                top: "94.5%"
            }
        },
        searchInput: {
            [theme.breakpoints.up('lg')]: {
                fontSize: "14px !important"
            },
        },
        searchIcon: {
            backgroundColor: theme.palette.primary.main,
            boxShadow:
                "0.6590743064880371px 0px 9.227041244506836px 0px rgba(0, 0, 0, 0.52) inset, 1.3181486129760742px 1.9772230386734009px 2.6362972259521484px 0px rgba(0, 0, 0, 0.25)",
            padding: 5,
            borderRadius: 10,
            color: '#fff',
            cursor: 'pointer',

            [theme.breakpoints.up('lg')]: {
                height: 40,
                width: 40,
                borderRadius: 16,
                top: "94.5%"
            }
        },
        logoContainer: {
            height: 46,
            width: 146,
            display: "flex",
            justifyContent: "center",
            margin: '40px auto 16px',

            [theme.breakpoints.up('sm')]: {
                height: 'auto',
                width: 220,
            },
            [theme.breakpoints.up('lg')]: {
                margin: '70px auto 16px',
            },
            [theme.breakpoints.up('xl')]: {
                width: 350,
            }
        },
        logo: {
            width: "100%",
            height: "100%"
        },
        featuresContainer: {

            [theme.breakpoints.up('sm')]: {
                padding: '0 40px'
            },
            [theme.breakpoints.up('ml')]: {
                padding: "0 60px"
            },
        },
        featureContainer: {
            padding: 2,

            [theme.breakpoints.up('ml')]: {
                padding: 5
            },
            [theme.breakpoints.up('xl')]: {
                padding: 12
            },
        }
    }
})

const features = [
    {
        title: "پرداخت درب محل",
        img: payment
    },
    {
        title: "مشاوره ۲۴ ساعته",
        img: support
    },
    {
        title: "۷ روز بازگشت کالا",
        img: guarantee
    },
    {
        title: "ضمانت بهترین قیمت",
        img: price
    },
    {
        title: "ضمانت اصالت کالا",
        img: originality
    },
    {
        title: "ارسال سریع",
        img: delivery
    },
]

const Landing = () => {

    const classes = useStyle()
    const [searchBarText, setSearchBarText] = useState(() => window.innerWidth < 620 ?
        "جستوجو..." :
        "نام محصول یا کالای مورد نظر خود را تایپ نمایید..."
    )

    // window resize listener
    useEffect(() => {
        const resizeListener = () => {

            if (window.innerWidth < 620) {
                setSearchBarText("جستوجو...")
            } else {
                setSearchBarText("نام محصول یا کالای مورد نظر خود را تایپ نمایید...")
            }
        }

        window.addEventListener('resize', resizeListener)
    }, [])

    return (
        <Paper>
            <div className={classes.bgImage}>
                <Paper
                    className={classes.searchBox}
                    component="form"
                    sx={{ p: '4px 8px', display: 'flex', alignItems: 'center' }}
                    elevation={15}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1, fontSize: "11.25px" }}
                        className={classes.searchInput}
                        placeholder={searchBarText}
                    />
                    <SearchSharpIcon
                        fontSize="medium"
                        className={classes.searchIcon}
                    />
                </Paper>
            </div>
            <div className={classes.logoContainer}>
                <img className={classes.logo} src={logo} alt="logo" />
            </div>
            <Grid
                container
                justifyContent='center'
                className={classes.featuresContainer}
            >
                {
                    features.map(feature => (
                        <Grid item xs={2} key={feature.title} className={classes.featureContainer}>
                            <FeaturesCard feature={feature} />
                        </Grid>
                    ))
                }
            </Grid>
            <Container>
                <div>
                    
                </div>
            </Container>
        </Paper>
    );
};

export default Landing;