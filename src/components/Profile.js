import { Paper, SwipeableDrawer } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

// components
import Header from "./dashboard/Header";
import Sidebar from "./dashboard/Sidebar";
import UserInfo from "./dashboard/UserInfo";
import Addresses from "./dashboard/Addresses";
import Messages from "./dashboard/Messages";
import ReturnGoods from "./dashboard/ReturnGoods";
import UserLikes from "./dashboard/UserLikes";
import UserOrders from "./dashboard/UserOrders";

// functions
import useTitle from "../helper/useTitle";

const useStyles = makeStyles((theme) => {
  return {
    header: {
      gridColumn: "1/10",
      gridRow: "span 1",
      [theme.breakpoints.up("ml")]: {
        gridColumn: "2/10",
        width: "100%",
      },
    },
  };
});

const Profile = ({ show }) => {
  useTitle("فروشگاه هپی لایف - داشبورد");
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [direct, setDirect] = useState("داشبورد");

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#f1f1f1",
        minHeight: "100vh",
        mt: { xxs: 4, ml: 5.8 },
        display: "grid",
        gridTemplateColumns: { xxs: "auto", ml: "230px", lg: "320px" },
        gridTemplateRows: "auto",
      }}
    >
      <header className={classes.header}>
        <Header direct={direct} setOpen={setOpen} show={show} />
      </header>
      {show ? (
        <Box gridRow=" 1/10" gridColumn={{ xxs: "1/10", ml: "1/2" }}>
          <Sidebar setDirect={setDirect} show={show} />
        </Box>
      ) : (
        <SwipeableDrawer
          anchor="left"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <Sidebar setDirect={setDirect} setOpen={setOpen} show={show} />
        </SwipeableDrawer>
      )}
      <Box sx={{ m: { ml: "24px" }, gridColumn: { xxs: "1/10", ml: "2/10" } }}>
        <Routes>
          <Route path="/info" element={<UserInfo />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/return-goods" element={<ReturnGoods />} />
          <Route path="/likes" element={<UserLikes />} />
          <Route path="/my-orders" element={<UserOrders />} />
        </Routes>
      </Box>
    </Paper>
  );
};

export default Profile;
