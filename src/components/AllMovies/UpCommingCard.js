import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const imgaeBseUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face//";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    textAlign: "center",
    height: 550,
  },
  media: {
    height: 400,
    display: "flex",
  },
  link: {
    color: "golden",
    textAlign: "center",
    textDecoration: "none",
  },
});

export default function UpCommingCard({ upcitem }) {
  const dbImages = `${imgaeBseUrl}${upcitem.poster_path}`;

  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} lg={3}>
      <Link className={classes.link} to={`/movieDetails/${upcitem.id}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={dbImages}
              title={upcitem.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {upcitem.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {upcitem.vote_average}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}
