import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from "../actions/allActionsTypes";

const initialState = {
  searchData: [],
  error: "",
};

export const searchReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case SEARCH:
      return {
        ...state,
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        searchData: payload,
      };
    case SEARCH_FAILURE:
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
