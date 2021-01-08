import {
  TVSHOW_REVIEW,
  TVSHOW_REVIEW_SUCCESS,
  TVSHOW_REVIEW_FAILURE,
} from "../actions/allActionsTypes";

const initialState = {
  tvReview: [],
  error: "",
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case TVSHOW_REVIEW:
      return {
        ...state,
      };

    case TVSHOW_REVIEW_SUCCESS:
      return {
        ...state,
        tvReview: payload,
      };
    case TVSHOW_REVIEW_FAILURE:
      return {
        ...state,
        error: error,
      };
    default:
      return {
        ...state,
      };
  }
};
