import { Button, Paper, Typography, Box, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useState } from "react";

// functions
import { validate } from "../../helper/useTitle";

const useStyle = makeStyles((theme) => {
  return {
    contentContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column",
      [theme.breakpoints.up("xs")]: {
        flexDirection: "row",
      },
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
    },
    contentTitle: {
      color: "#757575",
      marginBottom: "10px",
    },
    infoButton: {
      position: "absolute",
      bottom: -18,
      left: "50%",
      transform: "translateX(-50%)",
      borderRadius: 10,
    },
  };
});

const UserInfoForm = () => {
  const classes = useStyle();
  const [editInfo, setEditInfo] = useState(false);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [info, setInfo] = useState({
    name: "-",
    email: `${JSON.parse(localStorage.getItem("auth_info")).email}`,
    phoneNum: "-",
    nationalCod: "-",
    job: "-",
    birthDate: "-",
  });

  const infoHandler = (evt) => {
    setInfo({ ...info, [evt.target.name]: [evt.target.value] });
  };

  const focusHandler = (event) =>
    setTouched({ ...touched, [event.target.name]: true });

  useEffect(() => {
    setErrors(validate(info));
  }, [info, touched]);

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        justifyContent: { xxs: "space-between", xs: "center" },
        flexDirection: "column",
        p: 6,
        position: "relative",
      }}
    >
      <Box className={classes.contentContainer} marginBottom={{ xs: 7 }}>
        <Box className={classes.content}>
          <Typography className={classes.contentTitle}>
            نام و نام خانوادگی
          </Typography>
          {editInfo ? (
            <TextField
              value={info.name}
              name="name"
              onChange={(e) => infoHandler(e)}
            />
          ) : (
            <Typography>{info.name}</Typography>
          )}
        </Box>
        <Box className={classes.content}>
          <Typography className={classes.contentTitle}>
            پست الکترونیکی
          </Typography>
          {editInfo ? (
            <>
              <TextField
                value={info.email}
                name="email"
                onChange={(e) => infoHandler(e)}
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
            </>
          ) : (
            <Typography>{info.email}</Typography>
          )}
        </Box>
        <Box className={classes.content}>
          <Typography className={classes.contentTitle}>شماره مبایل</Typography>
          {editInfo ? (
            <TextField
              type="number"
              value={info.phoneNum}
              name="phoneNum"
              onChange={(e) => infoHandler(e)}
            />
          ) : (
            <Typography>{info.phoneNum}</Typography>
          )}
        </Box>
      </Box>
      <Box className={classes.contentContainer}>
        <Box className={classes.content}>
          <Typography className={classes.contentTitle}>کد ملی</Typography>
          {editInfo ? (
            <TextField
              type="number"
              value={info.nationalCod}
              name="nationalCod"
              onChange={(e) => infoHandler(e)}
            />
          ) : (
            <Typography>{info.nationalCod}</Typography>
          )}
        </Box>
        <Box className={classes.content}>
          <Typography className={classes.contentTitle}>شغل</Typography>
          {editInfo ? (
            <TextField
              value={info.job}
              name="job"
              onChange={(e) => infoHandler(e)}
            />
          ) : (
            <Typography>{info.job}</Typography>
          )}
        </Box>
        <Box className={classes.content}>
          <Typography className={classes.contentTitle}>تاریخ تولد</Typography>
          {editInfo ? (
            <TextField
              type="date"
              value={info.birthDate}
              name="birthDate"
              onChange={(e) => infoHandler(e)}
            />
          ) : (
            <Typography>{info.birthDate}</Typography>
          )}
        </Box>
      </Box>
      {editInfo ? (
        <Button
          className={classes.infoButton}
          variant="contained"
          onClick={() => setEditInfo(false)}
        >
          ثبت اطلاعات
        </Button>
      ) : (
        <Button
          className={classes.infoButton}
          variant="contained"
          onClick={() => setEditInfo(true)}
        >
          ویرایش اطلاعات
        </Button>
      )}
    </Paper>
  );
};

export default UserInfoForm;
