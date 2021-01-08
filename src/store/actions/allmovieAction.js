import {
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_MOVIES_FAILURE,
} from "./allActionsTypes";

export const getAllMovies = () => {
  return {
    type: GET_ALL_MOVIES,
  };
};
export const getAllMoviesSuccess = (data) => {
  return {
    type: GET_ALL_MOVIES_SUCCESS,
    payload: data,
  };
};
export const getAllMoviesFailure = (error) => {
  return {
    type: GET_ALL_MOVIES_FAILURE,
    payload: error,
  };
};
