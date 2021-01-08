import { SEARCH } from "../actions/allActionsTypes";

import { getSearchResult } from "../services/api";

import { getSearchSuccess, getSearchFailure } from "../actions/searchAction";

import { takeEvery, put, call } from "redux-saga/effects";

function* searchUrl({ searchLeters }) {
  try {
    const { data } = yield call(getSearchResult, searchLeters);

    console.log(" QUERY DATA   ssaga se arha hy ", data);
    if (data) {
      yield put(getSearchSuccess(data));
    }
  } catch (error) {
    yield put(getSearchFailure(error));
  }
}

export function* GetSearchUrl() {
  yield takeEvery(SEARCH, searchUrl);
}
