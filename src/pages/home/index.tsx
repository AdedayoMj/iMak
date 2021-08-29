import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import { green } from "@material-ui/core/colors";
import "./home.css";
import Box from "@material-ui/core/Box";
// import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
// import CloseIcon from "@material-ui/icons/Close";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface IPageProps {
  homeThem: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 80,
    },
    button: {
      marginTop: 40,
      marginBottom: 60,
      height: 40,
      backgroundColor: green[500],
      color: "white",
    },
    buttonList: {
      marginRight: 5,
      marginTop: 5,
      borderRadius: 20,
      "&:hover": {
        background: "#88D8C0",
      },
    },
    paper: {
      padding: theme.spacing(2),
      // textAlign: "center",
      // color: theme.palette.text.secondary,
    },
    title: {
      fontSize: 60,
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 40,
    },
    p: {
      fontSize: 20,
    },
  })
);
const HomePage: React.FunctionComponent<IPageProps> = (props) => {
  const { homeThem } = props;
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
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
  const list = [
    { title: "Go", color: "#fac5a6" },
    { title: "Javascript", color: "#fae2e0" },
    { title: "React", color: "#c7d0d7" },
    { title: "React Native", color: "#ab6393" },
    { title: "Flutter", color: "#9c8cdb" },
    { title: "R", color: "#fac5a6" },
    { title: "Material UI", color: "#ab6393" },
    { title: "Bootstrap", color: "#fae2e0" },
    { title: "Redux Toolkit", color: "#c7d0d7" },
    { title: "Typescript", color: "#9c8cdb" },
    { title: "MongoDB", color: "#fae2e0" },
    { title: "Mongoose", color: "#ab6393" },
    { title: "Firebase", color: "#9c8cdb" },
    { title: "Node", color: "#fac5a6" },
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
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
        <Grid item xs={12} lg={6}>
          <Typography>
            <div className={classes.title}>Adedayo Adegboye</div>
            <div className={classes.subtitle}>Sofware Developer</div>
          </Typography>
          <Typography>
            <p className={classes.p}>
              Versatile in using different various languages and platform. We do
              private projects at an affordable flexible prices . Book a free
              appointment with one of our consultants
            </p>
          </Typography>
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
            <div style={{ fontWeight: "bold", marginBottom: 25 }}>
              LANGUAGES AND FRAMEWORK
            </div>
            {/* <span style={{ marginBottom: 30 }}>Click to see details</span> */}
            <div>
              {list.map((item, index) => {
                return (
                  <span>
                    <Button
                      variant="contained"
                      className={classes.buttonList}
                      key={index}
                      style={{
                        backgroundColor:
                          homeThem === "dark" ? item.color : "#0f85a3",
                      }}
                      // onClick={handleOpen}
                    >
                      {item.title}
                    </Button>
                    {/* <ModalPage
                      modalOpen={open}
                      handleClose={() => handleClose()}
                      modalContext={item.title}
                    /> */}
                  </span>
                );
              })}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box component={Grid} display={{ xs: "none", lg: "block" }}>
            <img
              width="650"
              height="650"
              src={process.env.PUBLIC_URL + "abstract.png"}
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
