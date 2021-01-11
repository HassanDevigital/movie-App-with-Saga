import React, { useEffect } from "react";
import TvShowsCard from "./tvShowsCard";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { getTvShows } from "../../store/actions/tVShowsAction";

const TvShows = () => {
  const dispatch = useDispatch();
  const tvshows = useSelector((state) => state.tvshows.tvshows);

  useEffect(() => {
    dispatch(getTvShows());
  }, [dispatch]);

  return (
    <div className="movies-container">
      <h2>List of tvShows</h2>
      <Grid container item xs={12} spacing={2}>
        {tvshows.length &&
          tvshows.map((tvitem) => (
            <TvShowsCard key={tvitem.id} tvitem={tvitem} />
          ))}
      </Grid>
    </div>
  );
};

export default TvShows;
