import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Container,
  Button,
} from "@material-ui/core";
import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import NavBarPage from "../../components/Navigation";
import { green, grey } from "@material-ui/core/colors";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import RoomIcon from "@material-ui/icons/Room";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface IPageProps {
  homeThem: string;
  handletoggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 150,
    },

    button: {
      marginTop: 40,
      marginBottom: 60,
      height: 40,
      backgroundColor: green[500],
      color: "white",
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
    },
    p: {
      fontSize: 17,
      color: theme.palette.type === "dark" ? grey[400] : "black",
    },
    address: {
      fontSize: 15,
      color: theme.palette.type === "dark" ? grey[400] : "black",
    },
    locator: {
      color: "teal",
    },
  })
);

const InfoPage: React.FunctionComponent<IPageProps> = (props) => {
  const classes = useStyles();
  const { homeThem, handletoggleTheme } = props;
  const [openSnack, setSnackOpen] = React.useState(false);

  const handleClick = () => {
    setSnackOpen(true);
  };

  const handleCloseSnack = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackOpen(false);
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert onClose={handleCloseSnack} severity="warning">
          Service currently unavailable!
        </Alert>
      </Snackbar>
      <NavBarPage theme={homeThem} handletoggleTheme={handletoggleTheme} />
      <div className={classes.root}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <Container>
                <Typography className={classes.title}>About Us</Typography>

                <Typography>
                  <p className={classes.p}>
                    iMak- Tech is a web development solution founded by Adedayo
                    Adegboye . We provide cost effective web development
                    solutions to start-ups and small businesses.
                  </p>
                  <p className={classes.p}>
                    We deliver dynamic clean codes and support the project at
                    any stage of development.
                  </p>
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Container>
                <Typography className={classes.title}> Conatct Us</Typography>
                <div>
                  <Button
                    variant="contained"
                    className={classes.button}
                    onClick={() =>
                      window.open(
                        "https://calendly.com/imak-appointment/15min",
                        "_blank"
                      )
                    }
                  >
                    <PersonIcon /> &nbsp;&nbsp; BOOK AN APPOINTMENT
                  </Button>
                </div>
                <div>
                  <Grid direction="row" className="social-menu ">
                    <a
                      href="https://www.linkedin.com/in/majeed-adegboye-47189142/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <i onClick={handleClick} className="fab fa-twitter"></i>
                    <a
                      href="https://www.facebook.com/dayo.adegboye"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <i onClick={handleClick} className="fab fa-instagram"></i>
                  </Grid>
                </div>
                <div>
                  <Typography className={classes.address}>
                    <RoomIcon className={classes.locator} /> 7 Heli , Mustame,
                    Harju County, Estonia
                  </Typography>
                </div>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default InfoPage;
