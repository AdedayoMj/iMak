import {
  createStyles,
  makeStyles,
  Theme,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import React from "react";

interface ICardMediaProps {
  media: string;
  title: string;
  content: string;
  status: string;
  target: string;
  handleClickSnack: (event: string) => void;
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
  const { media, title, content, status, target, handleClickSnack } = props;
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} onClick={() => handleClickSnack(target)}>
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
