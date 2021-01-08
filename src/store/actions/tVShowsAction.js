import {
  GET_ALL_TVSHOWS,
  GET_ALL_TVSHOWS_SUCCESS,
  GET_ALL_TVSHOWS_FAILURE,
} from "./allActionsTypes";

export const getTvShows = () => {
  return {
    type: GET_ALL_TVSHOWS,
  };
};
export const getTvShowsSuccess = (data) => {
  return {
    type: GET_ALL_TVSHOWS_SUCCESS,
    payload: data,
  };
};
export const getTvShowsFailure = (error) => {
  return {
    type: GET_ALL_TVSHOWS_FAILURE,
    payload: error,
  };
};
