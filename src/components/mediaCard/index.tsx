import {
  createStyles,
  makeStyles,
  Theme,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Snackbar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

interface ICardMediaProps {
  media: string;
  title: string;
  content: string;
  status: string;
  target: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 250,
      textAlign: "center",
      backgroundColor: theme.palette.type === "dark" ? "#073642" : "white",
      boxShadow: "0 0 5px black",
    },
    media: {
      height: 120,
    },
  })
);

const MediaCard: React.FunctionComponent<ICardMediaProps> = (props) => {
  const { media, title, content, status, target } = props;
  const classes = useStyles();
  const [openSnack, setSnackOpen] = React.useState(false);

  const handleSnack = () => {
    setSnackOpen(true);
  };

  const handleCloseSnack = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackOpen(false);
  };
  const handleClick = () => {
    if (target !== "") {
      window.open(`${target}`, "_blank");
    } else {
      handleSnack();
    }
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert onClose={handleCloseSnack} severity="info">
          The software still in development!
        </Alert>
      </Snackbar>

      <Card className={classes.root} onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={media}
            title="card media"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {content}
            </Typography>
            <Typography
              style={{
                bottom: 0,
                marginTop: 20,
                color: status === "live" ? "green" : "orange",
              }}
            >
              {status}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default MediaCard;
