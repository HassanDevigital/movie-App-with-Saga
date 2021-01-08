import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import CardContent from "@material-ui/core/CardContent";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getTvDetail } from "../../store/actions/tvShowsDetailsActions";
import { getTvShowReview } from "../../store/actions/tvShowReviewAction";
const imgaeBseUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face//";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    textAlign: "center",
    height: 550,
    width: 400,
  },
  media: {
    height: 550,
    display: "flex",
  },
  boot: {
    width: "100%",
    position: "relative",
    top: -200,
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

const TvShowsDetails = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const tvdata = useSelector((state) => state.tvDetail.tvDetail);
  const tvReview = useSelector((state) => state.tvReview.tvReview);
  console.log("tv detailsss", tvdata);
  console.log(("tv Review", tvReview));
  useEffect(() => {
    dispatch(getTvDetail(id));
    dispatch(getTvShowReview(id));
    console.log("dispatch main se", id);
  }, []);

  const dbImages = `${imgaeBseUrl}${tvdata.backdrop_path}`;

  const classes = useStyles();

  return (
    <div>
      <div className="movies-container">
        <Grid item xs={12} md={6} lg={3}>
          <Card className={classes.root}>
            <CardMedia className={classes.media} image={dbImages} />
          </Card>

          <Grid item xs={12} md={6} lg={3}></Grid>
          <Card className={classes.scndCard} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                TILTE:{tvdata.original_name}
              </Typography>
              <Typography variant="h5" component="h2">
                OVERVIEW: {tvdata.overview}
              </Typography>
              <Typography color="textSecondary">
                RATINGS:{tvdata.vote_average}
              </Typography>
              <Typography variant="body2" component="p">
                POPULARITY:{tvdata.popularity}
              </Typography>
              <Typography variant="body2" component="p">
                REALSE DATE:{tvdata.release_date}
              </Typography>
              <Typography variant="body2" component="p">
                LANGUAGE:{tvdata.original_language}
              </Typography>
              <Typography variant="body2" component="p">
                REVENUE:{tvdata.revenue}
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
            <span>Get Tv Show Reviews</span>
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
                  {tvReview &&
                    tvReview.results &&
                    tvReview.results.length &&
                    tvReview.results.map((review) => (
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

export default TvShowsDetails;
