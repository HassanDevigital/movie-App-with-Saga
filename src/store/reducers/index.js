import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import UpcommingReducer from "./upcommingReducer";
import TrendingReducer from "./trendingReducer";
import tvshowsReducer from "./tvshowsReducer";
import peopleReducer from "./peopleReducer";
import movieDetailReducer from "./movieDetailReducer";
import tvDetailReducer from "./tvShowsDetailsReducer";
import peopleDetailReducer from "./peopleDetailReducer";
import moviewReviwReducer from "./moviewReviewReducer";
import tvShowReviewReducer from "./tvshowReviewReducer";
import searchReducer from "./searchReducer";
const allReducers = combineReducers({
  movie: movieReducer,
  upcoming: UpcommingReducer,
  trending: TrendingReducer,
  tvshows: tvshowsReducer,
  people: peopleReducer,
  movieDetail: movieDetailReducer,
  tvDetail: tvDetailReducer,
  peopleDetail: peopleDetailReducer,
  movieReview: moviewReviwReducer,
  tvReview: tvShowReviewReducer,
  searchData: searchReducer,
});
export default allReducers;
