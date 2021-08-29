import React, { useState, MouseEvent } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AppBar from "@material-ui/core/AppBar";
import {
  ThemeProvider,
  PaletteType,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Toolbar,
} from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import IconButton from "@material-ui/core/IconButton";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import {
  Home,
  Storage,
  Info,
  TouchApp,
  AccountCircle,
} from "@material-ui/icons";

export interface IApplicationProps {}
// const themeObject = {
//   palette: {
//     primary: { main: "#053f5b" },
//     secondary: { main: "#5e3c6f" },
//     type: "light"
//   },
//   themeName: "Blue Lagoon 2020",
//   typography: {
//     fontFamily: "Bitter"
//   }
// };
// const useDarkMode = () => {
//   const [theme, setTheme] = useState(themeObject);

//   const {
//     palette: { type }
//   } = theme;
//   const toggleDarkMode = () => {
//     const updatedTheme = {
//       ...theme,
//       palette: {
//         ...theme.palette,
//         type: type === "#073642" ? "light" : "light"
//       }
//     };
//     setTheme(updatedTheme);
//   };
//   return [theme, toggleDarkMode];
// };
export const light = {
  palette: {
    type: "#073642" as PaletteType,
  },
};
export const dark = {
  palette: {
    type: "light" as PaletteType,
  },
};
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
}));

const PrimaryNav: React.FunctionComponent<IApplicationProps> = (props) => {
  const [theme, setTheme] = useState(0);
  const pathname = window.location.pathname;
  const [selected, setSelected] = useState(pathname);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;
  const appliedTheme = createMuiTheme(theme ? light : dark);

  const handleMenu = (event: MouseEvent<HTMLButtonElement>): void => {
    // setAnchorEl(event.target.addEventListener);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(theme);

  return (
    <div>
      <Paper style={{ height: "100vh" }}>
        {/* <AppBar position="fixed" color="primary">
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
        {/* <Typography variant="h6" className={classes.title}>
              Photos
            </Typography> */}

        {/* <div> */}
        {/* <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              > */}
        {/* <AccountCircle />
              </IconButton> */}
        {/* <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              > */}
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar> */}
        {/* </AppBar>  */}

        <Container maxWidth="sm">
          <BottomNavigation
            value={selected}
            onChange={(value, newValue) => {
              setSelected(newValue);
            }}
            style={{
              width: "500",
              background: "#073642",
              color: theme ? "white" : "green",
              bottom: 0,
            }}
          >
            <BottomNavigationAction label="First" icon={<Home />} />
            <BottomNavigationAction label="Second" icon={<Storage />} />
            <BottomNavigationAction label="Third" icon={<Info />} />
            <BottomNavigationAction label="Fourth" icon={<TouchApp />} />
          </BottomNavigation>
          {/* <div className={classes.root}> */}
          {/* <Typography className={classes.title} variant="h3">
            Hello!
          </Typography> */}
          {/* <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={() => setTheme(!theme)}
          >
            {icon}
          </IconButton> */}
          {/* <Typography>
            Click on {!theme ? "Sun" : "Moon"} Icon to change to{" "}
            {!theme ? "Light" : "Dark"} theme
          </Typography> */}
          {/* </div> */}
        </Container>
      </Paper>
    </div>
  );
};

export default PrimaryNav;
