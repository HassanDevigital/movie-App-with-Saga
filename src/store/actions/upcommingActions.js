import {
  GET_ALL_UPCOMMINGS,
  GET_ALL_UPCOMMINGS_SUCCESS,
  GET_ALL_UPCOMMINGS_FAILURE,
} from "./allActionsTypes";

export const getAllUpCommings = () => {
  return {
    type: GET_ALL_UPCOMMINGS,
  };
};
export const getAllUpCommingsSuccess = (data) => {
  return {
    type: GET_ALL_UPCOMMINGS_SUCCESS,
    payload: data,
  };
};
export const getAllUpCommingsFailure = (error) => {
  return {
    type: GET_ALL_UPCOMMINGS_FAILURE,
    payload: error,
  };
};
