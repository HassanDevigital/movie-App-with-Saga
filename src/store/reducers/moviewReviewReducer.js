import {
  GET_MOVIES_REVIEW,
  GET_MOVIES_REVIEW_SUCCESS,
  GET_MOVIES_REVIEW_FAILURE,
} from "../actions/allActionsTypes";

const initialState = {
  movieReview: [],
  error: "",
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case GET_MOVIES_REVIEW:
      return {
        ...state,
      };

    case GET_MOVIES_REVIEW_SUCCESS:
      return {
        ...state,
        movieReview: payload,
      };
    case GET_MOVIES_REVIEW_FAILURE:
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
