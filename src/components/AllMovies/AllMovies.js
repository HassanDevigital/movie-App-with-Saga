import React, { useEffect } from "react";
import MoviesCard from "./MoviesCard";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { getAllMovies } from "../../store/actions/allmovieAction";

const AllMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <div className="movies-container">
      <h2>List of Movies</h2>
      <Grid container item xs={12} spacing={2}>
        {movies.length &&
          movies.map((item) => <MoviesCard key={item.id} items={item} />)}
      </Grid>
    </div>
  );
};

export default AllMovies;
