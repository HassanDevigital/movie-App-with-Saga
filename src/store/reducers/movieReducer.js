import {
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_MOVIES_FAILURE,
} from "../actions/allActionsTypes";

const initialState = {
  movies: [],
  error: "",
};

export const movieReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case GET_ALL_MOVIES:
      return {
        ...state,
      };

    case GET_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        movies: payload,
      };
    case GET_ALL_MOVIES_FAILURE:
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
