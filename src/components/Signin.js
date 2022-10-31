import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  InputBase,
  Paper,
  Typography,
  InputAdornment,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

// functions
import useTitle from "../helper/useTitle";
import validate from "../helper/validate";

// images & icons
import { forestBg } from "../constants/images";
import { loginLogo } from "../constants/icons";
import loader from "../assets/gifs/loading.gif";

// redux
import { FetchSignIn } from "../redux/authentication/authActions";

const useStyle = makeStyles((theme) => {
  return {
    form: {
      zIndex: 2,
      paddingBottom: 25,
    },
    container: {
      background: `url(${forestBg})no-repeat center`,
      backgroundSize: "cover",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      width: "300px",
      border: "2px solid #dadada",
      borderRadius: 40,
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
      padding: 20,
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backdropFilter: "blur(15px)",
        boxShadow:
          "inset -5px -5px 10px rgba(255, 255, 255, 0.3), inset 5px 5px 10px rgba(255, 255, 255, 0.3)",
        background:
          "linear-gradient(168.05deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
      },
      [theme.breakpoints.up("lg")]: {
        width: "400px",
      },
      [theme.breakpoints.up("xxl")]: {
        width: "420px",
      },
    },
    logoContainer: {
      margin: "0 auto 30px",
      zIndex: 2,
    },
    logo: {
      width: 200,
      zIndex: 2,
    },
    headButton: {
      color: "#000",
      fontSize: 14,
      textDecoration: "none",
      fontWeight: 700,
    },
    active: {
      position: "relative",
      paddingBottom: 5,
      marginRight: 20,
      "&::before": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        borderBottom: `2px solid ${theme.palette.primary.main}`,
      },
    },
    submitBtn: {
      marginTop: "30px !important",
      borderRadius: "24px !important",
      height: 33,
      boxShadow:
        "2px 4px 4px rgba(0, 0, 0, 0.25), inset -2px -2px 4px rgba(0, 0, 0, 0.25) !important",
      [theme.breakpoints.up("lg")]: {
        height: 43,
      },
    },
    loader: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 4,
    },
  };
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 16,
    position: "relative",
    backgroundColor:
      theme.palette.mode === "light" ? "rgba(255, 255, 255, .5)" : "#2b2b2b",
    boxShadow: "2.56px 5.12px 10.24px rgba(0, 0, 0, 0.25)",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    margin: "0 auto",
    border: "none",
    padding: "5px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    [theme.breakpoints.up("lg")]: {
      padding: "10px 12px",
      borderRadius: 24,
    },
  },
}));

const Signin = () => {
  const classes = useStyle();
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [information, setInformation] = useState({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const authState = useSelector((store) => store.authState);

  useTitle("فروشگاه هپی لایف - ثبت نام");

  const inputHandler = (e) => {
    setInformation({ ...information, [e.target.id]: e.target.value });
  };

  const focusHandler = (event) =>
    setTouched({ ...touched, [event.target.id]: true });

  useEffect(() => {
    setErrors(validate(information, "signUp"));
  }, [information, touched]);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(FetchSignIn(information, errors, setTouched));
  };

  return (
    <Paper elevation={0} className={classes.container}>
      <Box className={classes.content}>
        <Link to="/" className={classes.logoContainer}>
          <img className={classes.logo} src={loginLogo} alt="logo" />
        </Link>

        <Box marginBottom={4} zIndex={2}>
          <Link to="/login" className={classes.headButton}>
            ورود
          </Link>
          <Link
            to="/signin"
            className={`${classes.headButton} ${classes.active}`}
          >
            ثبت نام
          </Link>
        </Box>

        <form
          autoCapitalize="off"
          noValidate
          className={classes.form}
          onSubmit={(event) => submitHandler(event)}
        >
          <FormControl variant="standard" sx={{ width: "100%", mb: 2 }}>
            <InputLabel
              sx={{ color: "#fff", width: "129%" }}
              shrink
              focused={false}
              htmlFor="email"
            >
              ایمیل
            </InputLabel>
            <BootstrapInput
              id="email"
              value={information.email}
              onChange={(e) => inputHandler(e)}
              onFocus={(event) => focusHandler(event)}
            />
            {errors.email && touched.email && (
              <Typography variant="body2" marginTop={0.5} color={"#782228"}>
                {errors.email}
              </Typography>
            )}
          </FormControl>

          <FormControl variant="standard" sx={{ width: "100%", mb: 2 }}>
            <InputLabel
              sx={{ color: "#fff", width: "129%" }}
              shrink
              focused={false}
              htmlFor="userName"
            >
              نام کاربری
            </InputLabel>
            <BootstrapInput
              id="userName"
              value={information.userName}
              onChange={(e) => inputHandler(e)}
              onFocus={(event) => focusHandler(event)}
            />
            {errors.userName && touched.userName && (
              <Typography variant="body2" marginTop={0.5} color={"#782228"}>
                {errors.userName}
              </Typography>
            )}
          </FormControl>

          <FormControl variant="standard" sx={{ width: "100%", mb: 2 }}>
            <InputLabel
              sx={{ color: "#fff", width: "129%" }}
              shrink
              focused={false}
              htmlFor="password"
            >
              رمز عبور
            </InputLabel>
            <BootstrapInput
              id="password"
              value={information.password}
              onChange={(e) => inputHandler(e)}
              onFocus={(event) => focusHandler(event)}
              type={showPass ? "text" : "password"}
              endAdornment={
                <InputAdornment
                  position="end"
                  sx={{ position: "absolute", left: 5, cursor: "pointer" }}
                >
                  {showPass ? (
                    <VisibilityOffIcon onClick={() => setShowPass(false)} />
                  ) : (
                    <VisibilityIcon onClick={() => setShowPass(true)} />
                  )}
                </InputAdornment>
              }
            />
            {errors.password && touched.password && (
              <Typography variant="body2" marginTop={0.5} color={"#782228"}>
                {errors.password}
              </Typography>
            )}
          </FormControl>

          <FormControl variant="standard" sx={{ width: "100%", mb: 1 }}>
            <InputLabel
              sx={{ color: "#fff", width: "129%" }}
              shrink
              focused={false}
              htmlFor="confirmPassword"
            >
              تکرار رمز عبور
            </InputLabel>
            <BootstrapInput
              id="confirmPassword"
              value={information.confirmPassword}
              onChange={(e) => inputHandler(e)}
              onFocus={(event) => focusHandler(event)}
              type={showConfirmPass ? "text" : "password"}
              endAdornment={
                <InputAdornment
                  position="end"
                  sx={{ position: "absolute", left: 5, cursor: "pointer" }}
                >
                  {showConfirmPass ? (
                    <VisibilityOffIcon
                      onClick={() => setShowConfirmPass(false)}
                    />
                  ) : (
                    <VisibilityIcon onClick={() => setShowConfirmPass(true)} />
                  )}
                </InputAdornment>
              }
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Typography variant="body2" marginTop={0.5} color={"#782228"}>
                {errors.confirmPassword}
              </Typography>
            )}
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            className={classes.submitBtn}
          >
            ثبت نام
          </Button>
        </form>
      </Box>

      {authState.loading && (
        <Box>
          <img className={classes.loader} src={loader} alt="loading" />
        </Box>
      )}
    </Paper>
  );
};

export default Signin;
