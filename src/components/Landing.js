import { Paper, InputBase, Grid, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"

//components
import FeaturesCard from './shared/FeaturesCard';
import Amazing from './shared/Amazing';

// api
import { fetchProducts } from '../redux/products/productsAction';

// images
import { frame, frame1 } from '../constants/images'

import {
    logo,
    delivery,
    guarantee,
    originality,
    payment,
    price,
    support,
    clock,
    baner,
    medal,
    fiveG,
    headphone,
    moneyBag
} from "../constants/icons"


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

const advertize = [
    {
        title: "انواع مختلف",
        sub: "گوشی های 5G",
        image: fiveG,
    },
    {
        title: "برندهای مختلف",
        sub: "هندزفری",
        image: headphone,
    },
]

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
        searchIcon: {
            backgroundColor: theme.palette.primary.main,
            boxShadow:
                "0.6590743064880371px 0px 9.227041244506836px 0px rgba(0, 0, 0, 0.52) inset, 1.3181486129760742px 1.9772230386734009px 2.6362972259521484px 0px rgba(0, 0, 0, 0.25)",
            padding: 5,
            borderRadius: 10,
            color: '#fff',
            cursor: 'pointer',

            [theme.breakpoints.up('lg')]: {
                height: '40px !important',
                width: '40px !important',
                borderRadius: 16,
                top: "94.5%"
            }
        },
        mainLogoContainer: {
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
                width: 300,
            }
        },
        mainLogo: {
            width: "100%",
            height: "100%"
        },

        // feaures
        featuresContainer: {
            paddingBottom: '40px',

            [theme.breakpoints.up('sm')]: {
                padding: '0px 38px 40px'
            },
            [theme.breakpoints.up('ml')]: {
                padding: "20px 78px 48px"
            },
            [theme.breakpoints.up('lg')]: {
                padding: "20px 106px 48px"
            },
        },
        featureContainer: {
            padding: 2,

            [theme.breakpoints.up('ml')]: {
                padding: 5
            },
            [theme.breakpoints.up('xl')]: {
                padding: 10
            },
            [theme.breakpoints.up('xxl')]: {
                padding: 15
            },
        },

        // landing Content
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

        // amazing
        sectionTtitle: {
            display: "flex",
            alignItems: "center",
            flexWrap: 'wrap',
            marginBottom: 20
        },
        titlesIcon: {
            height: 21,
            width: 21,
            marginRight: 8,

            [theme.breakpoints.up("ml")]: {
                height: 32,
                width: 32,
            },
        },

        // logos
        logos: {
            margin: "40px 0",
            width: "100%",
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.up('xxl')]: {
                marginTop: 50
            },
        },
        logo: {
            width: "97vw",

            [theme.breakpoints.up('xs')]: {
                width: "100%"
            },
            [theme.breakpoints.up('xxl')]: {
                marginTop: 50
            },
        },

        // most visited
        titleText: {
            position: 'relative',
            "&::after": {
                content: '""',
                position: 'absolute',
                background: theme.palette.primary.main,
                bottom: '-10px',
                right: 0,
                width: '100%',
                height: 3,

                [theme.breakpoints.up('xs')]: {
                    bottom: '-8.5px'
                },
                [theme.breakpoints.up('sm')]: {
                    bottom: '-6px'
                },
                [theme.breakpoints.up('ml')]: {
                    bottom: '-16px'
                },
                [theme.breakpoints.up('lg')]: {
                    bottom: '-15px'
                },
                [theme.breakpoints.up('xxl')]: {
                    bottom: '-21px'
                },
            }
        },
        titleUnderLine: {
            borderBottom: "1px solid #cbcbcb",
            display: 'block',
            width: "100%",
            marginTop: 3,

            [theme.breakpoints.up('ml')]: {
                marginTop: 8
            },

            [theme.breakpoints.up('xxl')]: {
                marginTop: 14
            },
        },
        cards: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
        },
        scrollIcon: {
            border: "1px solid #cdcdcd",
            color: '#444',
            borderRadius: 100,
            padding: 5,
            cursor: 'pointer',
            background: '#fff',
            fontSize: "30px !important",
            position: "absolute",
            top: '46.2%',

            [theme.breakpoints.up('sm')]: {
                top: '45%',
            },
            [theme.breakpoints.up('ml')]: {
                top: '47%',
                fontSize: "36px !important",
            },
            [theme.breakpoints.up('lg')]: {
                top: '45%',
            },
            [theme.breakpoints.up('xxl')]: {
                top: '48%',
            },
        },
        forwardScroll: {
            left: 0,
        },
        backScroll: {
            right: 0,
        },

        // advertize
        advertize: {
            display: 'flex',
            alignItems: 'center',
        },
        advertizeLogo: {
            width: 100,
            transition: 'all .3s ease',

            [theme.breakpoints.up('ml')]: {
                width: 125,
            },
            [theme.breakpoints.up('xl')]: {
                width: 200,
            },
        },
    }
})

