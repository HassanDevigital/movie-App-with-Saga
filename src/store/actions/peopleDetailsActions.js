import {
  GET_PEOPLE_DETAILS,
  GET_PEOPLE_DETAILS_SUCCESS,
  GET_PEOPLE_DETAILS_FAILURE,
} from "./allActionsTypes";

export const getPeopleDetail = (peopleId) => {
  console.log("PeopleID ACTIONS  se Arhi hy ", peopleId);

  return {
    type: GET_PEOPLE_DETAILS,
    peopleId: peopleId,
  };
};
export const getPeopleDetailSuccess = (peopleDetail) => {
  return {
    type: GET_PEOPLE_DETAILS_SUCCESS,
    payload: peopleDetail,
  };
};
export const getPeopleDetailFailure = (error) => {
  return {
    type: GET_PEOPLE_DETAILS_FAILURE,
    payload: error,
  };
};
