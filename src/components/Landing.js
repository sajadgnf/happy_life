import { Paper, InputBase, Grid, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react';

//components
import FeaturesCard from './shared/FeaturesCard';
import CardComponent from './shared/CardComponent';

// images
import { frame, frame1 } from '../constants/images'

// functions
import { useTitle } from "../helper/functions"

import {
    logo,
    delivery,
    guarantee,
    originality,
    payment,
    price,
    support,
    clock,
    banner,
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
        link: '/mobiles'
    },
    {
        title: "برندهای مختلف",
        sub: "هندزفری",
        image: headphone,
        link: '/headphones'
    },
]

const useStyle = makeStyles(theme => {
    return {
        bgImage: {
            background: `url(${frame}) no-repeat center`,
            backgroundSize: 'cover',
            height: 220,
            width: "100%",
            position: 'relative',
            transition: ".5s all linear",
            marginTop: 30,

            [theme.breakpoints.up('xsm')]: {
                height: 350
            },
            [theme.breakpoints.up('xs')]: {
                height: 336
            },
            [theme.breakpoints.up('sm')]: {
                height: 397,
            },
            [theme.breakpoints.up('ml')]: {
                marginTop: 45,
                height: 510
            },
            [theme.breakpoints.up('lg')]: {
                background: `url(${frame1}) no-repeat bottom`,
                backgroundSize: 'cover',
                height: 487
            },
            [theme.breakpoints.up('xl')]: {
                height: 513,
            },
            [theme.breakpoints.up('xxl')]: {
                background: `url(${frame1}) no-repeat bottom`,
                backgroundSize: 'cover',
                height: 620,
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
            margin: '60px auto 40px',

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

        // features
        featuresContainer: {
            padding: '0px 40px 40px',

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
            paddingBottom: 10,
            display: 'flex',
            justifyContent: 'center',
            [theme.breakpoints.up('xs')]: {
                display: 'unset',
                padding: 2
            },
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
        sectionTitle: {
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
                bottom: '-8px',
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
            top: '41.2%',

            [theme.breakpoints.up('sm')]: {
                top: '41%',
            },
            [theme.breakpoints.up('ml')]: {
                top: '45%',
                fontSize: "36px !important",
            },
            [theme.breakpoints.up('lg')]: {
                top: '43%',
            },
            [theme.breakpoints.up('xxl')]: {
                top: '46%',
            },
        },
        forwardScroll: {
            left: -6
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
        advertizeLink: {
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            textDecoration: 'none',
            padding: "0 5px"
        }
    }
})

const Landing = ({ searchBarText, productsState }) => {

    useTitle("فروشگاه هپی لایف")
    const sales = useRef()
    const visited = useRef()
    const [gridValue, setGridValue] = useState({
        sales: 0,
        visited: 0
    })
    const classes = useStyle()

    // scroll handler
    const scrollHandler = ref => {
        const cardWidth = ref.current.firstElementChild.offsetWidth
        ref.current.scrollLeft = ref.current.scrollLeft - cardWidth
        setGridValue({ ...gridValue, [ref.current.id]: ref.current.scrollLeft - cardWidth })
    }

    const scrollBackHandler = ref => {
        const cardWidth = ref.current.firstElementChild.offsetWidth
        ref.current.scrollLeft = ref.current.scrollLeft + cardWidth
        if (ref.current.scrollLeft > (-cardWidth)) {
            setGridValue({ ...gridValue, [ref.current.id]: 0 })
        } else {
            setGridValue({ ...gridValue, [ref.current.id]: ref.current.scrollLeft + cardWidth })
        }
    }

    const { amazing, mostVisited, mostSales } = productsState.products

    return (
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
                        <Grid item xxs={4} xs={2} key={feature.title} className={classes.featureContainer}>
                            <FeaturesCard feature={feature} />
                        </Grid>
                    ))
                }
            </Grid>

            <div className={classes.container}>
                {/* amazing */}
                <div>
                    <div className={classes.sectionTitle}>
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
                                    <CardComponent item={item} section="amazing" />
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>

                {/* logos */}
                <div className={classes.logos}>
                    <img className={classes.logo} src={banner} alt="logos" />
                </div>

                {/* Most visited */}
                <div>
                    <div className={classes.sectionTitle}>
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
                            gridValue.visited !== 0 &&
                            <ArrowForwardIcon className={`${classes.scrollIcon} ${classes.backScroll}`} onMouseDown={() => scrollBackHandler(visited)} />
                        }
                        <Grid
                            container
                            id='visited'
                            ref={visited}
                            wrap='nowrap'
                            spacing={{ xxs: 1, ml: 2, xxl: 6 }}
                            sx={{ overflowX: 'auto', scrollBehavior: "smooth", pb: 5, pr: .5 }}
                        >
                            {
                                mostVisited.map(item => (
                                    <Grid
                                        item
                                        key={item.id}
                                        sx={{ minWidth: { xxs: 150, ml: 308, lg: 250, xxl: 340 } }}
                                    >
                                        <CardComponent item={item} section="most-visited" />
                                    </Grid>
                                ))
                            }
                        </Grid>
                        <ArrowBackIcon className={`${classes.scrollIcon} ${classes.forwardScroll}`} onMouseDown={() => scrollHandler(visited)} />
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
                                    minWidth: { xxs: 280, sm: 350, ml: 400, lg: "48%" },
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
                                            sx={{
                                                color: "#fff",
                                                borderColor: "#fff",
                                                fontWeight: 400,
                                                fontSize: { xxs: '9.33px', ml: '12px', xxl: "16px" },
                                                p: 0,
                                                justifyContent: 'space-between',
                                                "&:hover": {
                                                    background: "#fff",
                                                    color: "#333"
                                                },
                                                "&:hover > a": {
                                                    color: "#333",
                                                },
                                                "&:hover > a > p": {
                                                    borderColor: "#333"
                                                }
                                            }}
                                        >
                                            <Link to={item.link} className={classes.advertizeLink}>
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
                                                <ArrowCircleLeftRoundedIcon
                                                    sx={{
                                                        fontSize: { xxs: "16px !important", ml: "20px !important", xxl: '22px !important' }
                                                    }}
                                                />
                                            </Link>
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
                    <div className={classes.sectionTitle}>
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
                            gridValue.sales !== 0 &&
                            <ArrowForwardIcon className={`${classes.scrollIcon} ${classes.backScroll}`} onMouseDown={() => scrollBackHandler(sales)} />
                        }
                        <Grid
                            container
                            id="sales"
                            ref={sales}
                            wrap='nowrap'
                            spacing={{ xxs: 1, ml: 2, xxl: 6 }}
                            sx={{ overflowX: 'auto', scrollBehavior: "smooth", pb: 5, pr: .5 }}
                        >
                            {
                                mostSales.map(item => (
                                    <Grid
                                        item
                                        key={item.id}
                                        sx={{ minWidth: { xxs: 150, ml: 308, lg: 250, xxl: 340 } }}
                                    >
                                        <CardComponent item={item} section="most-sales" />
                                    </Grid>
                                ))
                            }
                        </Grid>
                        <ArrowBackIcon className={`${classes.scrollIcon} ${classes.forwardScroll}`} onMouseDown={() => scrollHandler(sales)} />
                    </div>
                </div>
            </div>
        </Paper >
    );
};

export default Landing;