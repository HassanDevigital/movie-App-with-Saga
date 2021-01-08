import {
  GET_TVSHOWS_DETAILS,
  GET_TVSHOWS_DETAILS_SUCCESS,
  GET_TVSHOWS_DETAILS_FAILURE,
} from "./allActionsTypes";

export const getTvDetail = (tvId) => {
  console.log("movieIDDDDD se rarr", tvId);

  return {
    type: GET_TVSHOWS_DETAILS,
    tvId: tvId,
  };
};
export const getTvDetailSuccess = (tvDetail) => {
  return {
    type: GET_TVSHOWS_DETAILS_SUCCESS,
    payload: tvDetail,
  };
};
export const getTvDetailFailure = (error) => {
  return {
    type: GET_TVSHOWS_DETAILS_FAILURE,
    payload: error,
  };
};
