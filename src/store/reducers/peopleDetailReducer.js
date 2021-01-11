import {
  GET_PEOPLE_DETAILS,
  GET_PEOPLE_DETAILS_SUCCESS,
  GET_PEOPLE_DETAILS_FAILURE,
} from "../actions/allActionsTypes";

const initialState = {
  peopleDetail: [],
  error: "",
};

export const peopleDetailReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case GET_PEOPLE_DETAILS:
      return {
        ...state,
      };

    case GET_PEOPLE_DETAILS_SUCCESS:
      return {
        ...state,
        peopleDetail: payload,
      };
    case GET_PEOPLE_DETAILS_FAILURE:
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
