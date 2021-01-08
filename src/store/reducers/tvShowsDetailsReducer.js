import {
  GET_TVSHOWS_DETAILS,
  GET_TVSHOWS_DETAILS_SUCCESS,
  GET_TVSHOWS_DETAILS_FAILURE,
} from "../actions/allActionsTypes";

const initialState = {
  tvDetail: [],
  error: "",
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case GET_TVSHOWS_DETAILS:
      return {
        ...state,
      };

    case GET_TVSHOWS_DETAILS_SUCCESS:
      return {
        ...state,
        tvDetail: payload,
      };
    case GET_TVSHOWS_DETAILS_FAILURE:
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
