import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
// import Carousel from "react-material-ui-carousel";
import MediaCard from "../../components/mediaCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavBarPage from "../../components/Navigation";

interface IPageProps {
  homeThem: string;
  handletoggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: "center",
      alignContent: "center",
      justify: "center",
    },
    // paper: {
    //   padding: theme.spacing(3),
    //   textAlign: "center",
    //   color: theme.palette.text.secondary,
    // },
  })
);
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

var items = [
  {
    target: "https://imak-tech.netlify.app/",
    title: "iMak",
    status: "live",
    content: "iMak portfolio!",
    media: process.env.PUBLIC_URL + "imak1.png",
  },
  {
    target: "https://professionalprofile-177ed.web.app/",
    title: "Portfolio",
    status: "live",
    content: "Professional portfolio app",
    media: process.env.PUBLIC_URL + "prof.png",
  },
  {
    target: "",
    title: "Tracker",
    status: "In-Development",
    content: "Traking users devices",
    media: process.env.PUBLIC_URL + "traker.jpg",
  },
  {
    target: "",
    title: "MasFit",
    status: "In-Development",
    content: "Fitness & health tracking app",
    media: process.env.PUBLIC_URL + "health.jpg",
  },
  {
    target: "",
    title: "Krami",
    status: "In-Development",
    content: "Guide to becoming a full stack ",
    media: process.env.PUBLIC_URL + "dev.jpg",
  },
];

var GitItems = [
  {
    target: "https://github.com/AdedayoMj/Go_Server_JWT_Auth-with-MongoDB",
    title: "Go api",
    status: "live",
    content: "Goland, Node, MongoDB, JWT",
    media: process.env.PUBLIC_URL + "go.png",
  },
  {
    target:
      "https://github.com/AdedayoMj/Blog_Post_Typescript-Using-FIrebase-and-MongoDB-Server",
    title: "Typescript Api",
    status: "live",
    content: "Typescript, MongoDB, Firebase",
    media: process.env.PUBLIC_URL + "ts.png",
  },
  {
    target:
      "https://github.com/AdedayoMj/WASM-Web_Assembly-_Go_Server_Go_web_Mysql",
    title: "Wasm",
    status: "live",
    content: "Go, Webassembly,Mysql",
    media: process.env.PUBLIC_URL + "wasm.png",
  },
  {
    target: "https://github.com/AdedayoMj/sendMo",
    title: "SendMo",
    status: "live",
    content: "Flutter BSD, firebase",
    media: process.env.PUBLIC_URL + "flutter.jpg",
  },
  {
    target: "https://github.com/AdedayoMj?tab=repositories",
    title: "Github Codes",
    status: "live",
    content: "Other github codes & dev",
    media: process.env.PUBLIC_URL + "code.png",
  },
];

const DemoPage: React.FunctionComponent<IPageProps> = (props) => {
  const classes = useStyles();
  const { homeThem, handletoggleTheme } = props;
  return (
    <>
      <NavBarPage theme={homeThem} handletoggleTheme={handletoggleTheme} />
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Typography style={{ marginTop: 150 }}>Apps</Typography>
          <Grid item xs={12} lg={12}>
            <Carousel
              responsive={responsive}
              itemClass="carousel-item-padding-40-px"
            >
              {items.map((item, i) => (
                <MediaCard
                  key={i}
                  title={item.title}
                  content={item.content}
                  status={item.status}
                  media={item.media}
                  target={item.target}
                />
              ))}
            </Carousel>
          </Grid>
          <Typography style={{ marginTop: 50 }}>Codes</Typography>
          <Grid item xs={12} lg={12}>
            <Carousel
              responsive={responsive}
              itemClass="carousel-item-padding-40-px"
            >
              {GitItems.map((item, i) => (
                <MediaCard
                  key={i}
                  title={item.title}
                  content={item.content}
                  status={item.status}
                  media={item.media}
                  target={item.target}
                />
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DemoPage;
