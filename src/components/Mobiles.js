import { Box, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Switch, Typography } from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { makeStyles } from "@mui/styles"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/system";
import React, { useEffect, useState } from 'react';

// components
import CardComponent from "./shared/CardComponent";

// images
import { eidOffer } from "../constants/images"

// functions
import { useTitle } from "../helper/functions";

// customization styles
const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 2,
    width: 10,
    height: 10,
    marginLeft: 2,
    boxShadow:
        theme.palette.mode === 'dark'
            ? '0 0 0 1px rgb(16 22 26 / 40%)'
            : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
        theme.palette.mode === 'dark'
            ? '#227872'
            : '#227872',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
        background: "#227872",
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#227872'
});

function BpRadio(props) {
    return (
        <Radio
            sx={{
                '&:hover': {
                    bgcolor: 'transparent',
                },
            }}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            {...props}
        />
    );
}

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 14,
    height: 8,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 8,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translate(3px, -1.2px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        transform: 'translate(-1px, -1.2px)',
        '&.Mui-checked': {
            transform: 'translate(5px, -1.2px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#227872' : '#227872',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 5.5,
        height: 6,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    borderBottom: `1px solid #cbcbcb`,
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: 8 }} />}
        {...props}
    />
))(({ theme }) => ({
    padding: 0,
    height: 20,
    minHeight: 20,
    flexDirection: 'row',
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgb(255, 255, 255)'
            : '#fff',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: 0,
    paddingBottom: 10
}));

// styles
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
        },
        filterTitle: {
            fontSize: 7.6
        },
        radioFilter: {
            "& span": {
                fontSize: 6.6,
            },
            "& *:hover": {
                background: 'transparent',
            },
        },
        accordionContent: {
            fontSize: 6.6,
            cursor: 'pointer',
            padding: '2px 0'
        }
    }
})

