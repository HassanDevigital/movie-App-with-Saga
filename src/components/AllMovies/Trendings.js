import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TrendingCard from "./TrendingCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllTrendings } from "../../store/actions/trendingAction";
const Trendings = () => {
  const dispatch = useDispatch();
  const trending = useSelector((state) => state.trending.trending);

  useEffect(() => {
    dispatch(getAllTrendings());
  }, [dispatch]);

  return (
    <div className="movies-container">
      <h2>List of Trendings.....</h2>
      <Grid container item xs={12} spacing={2}>
        {trending.length &&
          trending.map((trenditem) => (
            <TrendingCard key={trenditem.id} trenditem={trenditem} />
          ))}
      </Grid>
    </div>
  );
};

export default Trendings;
