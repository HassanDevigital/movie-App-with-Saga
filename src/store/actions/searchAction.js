import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE } from "./allActionsTypes";

export const getSearch = (searchLeters) => {
  console.log("SEARCH LETERS ACTION SE ARHN HYN ", searchLeters);
  return {
    type: SEARCH,
    searchLeters: searchLeters,
  };
};
export const getSearchSuccess = (searchData) => {
  return {
    type: SEARCH_SUCCESS,
    payload: searchData,
  };
};
export const getSearchFailure = (error) => {
  return {
    type: SEARCH_FAILURE,
    payload: error,
  };
};
