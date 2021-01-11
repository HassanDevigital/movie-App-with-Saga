import React, { useState, useEffect } from "react";
import MoviesCard from "../AllMovies/MoviesCard";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import { DebounceInput } from "react-debounce-input";

import { getSearch } from "../../store/actions/searchAction";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  inputfeild: {
    width: "50%",
    marginLeft: "27%",
    marginBottom: 100,
  },
}));

const Search = () => {
  const [query, setQuery] = useState("");

  const classes = useStyles();
  const searchRes = useSelector((state) => state.searchData.searchData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearch(query));
  }, [query]);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="movies-container">
      {/* <DebounceInput
        className={classes.inputfeild}
        minLength={3}
        debounceTimeout={300}
        value={query}
        onChange={onChange}
      /> */}
      <Input
        className={classes.inputfeild}
        placeholder="Search here"
        inputProps={{ "aria-label": "description" }}
        onChange={onChange}
        value={query}
      />

      <Grid container item xs={12} spacing={2}>
        {searchRes?.results?.length > 0 &&
          searchRes.results.map((item) => (
            <MoviesCard key={item.id} items={item} />
          ))}
      </Grid>
    </div>
  );
};

export default Search;
