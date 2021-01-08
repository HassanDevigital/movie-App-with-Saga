import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import UpCommingCard from "./UpCommingCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllUpCommings } from "../../store/actions/upcommingActions";
const UpCommings = () => {
  const dispatch = useDispatch();

  const upcoming = useSelector((state) => state.upcoming.upcoming);

  useEffect(() => {
    dispatch(getAllUpCommings());
  }, []);

  return (
    <div className="movies-container">
      <h2>List of Upcommings</h2>
      <Grid container item xs={12} spacing={2}>
        {upcoming.length &&
          upcoming.map((upcitem) => (
            <UpCommingCard key={upcitem.id} upcitem={upcitem} />
          ))}
      </Grid>
    </div>
  );
};

export default UpCommings;
