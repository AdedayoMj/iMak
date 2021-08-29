import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { green } from "@material-ui/core/colors";
import "./App.css";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import DemoPage from "./pages/demo";
import AppBar from "@material-ui/core/AppBar";
import imak from "./assets/images/imak.png";
import mediaP from "./assets/images/heli7.jpg";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import CardContent from "@material-ui/core/CardContent";
// import ChatIcon from "@material-ui/icons/Chat";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Toolbar,
  Grid,
  Fab,
  Popover,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  Tooltip,
} from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import IconButton from "@material-ui/core/IconButton";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { Home, Storage, Info, TouchApp } from "@material-ui/icons";
import HomePage from "./pages/home";

export interface IApplicationProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 80,
  },
  bottomroot: {
    width: 430,
    borderRadius: 10,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    marginBottom: 120,
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600],
    },
  },
  media: {
    height: 0,
    paddingTop: "47%", // 16:9
  },
  cardroot: {
    maxWidth: 345,
  },
}));

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  const [darkMode, setDartMode] = useState(true);
  const [openChat, setOpenChat] = useState(false);
  const [selected, setSelected] = useState(0);
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: { main: darkMode ? "#0f85a3" : "#04b542" },
      type: darkMode ? "dark" : "light",
    },
  });
  const icon =
    theme.palette.type === "dark" ? <Brightness7Icon /> : <Brightness3Icon />;

  const handletoggleTheme = () => {
    setDartMode(!darkMode);
  };

  const headerStyle = {
    background: ` url( ${
      process.env.PUBLIC_URL + "vectorpaint.svg"
    }) no-repeat left center fixed`,
    backgroundColor: theme.palette.type === "dark" ? "#073642" : "white",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left bottom",
    width: "100%",
    height: "100%",
    position: "absolute" as "absolute",
  };
  return (
    <ThemeProvider theme={theme}>
      <Paper style={headerStyle}>
        <AppBar
          elevation={0}
          position="fixed"
          style={{
            backgroundColor:
              theme.palette.type === "dark" ? "#073642" : "white",
          }}
        >
          <Toolbar style={{ marginLeft: 60, marginRight: 60 }}>
            <img src={imak} alt="logo" className={classes.logo} />
            <Typography variant="h6" className={classes.title}>
              iMak-Tech
            </Typography>

            <div>
              <Tooltip title="Change Theme">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handletoggleTheme}
                  color="inherit"
                >
                  {icon}
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
        {
          [
            <Container>
              <HomePage homeThem={theme.palette.type} />
            </Container>,

            <Container>
              <DemoPage />
            </Container>,
            <Typography>Info</Typography>,
            <Typography>Terms</Typography>,
          ][selected]
        }
        <Container>
          <Grid direction="column" justify="center" alignItems="center">
            <Grid item xs={12} container justify="center">
              <BottomNavigation
                value={selected}
                onChange={(value, newValue) => {
                  setSelected(newValue);
                }}
                className={classes.bottomroot}
                style={{
                  // width: "100%",
                  background:
                    theme.palette.type === "dark" ? "#072a33" : "white",
                  bottom: 25,
                  boxShadow: "2px 2px 2px 1px black",
                  position: "fixed",
                }}
              >
                <Tooltip title="Home">
                  <BottomNavigationAction label="Home" icon={<Home />} />
                </Tooltip>
                <Tooltip title="Project">
                  <BottomNavigationAction label="Project" icon={<Storage />} />
                </Tooltip>
                <Tooltip title="Info">
                  <BottomNavigationAction label="Info" icon={<Info />} />
                </Tooltip>
                <Tooltip title="Terms">
                  <BottomNavigationAction label="Terms" icon={<TouchApp />} />
                </Tooltip>
              </BottomNavigation>
            </Grid>
          </Grid>
        </Container>
        <Fab
          aria-label="chat"
          className={clsx(classes.fab, classes.fabGreen)}
          color="inherit"
          onClick={() => setOpenChat(!openChat)}
        >
          <Popover
            open={openChat}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            // anchorPosition={{ top: 300, left: 500 }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Card
              style={{
                height: 310,
                backgroundColor:
                  theme.palette.type === "dark" ? "#072a33" : "white",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe">
                    <img src={imak} alt="logo" />
                  </Avatar>
                }
                title="CONTACT US @ iMak-Tech"
              />
              <CardMedia
                className={classes.media}
                image={mediaP}
                title="House"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Address: Heli 7/2, Tallinn Estonia
                </Typography>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                  Email: majeedmaryamirfan@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </Popover>
          {!openChat ? <ContactMailIcon /> : <UpIcon />}
        </Fab>
      </Paper>
    </ThemeProvider>
  );
};

export default Application;
