import {
  GET_ALL_PEOPLE,
  GET_ALL_PEOPLE_SUCCESS,
  GET_ALL_PEOPLE_FAILURE,
} from "../actions/allActionsTypes";

const initialState = {
  people: [],
  error: "",
};

export const peopleReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case GET_ALL_PEOPLE:
      return {
        ...state,
      };

    case GET_ALL_PEOPLE_SUCCESS:
      return {
        ...state,
        people: payload,
      };
    case GET_ALL_PEOPLE_FAILURE:
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
