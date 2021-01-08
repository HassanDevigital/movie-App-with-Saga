import { GET_ALL_PEOPLE, GET_PEOPLE_DETAILS } from "../actions/allActionsTypes";

import {
  getAllPeopleSuccess,
  getAllPeopleFailure,
} from "../actions/peopleActions";

import {
  getPeopleDetailSuccess,
  getPeopleDetailFailure,
} from "../actions/peopleDetailsActions";
import { takeEvery, put, call } from "redux-saga/effects";

import { getAllPeopleUrl, getPeopleDetails } from "../services/api";

function* allPeopleUrl() {
  try {
    const { data } = yield call(getAllPeopleUrl);

    console.log(" All People data  ssaga se arha hy ", data);
    if (data.results) {
      yield put(getAllPeopleSuccess(data.results));
    }
  } catch (error) {
    yield put(getAllPeopleFailure(error));
  }
}

export function* GetAllPeopleUrl() {
  yield takeEvery(GET_ALL_PEOPLE, allPeopleUrl);
}

function* PeopleDetailUrl({ peopleId }) {
  try {
    const { data } = yield call(getPeopleDetails, peopleId);

    console.log(" People DETAIL data  ssaga se arha hy ", data);
    if (data) {
      yield put(getPeopleDetailSuccess(data));
    }
  } catch (error) {
    yield put(getPeopleDetailFailure(error));
  }
}

export function* GetPeopleDetails() {
  yield takeEvery(GET_PEOPLE_DETAILS, PeopleDetailUrl);
}
