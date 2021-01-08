import {
  GET_ALL_TRENDINGS,
  GET_ALL_TRENDINGS_SUCCESS,
  GET_ALL_TRENDINGS_FAILURE,
} from "./allActionsTypes";

export const getAllTrendings = () => {
  return {
    type: GET_ALL_TRENDINGS,
  };
};
export const getAllTrendingSuccess = (data) => {
  return {
    type: GET_ALL_TRENDINGS_SUCCESS,
    payload: data,
  };
};
export const getAllTrendingFailure = (error) => {
  return {
    type: GET_ALL_TRENDINGS_FAILURE,
    payload: error,
  };
};
