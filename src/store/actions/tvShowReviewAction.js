import {
  TVSHOW_REVIEW,
  TVSHOW_REVIEW_SUCCESS,
  TVSHOW_REVIEW_FAILURE,
} from "./allActionsTypes";

export const getTvShowReview = (tvRId) => {
  console.log("Review ID ACTION SE ARHI HY ", tvRId);
  return {
    type: TVSHOW_REVIEW,
    tvRId: tvRId,
  };
};
export const getTvShowReviewSuccess = (tvReviewData) => {
  return {
    type: TVSHOW_REVIEW_SUCCESS,
    payload: tvReviewData,
  };
};
export const getTvShowReviewFailure = (error) => {
  return {
    type: TVSHOW_REVIEW_FAILURE,
    payload: error,
  };
};
