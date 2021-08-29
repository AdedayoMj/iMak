import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
interface IPageProps {}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 100,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);
const InfoPage: React.FunctionComponent<IPageProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography>Info</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography>Info</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoPage;
