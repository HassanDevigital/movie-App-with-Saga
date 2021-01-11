import React, { useEffect } from "react";
import PeopleCard from "./peopleCard";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { getAllPeople } from "../../store/actions/peopleActions";

const AllPeople = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people.people);
  console.log(people);
  useEffect(() => {
    dispatch(getAllPeople());
  }, [dispatch]);

  return (
    <div className="movies-container">
      <h2>List of People</h2>
      <Grid container item xs={12} spacing={2}>
        {people.length &&
          people.map((pitem) => <PeopleCard key={pitem.id} pitem={pitem} />)}
      </Grid>
    </div>
  );
};

export default AllPeople;
