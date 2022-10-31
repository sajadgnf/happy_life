import {
  Paper,
  Typography,
  Box,
  InputBase,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { questions } from "../constants/questions";
import { Link } from "react-router-dom";
import React, { useState } from "react";

// functions
import { useTitle } from "../helper/useTitle";

// images & icons
import { supportBg, blurBg } from "../constants/images";
import { arrowDown } from "../constants/icons";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      background: `url(${blurBg}) center no-repeat`,
      backgroundSize: "cover",
      minHeight: "100vh",
      marginTop: 32,
    },
    questionBoxContainer: {
      background: `url(${supportBg}) center no-repeat`,
      backgroundSize: "cover",
      height: 240,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginBottom: 20,
      transition: "all .3s ease",
      [theme.breakpoints.up("xs")]: {
        height: 340,
      },
      [theme.breakpoints.up("ml")]: {
        height: 440,
      },
      [theme.breakpoints.up("lg")]: {
        height: 570,
      },
      [theme.breakpoints.up("xxl")]: {
        height: 670,
      },
    },
    questionBox: {
      marginTop: 20,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      [theme.breakpoints.up("ml")]: {
        marginTop: 60,
      },
      [theme.breakpoints.up("xxl")]: {
        marginTop: 80,
      },
    },
    searchBox: {
      width: 195,
      height: 30,
      borderRadius: 8,
      border: "1px solid #333",
      transition: ".5s all linear",

      [theme.breakpoints.up("xs")]: {
        width: 300,
        height: 36,
      },
      [theme.breakpoints.up("ml")]: {
        width: 350,
        height: 40,
      },
      [theme.breakpoints.up("lg")]: {
        width: 500,
        height: 55,
      },
    },
    searchIcon: {
      backgroundColor: "#333",
      padding: 5,
      borderRadius: 10,
      color: "#fff",
      cursor: "pointer",

      [theme.breakpoints.up("lg")]: {
        height: "40px !important",
        width: "40px !important",
        borderRadius: 16,
        top: "94.5%",
      },
    },
    accordion: {
      background: "#227872",
      height: 200,
      overflow: "auto",
      [theme.breakpoints.up("ml")]: {
        height: 250,
      },
      [theme.breakpoints.up("lg")]: {
        height: 300,
      },
    },
    contactBtn: {
      textDecoration: "none",
      color: "#fff",
      padding: "5px 20px",
      [theme.breakpoints.up("ml")]: {
        padding: "8px 40px",
        fontSize: 18,
      },
    },
  };
});

const Support = ({ show }) => {
  useTitle("هپی لایف - پشتیبانی");
  const classes = useStyle();
  const [open, setOpen] = useState(
    questions.map((question) => {
      return { [question.title]: false };
    })
  );

  return (
    <Paper elevation={0} className={classes.container}>
      <div className={classes.questionBoxContainer}>
        <Box className={classes.questionBox}>
          <Typography
            variant="h3"
            color={"#fff"}
            fontFamily="arsoo"
            fontSize={{ xxs: 18, xs: 24, ml: 28, lg: 40, xxl: 50 }}
            letterSpacing={0.5}
            marginBottom={{ xxs: 2, lg: 3 }}
          >
            سلام. ما اینجاییم برای کمک
          </Typography>
          <Paper
            elevation={0}
            className={classes.searchBox}
            component="form"
            sx={{ p: "4px 8px", display: "flex", alignItems: "center" }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                fontSize: {
                  xxs: 11.25,
                  ml: 14,
                  lg: 16,
                },
              }}
              placeholder={"سوال داری؟ بپرس..."}
            />
            <SearchSharpIcon fontSize="medium" className={classes.searchIcon} />
          </Paper>
        </Box>
      </div>
      <div>
        <Typography
          variant="h6"
          fontSize={18}
          fontFamily="shabnam"
          color={"#fff"}
          textAlign="center"
          marginBottom={3}
        >
          پرسش های متداول
        </Typography>
        <Grid container justifyContent="center" paddingBottom={4}>
          {questions.map((question) => (
            <Grid
              item
              key={question.title}
              xxs={5}
              xs={3.5}
              sm={3}
              xl={2.5}
              margin={{ xxs: 1, ml: 2, lg: 3, xl: 1, xxl: 3 }}
            >
              <Card className={classes.accordion}>
                <CardContent>
                  {!open[question.title] ? (
                    <Box
                      onClick={() =>
                        setOpen({ ...open, [question.title]: true })
                      }
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <Typography
                        color={"#fff"}
                        fontSize={{ xxs: 10, xsm: 12, ml: 14, xxl: 16 }}
                      >
                        {question.title}
                      </Typography>
                      <ExpandMoreIcon sx={{ color: "#fff", mt: 1 }} />
                    </Box>
                  ) : (
                    <Typography
                      color={"#fff"}
                      textAlign="center"
                      fontSize={{ xxs: 10, xsm: 12, ml: 14, xxl: 16 }}
                      sx={{ cursor: "pointer", mt: 1 }}
                      onClick={() =>
                        setOpen({ ...open, [question.title]: false })
                      }
                    >
                      {question.details}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      {show && (
        <Box textAlign="center" marginBottom={8}>
          <img src={arrowDown} alt="arrow down" />
        </Box>
      )}
      <Box textAlign="center">
        <Typography
          fontSize={{ xxs: 18, ml: 24 }}
          letterSpacing={2}
          lineHeight={1.8}
          color={"#fff"}
          sx={{
            py: 3,
            px: { xxs: 3, sm: 10, ml: 15, lg: 20 },
            WebkitTextStroke: "0.5px black",
          }}
        >
          چنانچه سوال خود را در لیست پرسش‌های متداول نیافتید و یا علاقمند به
          تماس با مجموعه هپی لایف هستید، می‌توانید از صفحه تماس با ما جهت ارتباط
          با هپی لایف استفاده کنید.
        </Typography>
        <Button variant="contained" sx={{ borderRadius: 10, mb: 10, p: 0 }}>
          <Link className={classes.contactBtn} to="/contact">
            تماس با ما
          </Link>
        </Button>
      </Box>
    </Paper>
  );
};

export default Support;
