import React, { useState, useEffect } from "react";
import { Button, Input, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import "react-toastify/dist/ReactToastify.css";

// toast
import { notify } from "./shared/Toast";

// functions
import useTitle from "../helper/useTitle";
import validate from "../helper/validate";

// images & icons
import { blurBg } from "../constants/images";
import { contactUs, callIcon, office, email } from "../constants/icons";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      background: `url(${blurBg}) center no-repeat`,
      backgroundSize: "cover",
      minHeight: "100vh",
      paddingTop: 62,
      paddingBottom: 40,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    containerIcon: {
      width: 220,
      minWidth: "40%",
    },
    content: {
      background: "#757575",
      width: 280,
      minWidth: "80%",
      borderRadius: 14.81,
      padding: "30px 20px",
      [theme.breakpoints.up("sm")]: {
        padding: "60px 20px",
        minWidth: "70%",
      },
      [theme.breakpoints.up("ml")]: {
        padding: "60px 20px",
        minWidth: "50%",
      },
    },
    info: {
      textAlign: "center",
      color: "#fff",
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 5,
    },
    titleText: {
      fontWeight: 100,
      fontSize: 12,
      marginRight: 8,
      [theme.breakpoints.up("sm")]: {
        fontSize: 14,
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 16,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 18,
      },
    },
    titleImage: {
      [theme.breakpoints.up("ml")]: {
        width: 20,
      },
    },
    details: {
      fontSize: 11,
      [theme.breakpoints.up("sm")]: {
        fontSize: 14,
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 16,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 18,
      },
    },
    form: {
      border: "1px solid #333",
      borderRadius: 14.81,
      padding: "30px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      [theme.breakpoints.up("xs")]: {
        margin: "0 20px",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "30px",
        margin: "0 60px",
      },
      [theme.breakpoints.up("xl")]: {
        padding: "30px 50px",
        margin: "0 100px",
      },
      [theme.breakpoints.up("xxl")]: {
        padding: "30px 50px",
        margin: "0 120px",
      },
    },
    textarea: {
      border: "2px solid #555",
      outline: "none",
      padding: 10,
      background: "transparent",
      color: "#fff",
      resize: "none",
      borderRadius: 4,
      width: "100%",
      fontSize: 12,
      marginTop: 66,
      transition: "all .5s ease",
      "&::placeholder": {
        color: "#c0c0c0",
      },
      "&:hover": {
        borderColor: "#000",
      },
      "&:focus": {
        borderColor: "#36bdb4",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 14,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 16,
      },
    },
  };
});

