import { all, fork } from "redux-saga/effects";

import {
  GetallMoviesUrl,
  GetUpcommingsUrl,
  GetTrendingsUrl,
  GetMovieDetails,
  GetMovieReviews,
} from "./allMoviesDiscoverSaga";
import { GetTvShowsUrl, GetTvDetails, GetTvReviews } from "./TvShowsSaga";
import { GetAllPeopleUrl, GetPeopleDetails } from "./peopleSaga";
import { GetSearchUrl } from "./serachSaga";
export default function* rootSaga() {
  yield all([
    fork(GetallMoviesUrl),
    fork(GetUpcommingsUrl),
    fork(GetTrendingsUrl),
    fork(GetTvShowsUrl),
    fork(GetAllPeopleUrl),
    fork(GetMovieDetails),
    fork(GetTvDetails),
    fork(GetPeopleDetails),
    fork(GetMovieReviews),
    fork(GetTvReviews),
    fork(GetSearchUrl),
  ]);
}
