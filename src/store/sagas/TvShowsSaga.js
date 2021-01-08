import {
  TVSHOW_REVIEW,
  GET_TVSHOWS_DETAILS,
  GET_ALL_TVSHOWS,
} from "../actions/allActionsTypes";

import { getTvShowsSuccess, getTvShowsFailure } from "../actions/tVShowsAction";
import {
  getTvShowReviewSuccess,
  getTvShowReviewFailure,
} from "../actions/tvShowReviewAction";
import {
  getTvDetailSuccess,
  getTvDetailFailure,
} from "../actions/tvShowsDetailsActions";

import { takeEvery, put, call } from "redux-saga/effects";

import { getAllTvShowsUrl, getTvDetailUrl, getTvReview } from "../services/api";

function* TvShowsUrl() {
  try {
    const { data } = yield call(getAllTvShowsUrl);

    console.log(" All Tvshows data  ssaga se arha hy ", data);
    if (data.results) {
      yield put(getTvShowsSuccess(data.results));
    }
  } catch (error) {
    yield put(getTvShowsFailure(error));
  }
}

export function* GetTvShowsUrl() {
  yield takeEvery(GET_ALL_TVSHOWS, TvShowsUrl);
}

function* TvDetailUrl({ tvId }) {
  try {
    const { data } = yield call(getTvDetailUrl, tvId);

    console.log(" TV DETAIL data  ssaga se arha hy ", data);
    if (data) {
      yield put(getTvDetailSuccess(data));
    }
  } catch (error) {
    yield put(getTvDetailFailure(error));
  }
}

export function* GetTvDetails() {
  yield takeEvery(GET_TVSHOWS_DETAILS, TvDetailUrl);
}

function* TvReviewUrl({ tvRId }) {
  try {
    const { data } = yield call(getTvReview, tvRId);

    console.log(" TV Review data  ssaga se arha hy ", data);
    if (data) {
      yield put(getTvShowReviewSuccess(data));
    }
  } catch (error) {
    yield put(getTvShowReviewFailure(error));
  }
}

export function* GetTvReviews() {
  yield takeEvery(TVSHOW_REVIEW, TvReviewUrl);
}
