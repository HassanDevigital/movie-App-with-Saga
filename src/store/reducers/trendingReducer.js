import {
  GET_ALL_TRENDINGS,
  GET_ALL_TRENDINGS_SUCCESS,
  GET_ALL_TRENDINGS_FAILURE,
} from "../actions/allActionsTypes";

const initialState = {
  trending: [],
  error: "",
};

export const TrendingReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case GET_ALL_TRENDINGS:
      return {
        ...state,
      };

    case GET_ALL_TRENDINGS_SUCCESS:
      return {
        ...state,
        trending: payload,
      };
    case GET_ALL_TRENDINGS_FAILURE:
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
