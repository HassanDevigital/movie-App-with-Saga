import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getPeopleDetail } from "../../store/actions/peopleDetailsActions";

const imgaeBseUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face//";

const useStyles = makeStyles({
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
  scndCard: {
    position: "relative",
    top: -500,
    width: 800,
    left: 420,
  },
});

const PeopleDetails = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const peopledata = useSelector((state) => state.peopleDetail.peopleDetail);
  console.log("people detailsss", peopledata);
  useEffect(() => {
    dispatch(getPeopleDetail(id));
    console.log("dispatch main se people ki", id);
  }, []);

  const dbImages = `${imgaeBseUrl}${peopledata.profile_path}`;

  const classes = useStyles();

  return (
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
              Name:{peopledata.name}
            </Typography>
            <Typography variant="h5" component="h2">
              Biography: {peopledata.biography}
            </Typography>
            <Typography color="textSecondary">
              KNOWN AS A :{peopledata.known_for_department}
            </Typography>
            <Typography variant="body2" component="p">
              POPULARITY:{peopledata.popularity}
            </Typography>
            <Typography variant="body2" component="p">
              DATE OF BIRTH:{peopledata.birthday}
            </Typography>
            <Typography variant="body2" component="p">
              PLACE OF BIRTH:{peopledata.place_of_birth}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default PeopleDetails;
