import {
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAILURE,
} from "../actions/allActionsTypes";

const initialState = {
  movieDetail: [],
  error: "",
};

export const movieDetailReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case GET_MOVIE_DETAILS:
      return {
        ...state,
      };

    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetail: payload,
      };
    case GET_MOVIE_DETAILS_FAILURE:
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