const Mobiles = ({ show, productsState }) => {

    useTitle("خرید و قیمت موبایل")

    const classes = useStyle()
    const [expanded, setExpanded] = useState('')
    const [mobiles, setMobiles] = useState([...productsState.products.mobiles])
    const [categories, setCategories] = useState({
        price: "",
        brand: "",
        color: "",
        available: false
    })
    let colors = []


    // filter accordion expand
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }

    // get unique brands and colors
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }

    const brands = productsState.products.mobiles.map(item => item.brand).filter(unique)
    productsState.products.mobiles.map(item => item.colors.map(item => colors.push(item)))


    useEffect(() => {
        if (categories.brand && categories.color && categories.available) {
            setMobiles(productsState.products.mobiles.filter(item => {
                item.available &&
                    item.brand === categories.brand &&
                    item.colors.find(color => color === categories.color)
            }))
        }
        else if (categories.brand && categories.color) {
            setMobiles(productsState.products.mobiles.filter(item => {
                item.brand === categories.brand &&
                    item.colors.find(color => color === categories.color)
            }))
        }
        else if (categories.brand && categories.available) {
            setMobiles(productsState.products.mobiles.filter(item => item.brand === categories.brand && item.available))
        }
        else if (categories.color && categories.available) {
            setMobiles(productsState.products.mobiles.filter(item => {
                item.available &&
                    item.colors.find(color => color === categories.color)
            }))
        }
        else if (categories.brand) {
            setMobiles(productsState.products.mobiles.filter(item => item.brand === categories.brand))
        }
        else if (categories.color) {
            setMobiles(productsState.products.mobiles.filter(item => item.colors.find(color => color === categories.color)))
        }
        else if (categories.available) {
            setMobiles(productsState.products.mobiles.filter(item => item.available))
        }
        else if (!categories.available) (
            setMobiles([...productsState.products.mobiles])
        )

        if (categories.price === "highestPrice") setMobiles(mobiles => mobiles.sort((a, b) => b.price - a.price))
        if (categories.price === "lowestPrice") setMobiles(mobiles => mobiles.sort((a, b) => a.price - b.price))
        console.log(mobiles)

    }, [categories])

    const categoriesHandler = event => {
        if (event.target.id === 'available') {
            setCategories({ ...categories, [event.target.id]: !categories[event.target.id] })
        } else if (event.target.id === 'price') {
            setCategories({ ...categories, [event.target.id]: event.target.value })
        } else {
            setCategories({ ...categories, [event.target.id]: event.target.innerText })
        }
    }

    return (
        <Paper elevation={0} className={classes.container}>

            {show && <div className={classes.headerImage}></div>}

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    m: {
                        xxs: "90px 0 40px !important",
                        ml: '65px 0 50px !important',
                        lg: '90px 0 !important'
                    }
                }}
            >
                {/* <Box sx={{ ml: 1, width: 134 }}>
                    <Box display='flex' justifyContent='space-between'>
                        <Typography className={classes.filterTitle} color="primary">فیلتر</Typography>
                        <Typography className={classes.filterTitle} color="#782228">حذف فیلترها</Typography>
                    </Box>
                    <Box sx={{ border: '1px solid silver', py: 2, px: 1 }}>
                        <FormControl sx={{ borderBottom: '1px solid #cbcbcb', pb: .5 }}>
                            <FormLabel
                                className={classes.filterTitle}
                                sx={{ mb: .5 }}
                            >
                                مرتب سازی بر اساس :
                            </FormLabel>

                            <RadioGroup
                                value={categories.price}
                                className={classes.radioFilter}
                                onChange={event => categoriesHandler(event)}
                            >
                                <FormControlLabel
                                    sx={{
                                        margin: 0,
                                        flexDirection: 'row-reverse',
                                        justifyContent: "space-between"
                                    }}
                                    value="highestPrice"
                                    label="بیشترین قیمت"
                                    control={<BpRadio id="price" sx={{ py: .5, px: 0 }} />}
                                />
                                <FormControlLabel
                                    sx={{
                                        margin: 0,
                                        flexDirection: 'row-reverse',
                                        justifyContent: "space-between"
                                    }}
                                    value="lowestPrice"
                                    label="کمترین قیمت"
                                    control={<BpRadio id="price" sx={{ py: .5, px: 0 }} />}
                                />
                            </RadioGroup>
                        </FormControl>

                        <FormControlLabel
                            className={classes.radioFilter}
                            sx={{
                                m: 0,
                                flexDirection: 'row-reverse',
                                justifyContent: "space-between",
                                borderBottom: '1px solid #cbcbcb',
                                py: 1
                            }}
                            control={<AntSwitch id="available" onClick={(event) => categoriesHandler(event)} />}
                            label="فقط کالاهای موجود"
                        />

                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography className={classes.accordionContent}>برند</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {
                                    brands.map(item =>
                                        < Typography
                                            key={item}
                                            className={classes.accordionContent}
                                            id='brand'
                                            onClick={event => categoriesHandler(event)}
                                        >
                                            {item}
                                        </Typography>
                                    )
                                }
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography className={classes.accordionContent}>رنگ</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {
                                    colors.filter(unique).map(item =>
                                        <Typography
                                            key={item}
                                            className={classes.accordionContent}
                                            id='color'
                                            onClick={event => categoriesHandler(event)}
                                        >
                                            {item}
                                        </Typography>
                                    )
                                }
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Typography className={classes.accordionContent}>حافظه داخلی</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.accordionContent}>
                                    تا 8 گیگابایت
                                </Typography>
                                <Typography className={classes.accordionContent}>
                                    16 گیگابایت
                                </Typography>
                                <Typography className={classes.accordionContent}>
                                    32 گیگابایت
                                </Typography>
                                <Typography className={classes.accordionContent}>
                                    64 گیگابایت
                                </Typography>
                                <Typography className={classes.accordionContent}>
                                    تا 126 گیگابایت 1 ترابایت
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box> */}

                <Grid
                    container
                    spacing={{ xxs: 1, xl: 5, xxl: 6 }}
                >
                    {
                        mobiles.map(item => (
                            <Grid item key={item.id} xxs={6} lg={4}>
                                <CardComponent item={item} section="mobiles" />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Paper >
    );
};

export default Mobiles;

