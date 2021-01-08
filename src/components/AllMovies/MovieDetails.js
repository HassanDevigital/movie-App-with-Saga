import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Grid from "@material-ui/core/Grid";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../../store/actions/moviesDetailsActions";
import { getMovieReview } from "../../store/actions/moviesReviewAction";
const imgaeBseUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face//";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    textAlign: "center",
    height: 550,
    width: 400,
  },
  mreview: {},
  boot: {
    width: "100%",
    position: "relative",
    top: -350,
  },
  media: {
    height: 550,
    display: "flex",
  },
  scndCard: {
    position: "relative",
    top: -500,
    width: 800,
    left: 420,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: "blue",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.primary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  Accord: {
    backgroundColor: "lightblue",
  },
}));

const MovieDetails = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const details = useSelector((state) => state.movieDetail.movieDetail);
  const review = useSelector((state) => state.movieReview.movieReview);
  console.log("dispatch se arha hy review data ", review);
  console.log("movieDetailState", details);
  useEffect(() => {
    dispatch(getMovieDetail(id));
    dispatch(getMovieReview(id));
    console.log("dispatch main se", id);
  }, []);

  const dbImages = `${imgaeBseUrl}${details.backdrop_path}`;

  const classes = useStyles();

  return (
    <div>
      <div className="movies-container">
        <Grid item xs={12} md={6} lg={3}>
          <Card className={classes.root}>
            <CardMedia className={classes.media} image={dbImages} />
          </Card>

          <Card className={classes.scndCard} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                TILTE:{details.title}
              </Typography>
              <Typography variant="h5" component="h2">
                OVERVIEW: {details.overview}
              </Typography>
              <Typography color="textSecondary">
                RATINGS:{details.vote_average}
              </Typography>
              <Typography variant="body2" component="p">
                POPULARITY:{details.popularity}
              </Typography>
              <Typography variant="body2" component="p">
                REALSE DATE:{details.release_date}
              </Typography>
              <Typography variant="body2" component="p">
                LANGUAGE:{details.original_language}
              </Typography>
              <Typography variant="body2" component="p">
                REVENUE:{details.revenue}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </div>

      <div className={classes.boot}>
        <Accordion className={classes.Accord}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
          >
            <span>Get Movies Reviews</span>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Auther</TableCell>
                    <TableCell align="center">Review</TableCell>
                    <TableCell align="center">Full Review</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {review &&
                    review.results &&
                    review.results.length &&
                    review.results.map((review) => (
                      <TableRow key={review.id}>
                        <TableCell component="th" scope="row">
                          {review.author}
                        </TableCell>
                        <TableCell align="right">
                          {review.content.slice(0, 300)}
                        </TableCell>
                        <TableCell align="right">
                          <a className={classes.link} href={review.url}>
                            Full Review
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default MovieDetails;
