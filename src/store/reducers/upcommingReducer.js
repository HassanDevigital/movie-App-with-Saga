import {
  GET_ALL_UPCOMMINGS,
  GET_ALL_UPCOMMINGS_SUCCESS,
  GET_ALL_UPCOMMINGS_FAILURE,
} from "../actions/allActionsTypes";

const initialState = {
  upcoming: [],
  error: "",
};

export const UpcommingReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case GET_ALL_UPCOMMINGS:
      return {
        ...state,
      };

    case GET_ALL_UPCOMMINGS_SUCCESS:
      return {
        ...state,
        upcoming: payload,
      };
    case GET_ALL_UPCOMMINGS_FAILURE:
      return {
        error: error,
      };
    default:
      return {
        ...state,
      };
  }
};
