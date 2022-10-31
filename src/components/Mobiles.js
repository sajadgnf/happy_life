import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  SwipeableDrawer,
  Switch,
  Typography,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { styled, alpha } from "@mui/system";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import SliderUnstyled, {
  sliderUnstyledClasses,
} from "@mui/base/SliderUnstyled";
import React, { useEffect, useRef, useState } from "react";

// components
import CardComponent from "./shared/CardComponent";

// images & icons
import { eidOffer, productsFrame } from "../constants/images";
import { tune } from "../constants/icons";

// functions
import useTitle from "../helper/useTitle";

// customization styles
const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 2,
  width: 18,
  height: 18,
  marginLeft: 2,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage: theme.palette.mode === "dark" ? "#227872" : "#227872",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
    background: "#227872",
  },
  [theme.breakpoints.up("xxl")]: {
    width: 20,
    height: 20,
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#227872",
});

function BpRadio(props) {
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
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
  width: 40,
  height: 18,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 18,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translate(18px, -1.2px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    transform: "translate(0px, -0.4px)",
    [theme.breakpoints.up("ml")]: {
      transform: "translate(0, -0.4px)",
    },
    "&.Mui-checked": {
      transform: "translate(21px, -0.4px)",
      color: "#fff",
      [theme.breakpoints.up("ml")]: {
        transform: "translate(21px, -0.4px)",
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#227872" : "#227872",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 15,
    height: 15,
    borderRadius: "100%",
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid #cbcbcb`,
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18 }} />}
    {...props}
  />
))(({ theme }) => ({
  padding: 0,
  marginBottom: 8,
  height: 30,
  minHeight: 30,
  flexDirection: "row",
  backgroundColor:
    theme.palette.mode === "dark" ? "rgb(255, 255, 255)" : "#fff",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  [theme.breakpoints.up("xxl")]: {
    height: 40,
    minHeight: 40,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  paddingBottom: 10,
}));

const StyledSlider = styled(SliderUnstyled)(
  ({ theme }) => `
  color: ${theme.palette.mode === "light" ? "#227872" : "#90caf9"};
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
    margin-right: -6px;
    margin-top: -5px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    border: 2px solid currentColor;
    background-color: #fff;

    :hover,
    &.${sliderUnstyledClasses.focusVisible} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === "light" ? "#227872" : "#90caf9",
        0.15
      )};
    }

    &.${sliderUnstyledClasses.active} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === "light" ? "#227872" : "#90caf9",
        0.3
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
    transform: translateX(53%);
  }
`
);

// styles
const useStyle = makeStyles((theme) => {
  return {
    container: {
      padding: "0 32px",

      [theme.breakpoints.up("sm")]: {
        padding: "0 40px",
      },
      [theme.breakpoints.up("ml")]: {
        padding: "0 60px",
      },
    },
    headerImage: {
      backgroundSize: "cover",
      height: 180,
      marginTop: "30px",

      [theme.breakpoints.up("sm")]: {
        width: "100%",
        height: 220,
        margin: "30px auto 0",
      },

      [theme.breakpoints.up("ml")]: {
        width: "90%",
        height: 200,
        marginTop: "89px",
      },

      [theme.breakpoints.up("lg")]: {
        marginTop: "120px",
        height: 285,
      },
      [theme.breakpoints.up("xxl")]: {
        height: 316,
      },
    },
    filterTitle: {
      fontSize: 13.5,
      [theme.breakpoints.up("xxl")]: {
        fontSize: 16,
      },
    },
    radioFilter: {
      "& span": {
        fontSize: 12,
        [theme.breakpoints.up("xxl")]: {
          fontSize: 14,
        },
      },
      "& *:hover": {
        background: "transparent",
      },
    },
    accordionTitle: {
      fontSize: 12,
      fontWeight: 400,
      [theme.breakpoints.up("xxl")]: {
        fontSize: 16,
      },
    },
    accordionContent: {
      fontSize: 12,
      cursor: "pointer",
      padding: "8px 0",
      textAlign: "right",
      [theme.breakpoints.up("xxl")]: {
        fontSize: 14,
      },
    },
    priceRangeNumber: {
      fontSize: 14,
      fontFamily: "shabnam",
      [theme.breakpoints.up("ml")]: {
        fontSize: 12,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 14,
      },
    },
    paper: {
      transform: "translate(0) !important",
      width: "100%",
    },
  };
});

const Mobiles = ({ show, productsState }) => {
  useTitle("خرید و قیمت موبایل");

  const classes = useStyle();
  const ref = useRef();
  const [expanded, setExpanded] = useState("");
  const [mobiles, setMobiles] = useState([...productsState.products.mobiles]);
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState({
    price: "",
    brand: "",
    color: "",
    priceRange: [0, 50000000],
    available: false,
  });
  let colors = [];

  // filter accordion expand
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // get unique brands and colors
  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const brands = productsState.products.mobiles
    .map((item) => item.brand)
    .filter(unique);
  productsState.products.mobiles.map((item) =>
    item.colors.map((item) => colors.push(item))
  );

  useEffect(() => {
    if (categories.available && !categories.color) {
      if (categories.brand) {
        setMobiles((mobiles) => mobiles.filter((item) => item.available));
      } else {
        setMobiles(
          productsState.products.mobiles.filter((item) => item.available)
        );
      }
    }

    if (!categories.available && !categories.color) {
      if (categories.brand) {
        setMobiles(
          productsState.products.mobiles.filter(
            (item) => item.brand === categories.brand
          )
        );
      } else {
        setMobiles([...productsState.products.mobiles]);
      }
    }

    if (categories.color) {
      if (categories.brand && categories.available) {
        setMobiles(
          productsState.products.mobiles.filter(
            (item) =>
              item.colors.find((color) => color === categories.color) &&
              item.brand === categories.brand &&
              item.available
          )
        );
      } else if (categories.brand) {
        setMobiles(
          productsState.products.mobiles.filter(
            (item) =>
              item.colors.find((color) => color === categories.color) &&
              item.brand === categories.brand
          )
        );
      } else if (categories.available) {
        setMobiles(
          productsState.products.mobiles.filter(
            (item) =>
              item.colors.find((color) => color === categories.color) &&
              item.available
          )
        );
      } else {
        setMobiles(
          productsState.products.mobiles.filter((item) =>
            item.colors.find((color) => color === categories.color)
          )
        );
      }
    }

    if (categories.priceRange) {
      setMobiles((mobiles) =>
        mobiles.filter(
          (item) =>
            item.price <= categories.priceRange[1] &&
            item.price >= categories.priceRange[0]
        )
      );
    }

    if (categories.price === "highestPrice")
      setMobiles((mobiles) => mobiles.sort((a, b) => b.price - a.price));
    if (categories.price === "lowestPrice")
      setMobiles((mobiles) => mobiles.sort((a, b) => a.price - b.price));
  }, [categories]);

  useEffect(() => {
    if (categories.brand) {
      if (categories.available) {
        setMobiles(
          productsState.products.mobiles.filter(
            (item) => item.available && item.brand === categories.brand
          )
        );
      } else if (categories.color) {
        setMobiles(
          productsState.products.mobiles.filter(
            (item) =>
              item.colors.find((color) => color === categories.color) &&
              item.brand === categories.brand
          )
        );
      } else if (categories.color && categories.available) {
        setMobiles(
          productsState.products.mobiles.filter(
            (item) =>
              item.colors.find((color) => color === categories.color) &&
              item.brand === categories.brand &&
              item.brand === categories.brand
          )
        );
      } else {
        setMobiles(
          productsState.products.mobiles.filter(
            (item) => item.brand === categories.brand
          )
        );
      }
    }
  }, [categories.brand]);

  const categoriesHandler = (event) => {
    if (event.target.id === "available") {
      setCategories({
        ...categories,
        [event.target.id]: !categories[event.target.id],
      });
      if (!ref.current.classList.contains("Mui-checked"))
        ref.current.classList.add("Mui-checked");
    } else if (event.target.id === "price") {
      setCategories({ ...categories, [event.target.id]: event.target.value });
    } else {
      setCategories({
        ...categories,
        [event.target.id]: event.target.innerText,
      });
    }
  };

  const priceRangeHandler = (e, data) => {
    setCategories({ ...categories, priceRange: data });
  };

  const clearFilterHandler = () => {
    setMobiles([...productsState.products.mobiles]);
    setCategories({
      price: "",
      brand: "",
      color: "",
      priceRange: [0, 50000000],
      available: false,
    });
    ref.current.firstElementChild.checked = false;
    ref.current.checked = false;
    ref.current.classList.remove("Mui-checked");
  };

  return (
    <Paper elevation={0}>
      {/* header image */}
      <Box
        sx={
          show
            ? { background: `url(${eidOffer}) no-repeat center` }
            : { background: `url(${productsFrame}) no-repeat center` }
        }
        className={classes.headerImage}
      ></Box>

      <div className={classes.container}>
        {/* filters button */}
        {!show && (
          <Button
            onClick={() => setOpen(true)}
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#333",
              m: "40px 0 20px !important",
            }}
          >
            <img src={tune} alt="tune" />
            <Typography marginRight>فیلتر </Typography>
          </Button>
        )}

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mb: 7,
            m: {
              ml: "65px 0 50px !important",
              lg: "90px 0 !important",
            },
          }}
        >
          {show && (
            <Box
              sx={{
                ml: { xxs: 1, ml: 2, xxl: 6 },
                width: { xxs: 340, xxl: 400 },
              }}
            >
              <Box display="flex" justifyContent="space-between">
                <Typography className={classes.filterTitle} color="primary">
                  فیلتر
                </Typography>
                <Typography
                  className={classes.filterTitle}
                  color="#782228"
                  sx={{ cursor: "pointer" }}
                  onClick={() => clearFilterHandler()}
                >
                  حذف فیلترها
                </Typography>
              </Box>
              <Box
                sx={{
                  border: "1px solid silver",
                  py: 2,
                  px: 1,
                  borderRadius: 1.5,
                }}
              >
                <FormControl
                  sx={{
                    borderBottom: "1px solid #cbcbcb",
                    pb: 0.5,
                    width: "100%",
                  }}
                >
                  <FormLabel className={classes.filterTitle} sx={{ mb: 0.5 }}>
                    مرتب سازی بر اساس :
                  </FormLabel>

                  <RadioGroup
                    value={categories.price}
                    className={classes.radioFilter}
                    onChange={(event) => categoriesHandler(event)}
                  >
                    <FormControlLabel
                      sx={{
                        margin: 0,
                        flexDirection: "row-reverse",
                        justifyContent: "space-between",
                      }}
                      value="highestPrice"
                      label="بیشترین قیمت"
                      control={<BpRadio id="price" sx={{ py: 0.5, px: 0 }} />}
                    />
                    <FormControlLabel
                      sx={{
                        margin: 0,
                        flexDirection: "row-reverse",
                        justifyContent: "space-between",
                      }}
                      value="lowestPrice"
                      label="کمترین قیمت"
                      control={<BpRadio id="price" sx={{ py: 0.5, px: 0 }} />}
                    />
                  </RadioGroup>
                </FormControl>

                <FormControlLabel
                  className={classes.radioFilter}
                  sx={{
                    m: 0,
                    flexDirection: "row-reverse",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #cbcbcb",
                    py: { xxs: 1, ml: 1.5 },
                    width: "100%",
                  }}
                  control={
                    <AntSwitch
                      ref={ref}
                      id="available"
                      onClick={(event) => categoriesHandler(event)}
                    />
                  }
                  label="فقط کالاهای موجود"
                />

                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography className={classes.accordionTitle}>
                      برند
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {brands.map((item) => (
                      <Typography
                        key={item}
                        className={classes.accordionContent}
                        id="brand"
                        color={item === categories.brand && "primary"}
                        onClick={(event) => categoriesHandler(event)}
                      >
                        {item}
                      </Typography>
                    ))}
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <Typography className={classes.accordionTitle}>
                      رنگ
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {colors.filter(unique).map((item) => (
                      <Typography
                        key={item}
                        className={classes.accordionContent}
                        color={item === categories.color && "primary"}
                        id="color"
                        onClick={(event) => categoriesHandler(event)}
                      >
                        {item}
                      </Typography>
                    ))}
                  </AccordionDetails>
                </Accordion>

                <Box marginTop={2} textAlign="center">
                  <Typography textAlign="start" className={classes.filterTitle}>
                    قیمت
                  </Typography>
                  <StyledSlider
                    value={categories.priceRange}
                    onChange={priceRangeHandler}
                    valueLabelDisplay="off"
                    isRtl
                    min={0}
                    max={50000000}
                  />
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    sx={{ transform: "translateY(-10px)" }}
                  >
                    <Typography className={classes.priceRangeNumber}>
                      از {categories.priceRange[0].toLocaleString()} تومان
                    </Typography>
                    <Typography className={classes.priceRangeNumber}>
                      تا {categories.priceRange[1].toLocaleString()} تومان
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          <Grid container spacing={{ xxs: 2, xl: 5, xxl: 6 }}>
            {mobiles.map((item) => (
              <Grid item key={item.id} xxs={12} xs={6} lg={4}>
                <CardComponent item={item} section="mobiles" />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Container>
          <SwipeableDrawer
            anchor="right"
            open={open}
            classes={{ paper: classes.paper }}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
          >
            <IconButton
              disableRipple
              sx={{ justifyContent: "start" }}
              onClick={() => setOpen(false)}
            >
              <ArrowForwardSharpIcon />
            </IconButton>

            <Divider sx={{ display: "unset", mt: 2 }}>
              <Box
                sx={{
                  ml: { xxs: 1, ml: 2, xxl: 6 },
                  width: "92vw",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  sx={{ pb: 1, borderBottom: "1px solid #cdcdcd" }}
                >
                  <Typography className={classes.filterTitle} color="primary">
                    فیلتر
                  </Typography>
                  <Typography
                    className={classes.filterTitle}
                    color="#782228"
                    sx={{ cursor: "pointer" }}
                    onClick={() => clearFilterHandler()}
                  >
                    حذف فیلترها
                  </Typography>
                </Box>
                <Box sx={{ py: 2, px: 1 }}>
                  <FormControl
                    sx={{
                      borderBottom: "1px solid #cbcbcb",
                      pb: 0.5,
                      width: "100%",
                    }}
                  >
                    <FormLabel
                      className={classes.filterTitle}
                      sx={{ mb: 1, textAlign: "start" }}
                    >
                      مرتب سازی بر اساس :
                    </FormLabel>

                    <RadioGroup
                      value={categories.price}
                      className={classes.radioFilter}
                      onChange={(event) => categoriesHandler(event)}
                    >
                      <FormControlLabel
                        sx={{
                          margin: 0,
                          flexDirection: "row-reverse",
                          justifyContent: "space-between",
                        }}
                        value="highestPrice"
                        label="بیشترین قیمت"
                        control={<BpRadio id="price" sx={{ py: 0.5, px: 0 }} />}
                      />
                      <FormControlLabel
                        sx={{
                          margin: 0,
                          flexDirection: "row-reverse",
                          justifyContent: "space-between",
                        }}
                        value="lowestPrice"
                        label="کمترین قیمت"
                        control={<BpRadio id="price" sx={{ py: 0.5, px: 0 }} />}
                      />
                    </RadioGroup>
                  </FormControl>

                  <FormControlLabel
                    className={classes.radioFilter}
                    sx={{
                      m: 0,
                      display: { xxs: "flex", ml: "unset" },
                      flexDirection: "row-reverse",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #cbcbcb",
                      py: { xxs: 1, ml: 1.5 },
                      width: "100%",
                    }}
                    control={
                      <AntSwitch
                        ref={ref}
                        id="available"
                        onClick={(event) => categoriesHandler(event)}
                      />
                    }
                    label="فقط کالاهای موجود"
                  />

                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography className={classes.accordionTitle}>
                        برند
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {brands.map((item) => (
                        <Typography
                          key={item}
                          className={classes.accordionContent}
                          id="brand"
                          color={item === categories.brand && "primary"}
                          onClick={(event) => categoriesHandler(event)}
                        >
                          {item}
                        </Typography>
                      ))}
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                    >
                      <Typography className={classes.accordionTitle}>
                        رنگ
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {colors.filter(unique).map((item) => (
                        <Typography
                          key={item}
                          className={classes.accordionContent}
                          color={item === categories.color && "primary"}
                          id="color"
                          onClick={(event) => categoriesHandler(event)}
                        >
                          {item}
                        </Typography>
                      ))}
                    </AccordionDetails>
                  </Accordion>

                  <Box marginTop={2} textAlign="center">
                    <Typography
                      textAlign="start"
                      className={classes.filterTitle}
                    >
                      قیمت
                    </Typography>
                    <StyledSlider
                      value={categories.priceRange}
                      onChange={priceRangeHandler}
                      valueLabelDisplay="off"
                      isRtl
                      min={0}
                      max={50000000}
                    />
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      sx={{ transform: "translateY(-10px)" }}
                    >
                      <Typography className={classes.priceRangeNumber}>
                        از {categories.priceRange[0].toLocaleString()} تومان
                      </Typography>
                      <Typography className={classes.priceRangeNumber}>
                        تا {categories.priceRange[1].toLocaleString()} تومان
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Divider>
          </SwipeableDrawer>
        </Container>
      </div>
    </Paper>
  );
};

export default Mobiles;
