import {
  GET_ALL_TVSHOWS,
  GET_ALL_TVSHOWS_SUCCESS,
  GET_ALL_TVSHOWS_FAILURE,
} from "../actions/allActionsTypes";

const initialState = {
  tvshows: [],
  error: "",
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case GET_ALL_TVSHOWS:
      return {
        ...state,
      };

    case GET_ALL_TVSHOWS_SUCCESS:
      return {
        ...state,
        tvshows: payload,
      };
    case GET_ALL_TVSHOWS_FAILURE:
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