const Contact = () => {
  const classes = useStyle();

  useTitle("تماس با ما - هپی لایف");

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [information, setInformation] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const inputHandler = (event) => {
    setInformation({ ...information, [event.target.name]: event.target.value });
  };

  const focusHandler = (event) =>
    setTouched({ ...touched, [event.target.name]: true });

  useEffect(() => {
    setErrors(validate(information, "contact"));
  }, [information, touched]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      notify("پیام شما با موفقیت ارسال شد", "success");
    } else {
      notify("لطفا اطلاعات خود را به صورت صحیح وارد نمایید", "error");
      setTouched({
        name: true,
        email: true,
        phoneNumber: true,
        message: true,
      });
    }
  };

  return (
    <Paper elevation={0} className={classes.container}>
      <img className={classes.containerIcon} src={contactUs} alt="contact-us" />

      <div className={classes.content}>
        <Box className={classes.info}>
          <Box className={classes.title}>
            <img className={classes.titleImage} src={email} alt="ایمیل" />
            <Typography className={classes.titleText}>ایمیل سازمانی</Typography>
          </Box>
          <Typography
            className={classes.details}
            letterSpacing={{ xxs: 5, ml: 10, lg: 15 }}
            fontFamily="roboto"
            marginBottom={3}
          >
            happy life@yahoo.com
          </Typography>
        </Box>

        <Box className={classes.info}>
          <Box className={classes.title}>
            <img
              className={classes.titleImage}
              src={callIcon}
              alt="تلفن تماس"
            />
            <Typography className={classes.titleText}>تلفن تماس</Typography>
          </Box>
          <Typography
            className={classes.details}
            letterSpacing={{ xxs: 5, ml: 10, lg: 15 }}
            fontFamily="roboto"
            marginBottom={3}
          >
            02188887744
          </Typography>
        </Box>

        <Box className={classes.info}>
          <Box className={classes.title}>
            <img
              className={classes.titleImage}
              src={office}
              alt="دفتر مرکزی هپی لایف"
            />
            <Typography className={classes.titleText}>
              دفتر مرکزی هپی لایف
            </Typography>
          </Box>
          <Typography
            className={classes.details}
            marginBottom={{ xxs: 3, sm: 5, xl: 8 }}
          >
            تهران - خیابان شادی - پلاک ۴۴ - ساختمان هپی لایف
          </Typography>
        </Box>

        <form
          className={classes.form}
          autoCapitalize="off"
          noValidate
          onSubmit={(e) => submitHandler(e)}
        >
          <Input
            placeholder="نام و نام خانوادگی"
            name="name"
            color="focus"
            fullWidth
            required
            sx={{ color: "#fff", fontSize: { xxs: 12, sm: 14, lg: 16 } }}
            value={information.name}
            onChange={(e) => inputHandler(e)}
            onFocus={(e) => focusHandler(e)}
          />
          {errors.name && touched.name && (
            <Typography
              variant="body2"
              marginTop={0.5}
              color="#782228"
              fontSize={{ xxs: 10, xl: 12 }}
            >
              {errors.name}
            </Typography>
          )}

          <Input
            placeholder="پست الکترونیکی"
            name="email"
            color="focus"
            fullWidth
            required
            sx={{
              marginTop: { xxs: 3, sm: 4 },
              color: "#fff",
              fontSize: { xxs: 12, sm: 14, lg: 16 },
            }}
            value={information.email}
            onChange={(e) => inputHandler(e)}
            onFocus={(e) => focusHandler(e)}
          />
          {errors.email && touched.email && (
            <Typography
              variant="body2"
              marginTop={0.5}
              color="#782228"
              fontSize={{ xxs: 10, xl: 12 }}
            >
              {errors.email}
            </Typography>
          )}

          <Input
            placeholder="تلفن تماس"
            name="phoneNumber"
            type="number"
            color="focus"
            fullWidth
            required
            sx={{
              marginTop: { xxs: 3, sm: 4 },
              color: "#fff",
              fontSize: { xxs: 12, sm: 14, lg: 16 },
            }}
            value={information.phoneNumber}
            onChange={(e) => inputHandler(e)}
            onFocus={(e) => focusHandler(e)}
          />
          {errors.phoneNumber && touched.phoneNumber && (
            <Typography
              variant="body2"
              marginTop={0.5}
              color="#782228"
              fontSize={{ xxs: 10, xl: 12 }}
            >
              {errors.phoneNumber}
            </Typography>
          )}

          <textarea
            rows={5}
            value={information.message}
            onChange={(e) => inputHandler(e)}
            onFocus={(e) => focusHandler(e)}
            placeholder="پیام متن"
            name="message"
            className={classes.textarea}
          />
          {errors.message && touched.message && (
            <Typography
              variant="body2"
              marginTop={0.5}
              color="#782228"
              fontSize={{ xxs: 10, xl: 12 }}
            >
              {errors.message}
            </Typography>
          )}

          <Button
            variant="outlined"
            type="submit"
            color="focus"
            sx={{
              mt: 3,
              mx: "auto",
              "&:hover": { background: "#1a5a56", borderColor: "#1a5a56" },
            }}
          >
            ثبت و ارسال
          </Button>
        </form>
      </div>
    </Paper>
  );
};

export default Contact;
