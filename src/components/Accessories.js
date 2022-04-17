import { Box, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Switch, Typography } from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { makeStyles } from "@mui/styles"
import Grid from "@mui/material/Grid"
import { styled, alpha } from '@mui/system';
import SliderUnstyled, { sliderUnstyledClasses } from '@mui/base/SliderUnstyled';
import React, { useEffect, useRef, useState } from 'react';

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
    [theme.breakpoints.up('xs')]: {
        width: 15,
        height: 15
    },
    [theme.breakpoints.up('ml')]: {
        width: 18,
        height: 18
    },
    [theme.breakpoints.up('xxl')]: {
        width: 22,
        height: 22
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
            [theme.breakpoints.up('ml')]: {
                width: 18,
            },
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translate(3px, -1.2px)',
            [theme.breakpoints.up('xs')]: {
                transform: 'translate(6px, -1.2px)'
            },
            [theme.breakpoints.up('ml')]: {
                transform: 'translate(18px, -1.2px)'
            },
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        transform: 'translate(-1px, -1.2px)',
        [theme.breakpoints.up('ml')]: {
            transform: 'translate(-1px, -0.8px)'
        },
        [theme.breakpoints.up('ml')]: {
            transform: 'translate(-1px, -0.8px)'
        },
        [theme.breakpoints.up('xxl')]: {
            transform: 'translate(0, -0.2px)'
        },
        '&.Mui-checked': {
            transform: 'translate(5px, -1.2px)',
            color: '#fff',
            [theme.breakpoints.up('xs')]: {
                transform: 'translate(8px, -1.2px)'
            },
            [theme.breakpoints.up('ml')]: {
                transform: 'translate(17px, -0.8px)'
            },
            [theme.breakpoints.up('xxl')]: {
                transform: 'translate(21px, -0.2px)'
            },
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
        [theme.breakpoints.up('xs')]: {
            width: 8,
            height: 8,
        },
        [theme.breakpoints.up('ml')]: {
            width: 10.5,
            height: 10,
        },
        [theme.breakpoints.up('xxl')]: {
            width: 12.5,
            height: 13
        },
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
    [theme.breakpoints.up('xs')]: {
        width: 20,
        height: 10,
    },
    [theme.breakpoints.up('ml')]: {
        width: 30,
        height: 12
    },
    [theme.breakpoints.up('xxl')]: {
        width: 38,
        height: 17
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
        expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: { xxs: 8, xs: 12, ml: 18 } }} />}
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
    [theme.breakpoints.up('xs')]: {
        height: 25,
        minHeight: 25,
    },
    [theme.breakpoints.up('ml')]: {
        height: 30,
        minHeight: 30,
    },
    [theme.breakpoints.up('xxl')]: {
        height: 40,
        minHeight: 40,
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: 0,
    paddingBottom: 10
}));

const StyledSlider = styled(SliderUnstyled)(
    ({ theme }) => `
  color: ${theme.palette.mode === 'light' ? '#227872' : '#90caf9'};
  height: 4px;
  width: 95%;
  padding: 13px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }

  &.${sliderUnstyledClasses.disabled} { 
    pointer-events: none;
    cursor: default;
    color: #bdbdbd; 
  }

  & .${sliderUnstyledClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
    opacity: 0.38;
  }

  & .${sliderUnstyledClasses.track} {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
  }

  & .${sliderUnstyledClasses.thumb} {
    position: absolute;
    width: 14px;
    height: 14px;
    margin-left: -6px;
    margin-top: -5px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    border: 2px solid currentColor;
    background-color: #fff;

    :hover,
    &.${sliderUnstyledClasses.focusVisible} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === 'light' ? '#227872' : '#90caf9',
        0.15,
    )};
    }

    &.${sliderUnstyledClasses.active} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === 'light' ? '#227872' : '#90caf9',
        0.3,
    )};
    }
  }

  & .${sliderUnstyledClasses.mark} {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
    top: 50%;
    opacity: 0.7;
    transform: translateX(-50%);
  }

  & .${sliderUnstyledClasses.markActive} {
    background-color: #fff;
  }

  & .${sliderUnstyledClasses.valueLabel} {
    font-family: IBM Plex Sans;
    font-size: 14px;
    display: block;
    position: relative;
    top: 0.8em;
    text-align: center;
    transform: translateX(33%);
  }
`,
);

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
            fontSize: 7.6,
            [theme.breakpoints.up('xs')]: {
                fontSize: 10,
            },
            [theme.breakpoints.up('ml')]: {
                fontSize: 13,
            },
            [theme.breakpoints.up('xxl')]: {
                fontSize: 16,
            },
        },
        radioFilter: {
            "& span": {
                fontSize: 6.6,
                [theme.breakpoints.up('xs')]: {
                    fontSize: 8.8,
                },
                [theme.breakpoints.up('ml')]: {
                    fontSize: 11,
                },
                [theme.breakpoints.up('xxl')]: {
                    fontSize: 14,
                },
            },
            "& *:hover": {
                background: 'transparent',
            },
        },
        accordionContent: {
            fontSize: 6.6,
            cursor: 'pointer',
            padding: '2px 0',
            [theme.breakpoints.up('xs')]: {
                fontSize: 8.8,
                padding: '4px 0',
            },
            [theme.breakpoints.up('ml')]: {
                fontSize: 11,
                padding: '8px 0',
            },
            [theme.breakpoints.up('xxl')]: {
                fontSize: 14,
            },
        }
    }
})

