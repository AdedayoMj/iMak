import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { makeStyles, Toolbar, Tooltip, Typography } from "@material-ui/core";

interface INavBarProps {
  theme: string;
  handletoggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 80,
  },
}));
const NavBarPage: React.FunctionComponent<INavBarProps> = (props) => {
  const classes = useStyles();

  const { theme, handletoggleTheme } = props;
  const icon = theme === "dark" ? <Brightness7Icon /> : <Brightness3Icon />;

  return (
    <AppBar
      elevation={0}
      position="fixed"
      style={{
        backgroundColor: theme === "dark" ? "#073642" : "white",
      }}
    >
      <Toolbar style={{ marginLeft: 30, marginRight: 30 }}>
        <img src={"/imak.png"} alt="logo" className={classes.logo} />
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
  );
};

export default NavBarPage;
