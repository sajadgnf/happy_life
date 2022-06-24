import axios from 'axios';
import { useParams } from 'react-router-dom';
import Paper from "@mui/material/Paper"
import { makeStyles } from "@mui/styles"
import { Box, Button, Modal, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import ReactTooltip from 'react-tooltip'
import { Container } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

// icons & images & gifs
import { send, bell, heart, security, heart1, send1 } from '../constants/icons'
import { searchBox } from '../constants/images'
import loadingGif from '../assets/gifs/loading.gif'

// redux actions
import { addItem, decrease, increase, removeItem } from '../redux/cart/cartActions';

// functions
import { checkCart, colorObject, quantityCount, useTitle } from '../helper/functions';


const useStyle = makeStyles(theme => {
    return {
        productMainImage: {
            width: 180,

            [theme.breakpoints.up("xsm")]: {
                width: 250
            },
            [theme.breakpoints.up("sm")]: {
                width: 300
            },
            [theme.breakpoints.up("xl")]: {
                width: 380
            },
        },
        productImage: {
            width: '90%',
            objectFit: 'cover'
        },
        productIcons: {
            width: 16,
            height: 16,
            [theme.breakpoints.up("sm")]: {
                width: 20,
                height: 20,
            }
        },
        iconContainer: {
            border: '1px solid silver !important',
            borderRadius: "100% !important",
            width: 40,
            minWidth: 40,
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "4px 0",
            boxShadow: '0px 0px 11px 0px rgba(0, 0, 0, 5%)',
            background: "#fff",
            "&:hover": {
                background: '#f0f0f0'
            },
            [theme.breakpoints.up("sm")]: {
                width: 50,
                height: 50,
            }
        },
        modal: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        modalImage: {
            border: '2px solid silver',
            borderRadius: 10,
            overflow: 'hidden',
            width: 400
        },
        productProperty: {
            marginBottom: 30,
            fontSize: 14,
            fontWeight: 400,
            [theme.breakpoints.up("ml")]: {
                marginBottom: 20,
            },
            [theme.breakpoints.up("xxl")]: {
                fontSize: 15,
            },
        },
        colorBtn: {
            position: 'relative',
            "&::before": {
                content: '""',
                position: "absolute",
                left: "50%",
                transform: 'translateX(-50%)',
                top: 35,
                height: 1,
                width: "70%",
            }
        },
        securityIcon: {
            width: 28,
            height: 28
        },
        buttons: {
            [theme.breakpoints.up("ml")]: {
                position: 'absolute',
                left: "50%",
                transform: 'translateX(-50%)',
                "&::before": {
                    content: '""',
                    position: 'absolute',
                    borderLeft: "1px solid #757575",
                    top: "50%",
                    left: '50%',
                    transform: 'translate(-50%, -48%)',
                    height: "75vh"
                }
            }
        },
        searchButton: {
            background: `url(${searchBox}) no-repeat center`,
            width: 145,
            height: 70,
            cursor: 'pointer',
            position: 'absolute',
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            transition: 'all .4s ease-out'
        },
        searchBoxContainer: {
            backgroundColor: '#000',
            width: "100%",
            height: 70,
            transition: 'all .5s ease'
        },
        searchBox: {
            outline: "none",
            border: 'none',
            backgroundColor: 'transparent',
            color: "#fff",
            height: '100%',
            width: '100%',
            padding: 10,
            fontSize: 14,
            [theme.breakpoints.up('ml')]: {
                padding: 20,
            },
            "&::placeholder": {
                color: "#fff"
            }
        },
        buttonsContainer: {
            border: `2px solid ${theme.palette.primary.main}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            borderRadius: 10,
            overflow: 'hidden'
        },
        searchProductsImage: {
            width: 40
        },
        searchLink: {
            textDecoration: "none",
            color: "#333",
        },
    }
})

const Details = ({ searchBarText, productsState }) => {

    const classes = useStyle()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [selected, setSelected] = useState(() => [])
    const [showImage, setShowImage] = useState('')
    const [open, setOpen] = useState(false)
    const [selectedColor, setSelectedColor] = useState({})
    const [openSearch, setOpenSearch] = useState(false)
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const cartState = useSelector(store => store.cartState)
    const params = useParams()
    const id = params.id
    const section = params['*'].split('/')[0]
    const colors = []
    let allProducts = []

    const handleOpen = event => {
        setOpen(true)
        setShowImage(event.currentTarget.firstElementChild.src);
    }
    const handleClose = () => setOpen(false)

    const searchHandler = item => {
        dispatch({ type: item.section.toUpperCase() })
        setSearch('')
        setOpenSearch(false)
    }

    useEffect(() => {
        axios.get(`https://happy-life-api.herokuapp.com/${section}/${id}`)
            .then(response => {
                setProduct(response.data)
                setLoading(false)

                dispatch({ type: section.toUpperCase() })
                localStorage.setItem("section", JSON.stringify(section))
            })
    }, [params])

    const selectedHandler = (event, newSelected) => {

        if (selected.includes(event.currentTarget.ariaLabel)) {
            event.currentTarget.style.backgroundColor = "#fff"
        } else {
            event.currentTarget.style.backgroundColor = "currentcolor"
        }
        setSelected(newSelected)
    }

    if (!loading) {
        product.colors.map(color => {
            colorObject(color, colors)
        })
    }

    // add section for link to details page
    const addSection = (...sections) => {
        sections.map(section => {
            productsState.products[section].map(item => {
                item = { ...item, section: section }
                allProducts.push(item)
            })
        })
    }
    addSection("mobiles", "accessories")

    // searchResult
    const searchResult = allProducts.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))

    useTitle(product.title)

    return (
        loading ?
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <img src={loadingGif} alt="loading" />
            </Box> :
            <Paper
                elevation={0}
                sx={{
                    position: 'relative',
                    mt: { xxs: 9.5, ml: 0 },
                    minHeight: "100vh",
                    pb: { xxs: 10, ml: 0 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                    flexDirection: { xxs: 'column', ml: 'row-reverse' }
                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 4,
                        width: { ml: "50%" },
                        flexDirection: { ml: 'column', lg: 'row' },
                    }}
                >
                    <ToggleButtonGroup
                        sx={{ flexDirection: "column" }}
                        value={selected}
                        onChange={selectedHandler}
                        className={classes.buttons}
                    >
                        <ToggleButton
                            value='like'
                            aria-label='like'
                            color='customRed'
                            data-tip="لایک"
                            className={classes.iconContainer}
                        >
                            <img className={classes.productIcons} src={selected.includes('like') ? heart1 : heart} alt="لایک" />
                        </ToggleButton>
                        <ToggleButton
                            value='bell'
                            aria-label='bell'
                            color="customYellow"
                            data-tip="اطلاع از تخفیفها"
                            className={classes.iconContainer}
                        >
                            <img className={classes.productIcons} src={bell} alt="نوتیفیکیشن" />
                        </ToggleButton>
                        <ToggleButton
                            value='share'
                            aria-label='share'
                            color="primary"
                            data-tip="اشتراک"
                            className={classes.iconContainer}
                        >
                            <img className={classes.productIcons} src={selected.includes('share') ? send1 : send} alt="اشتراک" />
                        </ToggleButton>
                    </ToggleButtonGroup>

                    <Box>
                        <img className={classes.productMainImage} src={product.image.main} alt="عکس محصول" />
                    </Box>

                    <Box display={{ ml: 'flex', lg: 'unset' }}>
                        {
                            Object.keys(product.image).map((item) => (

                                <Box
                                    width={{ xxs: 72, xl: 90 }}
                                    height={{ xxs: 72, xl: 90 }}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    border='1px solid silver'
                                    borderRadius="11px"
                                    margin
                                    overflow='hidden'
                                    key={item}
                                    sx={{ cursor: 'pointer' }}
                                    onClick={handleOpen}
                                >
                                    <img className={classes.productImage} src={product.image[item]} alt="عکس محصول" />
                                </Box>
                            ))
                        }
                    </Box>
                </Container>

                <Container sx={{ width: { ml: "50%" }, pt: { ml: 8, xxl: 0 } }}>
                    <Typography variant='h6' fontSize={{ xxs: 13.5, xl: 16 }} marginBottom>
                        {product.title}
                    </Typography>
                    <Typography
                        noWrap
                        color='text.secondary'
                        variant='body2'
                        fontSize={{ xxs: 12, xl: 14 }}
                        marginBottom={4}
                    >
                        {product.enTitle}
                    </Typography>
                    {
                        product.internalMemory || product.size || product.connection || product.ears ?
                            <Typography className={classes.productProperty} >
                                ویژگی ها
                            </Typography> :
                            <>
                                <Typography color={"#000"}>معرفی :</Typography>
                                <Typography className={classes.productProperty} color="textSecondary" sx={{ pl: 5 }}>
                                    {product.details}
                                </Typography>
                            </>

                    }
                    {
                        product.internalMemory &&
                        <Typography className={classes.productProperty}>
                            حافظه داخلی : {product.internalMemory} {!isNaN(product.internalMemory) && "گیگابایت"}
                        </Typography>
                    }
                    {
                        product.size &&
                        <>
                            <Typography className={classes.productProperty}>
                                بازه اندازه صفحه نمایش : {product.size} و اینچ و بزرگتر
                            </Typography>
                            <Typography className={classes.productProperty}>
                                شبکه های ارتباطی : 2G, 3G, 4G, 5G
                            </Typography>
                        </>
                    }
                    {
                        product.connection &&
                        <Typography className={classes.productProperty}>
                            نوع اتصال : {product.connection}
                        </Typography>
                    }
                    {
                        product.ears &&
                        <Typography className={classes.productProperty}>
                            نوع گوشی : {product.ears}
                        </Typography>
                    }

                    {/* colors */}
                    <Box>
                        <Typography className={classes.productProperty} marginBottom="15px !important">
                            رنگ : {selectedColor.title}
                        </Typography>

                        <Box display="flex">
                            {
                                colors.map(color => (
                                    <Box
                                        width={28}
                                        paddingBottom={.5}
                                        margin="0 8px"
                                        key={color.title}
                                        className={classes.colorBtn}
                                        sx={{
                                            "&::before": {
                                                borderBottom: (color.title === selectedColor.title) ? '2px solid #777' : 'none'
                                            }
                                        }}
                                    >
                                        <Button
                                            disableRipple
                                            sx={{
                                                background: color.hex,
                                                width: "100%",
                                                minWidth: "100%",
                                                height: 28,
                                                borderRadius: "100%",
                                                ml: 1,
                                                boxShadow: "0 0 11px 0 rgba(0, 0, 0, .5)",
                                                "&:hover": { backgroundColor: color.hex }
                                            }}
                                            onClick={() => { setSelectedColor({ ...color }) }}
                                        ></Button>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>

                    {/* guarantee */}
                    <Box margin="33px 0" display="flex" alignItems="center">
                        <img className={classes.securityIcon} src={security} alt="security" />
                        <Typography color="primary" marginBottom='0 !important' marginRight className={classes.productProperty}>گارانتی 18 ماهه سام تل</Typography>
                    </Box>

                    {/* add to cart */}
                    {
                        product.available ?
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems='center'
                                flexDirection="column"
                            >
                                <Typography fontFamily='shabnam' fontWeight="700" fontSize={20} marginBottom>
                                    {product.price.toLocaleString()} تومان
                                </Typography>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems='center'
                                >
                                    {
                                        checkCart(cartState, product.title, selectedColor.title) &&
                                        <Box className={classes.buttonsContainer}>
                                            <Button
                                                sx={{
                                                    fontSize: 30,
                                                }}
                                                onClick={() => dispatch(increase(product, selectedColor, section))}
                                            >
                                                +
                                            </Button>

                                            {
                                                quantityCount(cartState, product.title, selectedColor.title) >= 1 &&
                                                <Typography fontFamily='shabnam' fontSize={26} fontWeight={700} sx={{ px: 2 }}>{quantityCount(cartState, product.title, selectedColor.title)}</Typography>
                                            }

                                            {
                                                quantityCount(cartState, product.title, selectedColor.title) >= 1 &&
                                                <Button
                                                    sx={{
                                                        fontSize: 30,
                                                    }}
                                                    onClick={() => {
                                                        dispatch(quantityCount(cartState, product.title, selectedColor.title) > 1 ?
                                                            decrease(product, selectedColor, section) :
                                                            dispatch(removeItem(product, selectedColor, section)))
                                                    }
                                                    }
                                                >
                                                    -
                                                </Button>
                                            }
                                        </Box>
                                    }
                                    {
                                        !checkCart(cartState, product.title, selectedColor.title) &&
                                        <Button
                                            variant='contained'
                                            disabled={!selectedColor.title}
                                            sx={{
                                                fontSize: 14,
                                                fontFamily: 'shabnam',
                                                py: 1.3,
                                                px: 6,
                                            }}
                                            startIcon={<ShoppingCartOutlinedIcon sx={{ marginLeft: 1 }} />}
                                            onClick={() => dispatch(addItem(product, selectedColor, section))}
                                        >
                                            افزودن به سبد خرید
                                        </Button>
                                    }
                                </Box>
                            </Box> :
                            <Typography >ناموجود</Typography>
                    }
                </Container>

                <Container
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        padding: "0 !important",
                        maxWidth: '100% !important'
                    }}>
                    <Box
                        className={classes.searchButton}
                        onClick={() => setOpenSearch(!openSearch)}
                        sx={openSearch ? { xxs: { bottom: 68 }, ml: { bottom: 70 } } : { xxs: { bottom: -71 }, ml: { bottom: 0 } }}
                    ></Box>
                    <Box
                        className={classes.searchBoxContainer}
                        sx={
                            !openSearch ?
                                { transform: 'translateY(71px)', display: 'none' } :
                                { xxs: { transform: 'translate(0)', display: "inline-block" }, ml: { transform: 'translateY(0px)', display: "inline-block" } }
                        }
                    >
                        <input type="text" placeholder={searchBarText} className={classes.searchBox} value={search} onChange={e => setSearch(e.target.value)} />
                    </Box>

                    {
                        search.length ?
                            <Box
                                sx={{
                                    width: '90%',
                                    height: 300,
                                    background: "#fff",
                                    position: "absolute",
                                    bottom: 69,
                                    border: "1px solid silver",
                                    borderRadius: 1,
                                    left: "50%",
                                    transform: "translate(-50%)",
                                    padding: 2,
                                    overflow: "auto",
                                    zIndex: 3
                                }}
                            >
                                {
                                    searchResult.length ?
                                        searchResult.map(item => (
                                            <Link
                                                className={classes.searchLink}
                                                key={item.id + item.section}
                                                to={`/${item.section}/${item.id}`}
                                                onClick={() => searchHandler(item)}
                                                title={item.title}
                                            >
                                                <Box display='flex' alignItems='center' marginBottom={2} sx={{ cursor: "pointer" }}>
                                                    <img className={classes.searchProductsImage} src={item.image.main} alt="عکس محصول" />
                                                    <Typography noWrap>{item.title}</Typography>
                                                </Box>
                                            </Link>
                                        )) :
                                        <Typography textAlign="center">هیج موردی یافت نشد</Typography>
                                }
                            </Box> :
                            ''
                    }
                </Container>

                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                >
                    <Box className={classes.modal}>
                        <img className={classes.modalImage} src={showImage} alt="عکس محصول" />
                    </Box>
                </Modal >
                <ReactTooltip />
            </Paper >

    );
};

export default Details;