const Accessories = ({ show, productsState }) => {

    useTitle("خرید و قیمت لوازم جانبی")

    const classes = useStyle()
    const ref = useRef()
    const [expanded, setExpanded] = useState('')
    const [accessories, setAccessories] = useState([...productsState.products.accessories])
    const [categories, setCategories] = useState({
        price: "",
        brand: "",
        color: "",
        priceRange: [0, 20000000],
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

    const brands = productsState.products.accessories.map(item => item.brand).filter(unique)
    productsState.products.accessories.map(item => item.colors.map(item => colors.push(item)))


    useEffect(() => {

        if (categories.available && !categories.color) {
            if (categories.brand) {
                setAccessories(accessories => accessories.filter(item => item.available))
            } else {
                setAccessories(productsState.products.accessories.filter(item => item.available))
            }
        }

        if (!categories.available && !categories.color) {
            if (categories.brand) {
                setAccessories(productsState.products.accessories.filter(item =>
                    item.brand === categories.brand
                ))
            } else {
                setAccessories([...productsState.products.accessories])
            }
        }

        if (categories.color) {
            if (categories.brand && categories.available) {
                setAccessories(productsState.products.accessories.filter(item =>
                    item.colors.find(color => color === categories.color) &&
                    item.brand === categories.brand &&
                    item.available
                ))
            } else if (categories.brand) {
                setAccessories(productsState.products.accessories.filter(item =>
                    item.colors.find(color => color === categories.color) &&
                    item.brand === categories.brand
                ))
            } else if (categories.available) {
                setAccessories(productsState.products.accessories.filter(item =>
                    item.colors.find(color => color === categories.color) &&
                    item.available
                ))
            } else {
                setAccessories(productsState.products.accessories.filter(item => item.colors.find(color => color === categories.color)))
            }
        }

        if (categories.priceRange) {
            setAccessories(accessories => accessories.filter(
                item => item.price <= categories.priceRange[1] &&
                    item.price >= categories.priceRange[0]
            ))
        }

        if (categories.price === "highestPrice") setAccessories(accessories => accessories.sort((a, b) => b.price - a.price))
        if (categories.price === "lowestPrice") setAccessories(accessories => accessories.sort((a, b) => a.price - b.price))

    }, [categories])

    useEffect(() => {
        if (categories.brand) {
            if (categories.available) {
                setAccessories(productsState.products.accessories.filter(item => item.available && item.brand === categories.brand))
            }
            else if (categories.color) {
                setAccessories(productsState.products.accessories.filter(item =>
                    item.colors.find(color => color === categories.color) &&
                    item.brand === categories.brand
                ))
            }
            else if (categories.color && categories.available) {
                setAccessories(productsState.products.accessories.filter(item =>
                    item.colors.find(color => color === categories.color) &&
                    item.brand === categories.brand &&
                    item.brand === categories.brand
                ))
            }
            else {
                setAccessories(productsState.products.accessories.filter(item => item.brand === categories.brand))
            }
        }
    }, [categories.brand])

    const categoriesHandler = event => {
        if (event.target.id === 'available') {
            setCategories({ ...categories, [event.target.id]: !categories[event.target.id] })
            if (!ref.current.classList.contains("Mui-checked")) ref.current.classList.add("Mui-checked")
        } else if (event.target.id === 'price') {
            setCategories({ ...categories, [event.target.id]: event.target.value })
        } else {
            setCategories({ ...categories, [event.target.id]: event.target.innerText })
        }
    }

    const priceRangeHandler = (e, data) => {
        setCategories({ ...categories, priceRange: data })
    }

    const clearFilterHandler = () => {
        setAccessories([...productsState.products.accessories])
        setCategories({
            price: "",
            brand: "",
            color: "",
            priceRange: [0, 20000000],
            available: false
        })
        ref.current.firstElementChild.checked = false
        ref.current.checked = false
        ref.current.classList.remove("Mui-checked")
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
                }}>
                <Box
                    sx={{
                        ml: { xxs: 1, ml: 2, xxl: 6 },
                        width: { xxs: 134, xs: 220, xxl: 350 },

                    }}>
                    <Box display='flex' justifyContent='space-between'>
                        <Typography className={classes.filterTitle} color="primary">فیلتر</Typography>
                        <Typography
                            className={classes.filterTitle}
                            color="#782228"
                            sx={{ cursor: "pointer" }}
                            onClick={() => clearFilterHandler()}
                        >
                            حذف فیلترها
                        </Typography>
                    </Box>
                    <Box sx={{ border: '1px solid silver', py: 2, px: 1, borderRadius: 1.5 }}>
                        <FormControl sx={{ borderBottom: '1px solid #cbcbcb', pb: .5, width: '100%' }}>
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
                                py: { xxs: 1, ml: 1.5 },
                                width: '100%'
                            }}
                            control={<AntSwitch ref={ref} id="available" onClick={(event) => categoriesHandler(event)} />}
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

                        <Box marginTop={2} textAlign='center'>
                            <Typography textAlign='start' className={classes.filterTitle}>قیمت</Typography>
                            <StyledSlider
                                value={categories.priceRange}
                                onChange={priceRangeHandler}
                                valueLabelDisplay="auto"
                                min={0}
                                max={20000000}
                            />
                        </Box>
                    </Box>
                </Box>

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
                       accessories.map(item => (
                            <Grid item key={item.id} xxs={6} lg={4}>
                                <CardComponent item={item} section="accessories" />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Paper>
    );
};

export default Accessories;