const Landing = ({ searchBarText }) => {

    const ref = useRef()
    const [gridValue, setGridValue] = useState(0)
    const classes = useStyle()
    const dispatch = useDispatch()
    const productsState = useSelector(store => store.productsState)

    // get Products
    useEffect(() => {
        if (!productsState.products.length) dispatch(fetchProducts())
    }, [])

    // scroll handler
    const scrollHandler = () => {
        const cardWidth = ref.current.firstElementChild.offsetWidth
        ref.current.scrollLeft = ref.current.scrollLeft - cardWidth
        setGridValue(ref.current.scrollLeft - cardWidth)
    }

    const scrollBackHandler = () => {
        const cardWidth = ref.current.firstElementChild.offsetWidth
        ref.current.scrollLeft = ref.current.scrollLeft + cardWidth
        if (ref.current.scrollLeft > (-cardWidth)) {
            setGridValue(0)
        } else {
            setGridValue(ref.current.scrollLeft + cardWidth)
        }
    }

    const { loading, error, products: { amazing, mostVisited, mostSales } } = productsState

    return (

        loading ?
            <p>Loading</p> :
            error ?
                <p>Something went wrong</p> :
                <Paper elevation={0}>
                    <div className={classes.bgImage}>
                        <Paper
                            className={classes.searchBox}
                            component="form"
                            sx={{ p: '4px 8px', display: 'flex', alignItems: 'center' }}
                            elevation={15}
                        >
                            <InputBase
                                sx={{
                                    ml: 1,
                                    flex: 1,
                                    fontSize: {
                                        xxs: 11.25,
                                        lg: 14
                                    }
                                }}
                                placeholder={searchBarText}
                            />
                            <SearchSharpIcon
                                fontSize="medium"
                                className={classes.searchIcon}
                            />
                        </Paper>
                    </div>
                    <div className={classes.mainLogoContainer}>
                        <img className={classes.mainLogo} src={logo} alt="logo" />
                    </div>

                    {/* features */}
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

                    <div className={classes.container}>
                        {/* amazing */}
                        <div>
                            <div className={classes.sectionTtitle}>
                                <Typography
                                    variant='h3'
                                    color='primary'
                                    sx={{ fontSize: [12, 14, 18, 20] }}
                                >
                                    پیشنهاد شگفت انگیز
                                </Typography>
                                <img
                                    className={classes.titlesIcon}
                                    src={clock} alt="clock"
                                />
                            </div>
                            <Grid container spacing={{ xxs: 2, xl: 5, xxl: 6 }}>
                                {
                                    amazing.map(item => (
                                        <Grid item key={item.id} xxs={6} xs={6} lg={3}>
                                            <Amazing item={item} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </div>

                        {/* logos */}
                        <div className={classes.logos}>
                            <img className={classes.logo} src={baner} alt="logos" />
                        </div>

                        {/* Most visited */}
                        <div>
                            <div className={classes.sectionTtitle}>
                                <Typography
                                    variant='h3'
                                    color='primary'
                                    align='right'
                                    sx={{ fontSize: [12, 14, 18, 20] }}
                                    className={classes.titleText}
                                >
                                    محصولات پر بازدید
                                </Typography>
                                <img
                                    className={classes.titlesIcon}
                                    src={medal} alt="medal"
                                />
                                <div className={classes.titleUnderLine}></div>
                            </div>
                            <div className={classes.cards}>
                                {
                                    gridValue !== 0 &&
                                    <ArrowForwardIcon className={`${classes.scrollIcon} ${classes.backScroll}`} onMouseDown={scrollBackHandler} />
                                }
                                <Grid
                                    container
                                    ref={ref}
                                    wrap='nowrap'
                                    spacing={{ xxs: 1, ml: 2, xxl: 6 }}
                                    sx={{ overflowX: 'auto', scrollBehavior: "smooth", pb: { xxs: "24px", ml: "40px" }, pr: .5 }}
                                >
                                    {
                                        mostVisited.map(item => (
                                            <Grid
                                                item
                                                key={item.id}
                                                sx={{ minWidth: { xxs: 150, ml: 308, lg: 250, xxl: 340 } }}
                                            >
                                                <Amazing item={item} />
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                                <ArrowBackIcon className={`${classes.scrollIcon} ${classes.forwardScroll}`} onMouseDown={scrollHandler} />
                            </div>
                        </div>

                        {/* advertize */}
                        <Grid
                            container
                            wrap='nowrap'
                            sx={{
                                overflowX: 'auto',
                                scrollBehavior: "smooth",
                                mb: { xxs: "24px", ml: "40px" }
                            }}
                        >
                            {
                                advertize.map(item => (
                                    <Grid
                                        item
                                        key={item.title}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="space-between"
                                        minHeight="138px"
                                        borderRadius='4.666666030883789px'
                                        sx={{
                                            p: { xxs: "0 18px 0 0", ml: '0 40px 0 0', xl: '0 42px' },
                                            minWidth: { xxs: 300, sm: 350, ml: 400, lg: "48%" },
                                            transition: 'all .3s ease',
                                            backgroundColor: () => item.image === fiveG ? "#8D9097" : "#227872",
                                            ml: () => item.image === fiveG && { xxs: "16px", ml: "26px", xxl: '46px' }
                                        }}
                                    >
                                        <div>
                                            <Typography
                                                color="#fff"
                                                fontWeight='400'
                                                fontSize={{ xxs: 11.67, lg: 13, xxl: 16 }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <div className={classes.advertize}>
                                                <Typography
                                                    color="#fff"
                                                    fontWeight='700'
                                                    fontSize={{ xxs: 14, xl: 16, xxl: 18 }}
                                                    marginLeft={{ xxs: '8px', lg: '16px' }}
                                                >
                                                    {item.sub}
                                                </Typography>
                                                <Button
                                                    variant='outlined'
                                                    endIcon={<ArrowCircleLeftRoundedIcon sx={{ fontSize: { xxs: "16px !important", ml: "20px !important", xxl: '22px !important' } }} />}
                                                    sx={{
                                                        color: "#fff",
                                                        borderColor: "#fff",
                                                        width: { xxs: 56, ml: 80, lg: 90, xxl: 100 },
                                                        fontWeight: 400,
                                                        fontSize: { xxs: '9.33px', ml: '12px', xxl: "16px" },
                                                        p: '0 3px',
                                                        justifyContent: 'space-between',
                                                        "&:hover": {
                                                            background: "#fff",
                                                            color: "#333"
                                                        },
                                                        "&:hover > p": {
                                                            borderColor: "#333"
                                                        }
                                                    }}
                                                >
                                                    خرید
                                                    <Typography
                                                        sx={{
                                                            borderLeft: '1px solid #fff',
                                                            borderWidth: { ml: 2 },
                                                            m: { xxs: '5px 5px 5px 10px', ml: '5px 10px 5px 10px', lg: '5px 16px 5px 10px' },
                                                            height: { xxs: 14, ml: 20 }
                                                        }}>
                                                        &nbsp;
                                                    </Typography>
                                                </Button>
                                            </div>
                                        </div>

                                        <img className={classes.advertizeLogo} src={item.image} alt="advertize logo" />
                                    </Grid>
                                ))
                            }
                        </Grid>

                        {/* Most sales */}
                        <div>
                            <div className={classes.sectionTtitle}>
                                <Typography
                                    variant='h3'
                                    color='primary'
                                    align='right'
                                    sx={{ fontSize: [12, 14, 18, 20] }}
                                    className={classes.titleText}
                                >
                                    محصولات پر فروش
                                </Typography>
                                <img
                                    className={classes.titlesIcon}
                                    src={moneyBag} alt="medal"
                                />
                                <div className={classes.titleUnderLine}></div>
                            </div>
                            <div className={classes.cards}>
                                {
                                    gridValue !== 0 &&
                                    <ArrowForwardIcon className={`${classes.scrollIcon} ${classes.backScroll}`} onMouseDown={scrollBackHandler} />
                                }
                                <Grid
                                    container
                                    ref={ref}
                                    wrap='nowrap'
                                    spacing={{ xxs: 1, ml: 2, xxl: 6 }}
                                    sx={{ overflowX: 'auto', scrollBehavior: "smooth", pb: { xxs: "24px", ml: "40px" }, pr: .5 }}
                                >
                                    {
                                        mostSales.map(item => (
                                            <Grid
                                                item
                                                key={item.id}
                                                sx={{ minWidth: { xxs: 150, ml: 308, lg: 250, xxl: 340 } }}
                                            >
                                                <Amazing item={item} />
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                                <ArrowBackIcon className={`${classes.scrollIcon} ${classes.forwardScroll}`} onMouseDown={scrollHandler} />
                            </div>
                        </div>
                    </div>
                </Paper >
    );
};

export default Landing;