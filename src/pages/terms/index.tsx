import React from "react";
import {
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import NavBarPage from "../../components/Navigation";

interface IPageProps {
  homeThem: string;
  handletoggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 30,
      marginTop: 150,
      fontWeight: "bold",
    },
    p: {
      fontSize: 17,
      color: theme.palette.type === "dark" ? "orange" : "black",
    },
  })
);

const TermsPage: React.FunctionComponent<IPageProps> = (props) => {
  const classes = useStyles();
  const { homeThem, handletoggleTheme } = props;

  return (
    <>
      <NavBarPage theme={homeThem} handletoggleTheme={handletoggleTheme} />
      <Container>
        <Typography className={classes.title}>Terms and Conditions</Typography>
        <Typography>
          <p className={classes.p}>This page is currently not available</p>
        </Typography>
      </Container>
    </>
  );
};

export default TermsPage;
