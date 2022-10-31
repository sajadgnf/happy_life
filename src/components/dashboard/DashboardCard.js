import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import LinesEllipsis from "react-lines-ellipsis";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";

// icons
import { security } from "../../constants/icons";

// redux
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../../redux/cart/cartActions";

// functions
import checkCart from "../../helper/checkCart";
import quantityCount from "../../helper/quantityCount";

const useStyle = makeStyles((theme) => {
  return {
    cardLink: {
      color: "#333",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
    },

    title: {
      fontSize: 14,
      fontFamily: "estedad",
      height: 50,
      marginBottom: 10,

      [theme.breakpoints.up("ml")]: {
        marginBottom: 20,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 16,
      },
      [theme.breakpoints.up("xl")]: {
        marginBottom: 0,
      },
    },
    productInfo: {
      fontSize: 12,
      [theme.breakpoints.up("lg")]: {
        fontSize: 14,
      },
    },
    guarantee: {
      width: 20,
      marginRight: 3,
    },

    buttonsContainer: {
      border: `2px solid ${theme.palette.primary.main}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 40,
      borderRadius: 10,
      overflow: "hidden",
      marginTop: 8,
      marginBottom: 8,
      [theme.breakpoints.up("xs")]: {
        marginBottom: 0,
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: 0,
        height: 45,
      },
    },
  };
});

const DashboardCard = ({ item, section, color }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const cartState = useSelector((store) => store.cartState);
  const [deleteItem, setDeleteItem] = useState(false);

  const detailsHandler = () => {
    dispatch({ type: section.toUpperCase() });
  };

  const colors = () => {
    if (color === "مشکی") {
      return { title: color, hex: "#333" };
    }
    if (color === "سفید") {
      return { title: color, hex: "#fff" };
    }
    if (color === "آبی") {
      return { title: color, hex: "#1388cd" };
    }
    if (color === "طلایی") {
      return { title: color, hex: "#cda113" };
    }
    if (color === "قرمز") {
      return { title: color, hex: "#bd0310" };
    }
    if (color === "خاکستری") {
      return { title: color, hex: "#878787" };
    }
  };

  return (
    !deleteItem && (
      <Card
        elevation={14}
        sx={{
          borderRadius: "8px",
          display: "flex",
          flexDirection: { xxs: "column", ml: "row" },
          position: "relative",
          pt: 2,
          pb: { xxs: 20, lg: 12 },
        }}
      >
        <CardMedia
          component="img"
          image={item.image.main}
          alt="feature"
          sx={{
            objectFit: "contain",
            my: 1,
            mx: { xxs: "auto", ml: "unset" },
            height: { xxs: 117.7, ml: 150, xxl: 177 },
            width: { xxs: "fit-content", xs: "unset" },
          }}
        />
        <CardContent>
          <LinesEllipsis
            className={classes.title}
            text={item.title}
            maxLine="1"
            ellipsis="..."
            trimRight
            component={"h3"}
            basedOn="words"
          />
          <Box display="flex" alignItems="center">
            <img src={security} className={classes.guarantee} alt="security" />
            <Typography
              color="primary"
              marginBottom="0 !important"
              marginRight
              className={classes.productInfo}
            >
              گارانتی 18 ماهه سام تل
            </Typography>
          </Box>
          <Box
            width={28}
            paddingTop={1}
            margin="0 6px"
            display="flex"
            alignItems="center"
          >
            <Box
              sx={{
                background: colors().hex,
                width: "15px",
                minWidth: "15px",
                height: "15px",
                borderRadius: "100%",
                boxShadow: "0 0 11px 0 rgba(0, 0, 0, .5)",
                "&:hover": { backgroundColor: colors().hex },
              }}
            ></Box>
            <Typography
              marginRight
              color={colors().hex === "#fff" ? "#000" : colors().hex}
              className={classes.productInfo}
            >
              {color}
            </Typography>
          </Box>

          <Box
            position="absolute"
            left="0"
            bottom={{ xs: "40px" }}
            padding="0 20px"
            display="flex"
            flexDirection={{ xxs: "column-reverse", xs: "row" }}
            justifyContent="space-between"
            alignItems="flex-end"
            width="100%"
          >
            <Link
              to={`/${section}/${item.id}`}
              className={classes.cardLink}
              onClick={() => detailsHandler()}
            >
              <Button
                variant="contained"
                sx={{
                  fontSize: { xxs: 12, xl: 14 },
                  fontFamily: "shabnam",
                  py: 1.3,
                  pr: 2,
                  pl: 3,
                  ml: { ml: 2 },
                }}
              >
                مشاهده محصول
              </Button>
            </Link>

            <Box>
              {item.available ? (
                <Typography
                  align="left"
                  fontSize={{ xxs: "14px", xl: "20.2px" }}
                  fontWeight="700"
                  fontFamily="shabnam"
                >
                  {item.price.toLocaleString()} تومان
                </Typography>
              ) : (
                <Typography
                  align="left"
                  fontSize={{ xxs: "14.37px", sm: "14px", xl: "20.2px" }}
                  fontWeight="700"
                  fontFamily="shabnam"
                >
                  ناموجود
                </Typography>
              )}

              <Box
                display="flex"
                flexDirection={{ xxs: "column", lg: "row" }}
                justifyContent="end"
                alignItems={{ xxs: "flex-end", lg: "center" }}
                marginTop={1}
              >
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: 14,
                    color: "#888",
                    borderColor: "#888",
                    fontFamily: "shabnam",
                    ml: { lg: 2 },
                    pl: { xxs: 1, ml: 3 },
                    py: { xxs: 0.7, lg: 1 },
                  }}
                  startIcon={<DeleteOutlineIcon sx={{ marginLeft: 1 }} />}
                  onClick={() => {
                    item.color
                      ? dispatch(removeItem(item, colors(), section))
                      : setDeleteItem(true);
                  }}
                >
                  حذف
                </Button>
                {checkCart(cartState, item.title, color) && (
                  <Box className={classes.buttonsContainer}>
                    <Button
                      sx={{ fontSize: 30 }}
                      onClick={() =>
                        dispatch(increase(item, colors(), section))
                      }
                    >
                      +
                    </Button>

                    {quantityCount(cartState, item.title, color) >= 1 && (
                      <Typography
                        fontFamily="shabnam"
                        fontSize={26}
                        fontWeight={700}
                        sx={{ px: 2 }}
                      >
                        {quantityCount(cartState, item.title, color)}
                      </Typography>
                    )}

                    {quantityCount(cartState, item.title, color) >= 1 && (
                      <Button
                        sx={{ fontSize: 30 }}
                        onClick={() => {
                          dispatch(
                            quantityCount(cartState, item.title, color) > 1
                              ? decrease(item, colors(), section)
                              : dispatch(removeItem(item, colors(), section))
                          );
                        }}
                      >
                        -
                      </Button>
                    )}
                  </Box>
                )}
                {!checkCart(cartState, item.title, color) && (
                  <Button
                    variant="outlined"
                    disabled={!item.available}
                    sx={{
                      fontSize: 14,
                      fontFamily: "shabnam",
                      py: { xxs: 0.9, lg: 1 },
                      mt: { xxs: 1, lg: 0 },
                      mb: { xxs: 1, xs: 0 },
                      px: { xxs: 3, ml: 6 },
                    }}
                    startIcon={
                      <ShoppingCartOutlinedIcon sx={{ marginLeft: 1 }} />
                    }
                    onClick={() => dispatch(addItem(item, colors(), section))}
                  >
                    افزودن به سبد خرید
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    )
  );
};

export default DashboardCard;
