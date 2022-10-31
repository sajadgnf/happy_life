import React, { useState } from "react";
import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
  Container,
  SwipeableDrawer,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// icons
import {
  user,
  cart,
  mobile,
  musicPlay,
  navbarLogo,
  aboutUs,
  contactIcon,
  supportIcon,
} from "../constants/icons";

const useStyle = makeStyles((theme) => {
  return {
    root: {
      "&:hover": { backgroundColor: "transparent !important" },
    },
    paper: {
      height: "auto !important",
      transform: "translate(0) !important",
    },
    navItem: {
      width: 22,
      [theme.breakpoints.up("ml")]: {
        width: 24,
      },
      [theme.breakpoints.up("xxl")]: {
        width: 26,
      },
    },
    logo: {
      [theme.breakpoints.up("ml")]: {
        width: 120,
      },
      [theme.breakpoints.up("xxl")]: {
        width: 120,
      },
    },
    navOption: {
      transition: "all .3s ease",
      "&:hover": {
        paddingBottom: 3,
        color: theme.palette.primary.main,
        borderBottom: `2px solid ${theme.palette.primary.main}`,
      },
    },
    navbarLinks: {
      textDecoration: "none",
      marginRight: 20,
      display: "flex",
    },
  };
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    top: 12,
    left: -3,
    fontSize: 6,
    minWidth: 10,
    width: 10,
    height: 12,
    lineHeight: 2,

    [theme.breakpoints.up("ml")]: {
      width: 16,
      height: 16,
      fontSize: 8,
    },
    [theme.breakpoints.up("xxl")]: {
      width: 18,
      height: 18,
      fontSize: 10,
    },
  },
}));

const Header = ({ show }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const counter = useSelector((store) => store.cartState.itemsCounter);
  const loggedIn = useSelector((store) => store.authState.loggedIn);

  return (
    <AppBar
      position="fixed"
      elevation={14}
      sx={{
        background: "#f1f1f1",
        height: { xxs: 32, ml: 45, xxl: 50 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", position: "relative" }}>
        <Box display="flex" alignItems="center">
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            disableRipple
            sx={{ p: 0, pl: 3 }}
            className={classes.root}
            onClick={() => setOpen(true)}
          >
            <MenuIcon sx={{ color: "#333" }} />
          </IconButton>
          {show && (
            <Box display="flex" alignItems="center">
              <Link to="/" className={classes.navbarLinks}>
                <Typography
                  className={classes.navOption}
                  fontSize={{ xxs: 10, lg: 12 }}
                  color="#333"
                >
                  صفحه اصلی
                </Typography>
              </Link>
              <Link to="/support" className={classes.navbarLinks}>
                <Typography
                  className={classes.navOption}
                  fontSize={{ xxs: 10, lg: 12 }}
                  color="#333"
                >
                  پشتیبانی
                </Typography>
              </Link>
              <Link to="/contact" className={classes.navbarLinks}>
                <Typography
                  className={classes.navOption}
                  fontSize={{ xxs: 10, lg: 12 }}
                  color="#333"
                >
                  تماس با ما
                </Typography>
              </Link>
              <Link to="/aboutUs" className={classes.navbarLinks}>
                <Typography
                  className={classes.navOption}
                  fontSize={{ xxs: 10, lg: 12 }}
                  color="#333"
                >
                  درباره ما
                </Typography>
              </Link>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            pt: 1,
          }}
        >
          <Link to="/">
            <img className={classes.logo} src={navbarLogo} alt="log" />
          </Link>
        </Box>
        <Box>
          <IconButton
            size="large"
            sx={{ p: 0, pt: 1, pl: { xxs: 1, ml: 2 } }}
            aria-label="show 17 new notifications"
            disableRipple
            className={classes.root}
          >
            <Link to={loggedIn ? "/profile" : "/logIn"}>
              <img className={classes.navItem} src={user} alt="login" />
            </Link>
          </IconButton>
          <IconButton
            size="large"
            sx={{ p: 0, pt: 1 }}
            disableRipple
            aria-label="show 17 new notifications"
            className={classes.root}
          >
            <StyledBadge
              color="primary"
              badgeContent={counter}
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <Link to="/cart">
                <img className={classes.navItem} src={cart} alt="cart" />
              </Link>
            </StyledBadge>
          </IconButton>
        </Box>
      </Toolbar>

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
            className={classes.root}
            sx={{ marginLeft: "58px" }}
            onClick={() => setOpen(false)}
          >
            <ArrowForwardSharpIcon />
          </IconButton>

          <Divider>
            <List>
              {!show && (
                <ListItem>
                  <Link
                    className={classes.navbarLinks}
                    to="/"
                    onClick={() => setOpen(false)}
                  >
                    <Typography
                      fontSize={{ xxs: 14, ml: 16 }}
                      marginLeft={1}
                      color="primary"
                    >
                      صفحه اصلی
                    </Typography>
                  </Link>
                </ListItem>
              )}

              <ListItem>
                <Link
                  className={classes.navbarLinks}
                  to="/mobiles"
                  onClick={() => setOpen(false)}
                >
                  <Typography
                    fontSize={{ xxs: 14, ml: 16 }}
                    marginLeft={1}
                    color="primary"
                  >
                    موبایل
                  </Typography>
                  <img src={mobile} alt="mobile" />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  className={classes.navbarLinks}
                  to="/accessories"
                  onClick={() => setOpen(false)}
                >
                  <Typography
                    fontSize={{ xxs: 14, ml: 16 }}
                    marginLeft={1}
                    color="primary"
                  >
                    لوازم جانبی
                  </Typography>
                  <img src={musicPlay} alt="headphone" />
                </Link>
              </ListItem>
              {!show && (
                <>
                  <ListItem>
                    <Link
                      className={classes.navbarLinks}
                      to="/support"
                      onClick={() => setOpen(false)}
                    >
                      <Typography
                        fontSize={{ xxs: 14, ml: 16 }}
                        marginLeft={1}
                        color="primary"
                      >
                        پشتیبانی
                      </Typography>
                      <img src={supportIcon} alt="support" />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      className={classes.navbarLinks}
                      to="/contact"
                      onClick={() => setOpen(false)}
                    >
                      <Typography
                        fontSize={{ xxs: 14, ml: 16 }}
                        marginLeft={1}
                        color="primary"
                      >
                        تماس با ما
                      </Typography>
                      <img src={contactIcon} alt="contact" />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      className={classes.navbarLinks}
                      to="/aboutUs"
                      onClick={() => setOpen(false)}
                    >
                      <Typography
                        fontSize={{ xxs: 14, ml: 16 }}
                        marginLeft={1}
                        color="primary"
                      >
                        درباره ما
                      </Typography>
                      <img src={aboutUs} alt="aboutUs" />
                    </Link>
                  </ListItem>
                </>
              )}
            </List>
          </Divider>

          <IconButton disabled sx={{ marginTop: 10 }}>
            <img src={navbarLogo} alt="logo" />
          </IconButton>
        </SwipeableDrawer>
      </Container>
    </AppBar>
  );
};

export default Header;
