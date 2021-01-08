import {
  GET_ALL_PEOPLE,
  GET_ALL_PEOPLE_SUCCESS,
  GET_ALL_PEOPLE_FAILURE,
} from "./allActionsTypes";

export const getAllPeople = () => {
  return {
    type: GET_ALL_PEOPLE,
  };
};
export const getAllPeopleSuccess = (data) => {
  return {
    type: GET_ALL_PEOPLE_SUCCESS,
    payload: data,
  };
};
export const getAllPeopleFailure = (error) => {
  return {
    type: GET_ALL_PEOPLE_FAILURE,
    payload: error,
  };
};
