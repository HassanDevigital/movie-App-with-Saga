import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";
const key = "fd0cd44d9b05da67db3dd6795fbd6dd5";

//Discover API
//https://api.themoviedb.org/3/discover/movie?api_key=fd0cd44d9b05da67db3dd6795fbd6dd5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
const DiscoverApiUrl = `${API_BASE_URL}/discover/movie?api_key=${key}`;

//Upcomming API
//https://api.themoviedb.org/3/movie/upcoming?api_key=fd0cd44d9b05da67db3dd6795fbd6dd5&language=en-US&page=1
const UpcommingsApiUrl = `${API_BASE_URL}/movie/upcoming?api_key=${key}`;

//Trending Api
//https://api.themoviedb.org/3/trending/all/day?api_key=fd0cd44d9b05da67db3dd6795fbd6dd5
const TrendingsApiUrl = `${API_BASE_URL}/trending/all/day?api_key=${key}`;

//TVshowApi
//https://api.themoviedb.org/3/tv/popular?api_key=fd0cd44d9b05da67db3dd6795fbd6dd5&language=en-US&page=1
const TVShowsApiUrl = `${API_BASE_URL}/tv/popular?api_key=${key}`;

//ALL People API
//https://api.themoviedb.org/3/person/popular?api_key=fd0cd44d9b05da67db3dd6795fbd6dd5&language=en-US&page=1
const PeopleApiUrl = `${API_BASE_URL}/person/popular?api_key=${key}`;

//Movie Details
//"https://api.themoviedb.org/3/movie/";
//const movieDetail = `${API_BASE_URL}/movie/?api_key=${key}`;

//TV Show Detail
//

//People Detials
//

//AllDiscover Api
export const getAllDiscovers = async () => {
  const data = await axios.get(DiscoverApiUrl);
  console.log("Discover API data", data);
  return data;
};

//AllUpcommings API
export const getAllUpcomingsUrl = async () => {
  const data = await axios.get(UpcommingsApiUrl);
  console.log("Upcomings API DATA", data);
  return data;
};

//AllTrendingsAPI
export const getAllTrendingsUrl = async () => {
  const data = await axios.get(TrendingsApiUrl);
  console.log("Trending API DATA", data);
  return data;
};

//All TVShows API
export const getAllTvShowsUrl = async () => {
  const data = await axios.get(TVShowsApiUrl);
  console.log("TVShows API", data);
  return data;
};

//ALL People API
export const getAllPeopleUrl = async () => {
  const data = await axios.get(PeopleApiUrl);
  console.log("ALL people Data APi", data);
  return data;
};

export const getMovieDetailUrl = async (id) => {
  console.log("id from user clicked", id);
  const movieDetail = `${API_BASE_URL}/movie/${id}?api_key=${key}`;

  const data = await axios.get(movieDetail);
  console.log(" Movies Data APi", data);
  return data;
};

export const getTvDetailUrl = (id) => {
  console.log("tvid from user clicked", id);
  const movieDetail = `${API_BASE_URL}/tv/${id}?api_key=${key}`;

  const data = axios.get(movieDetail);
  console.log(" TV  Data APi", data);
  return data;
};

export const getPeopleDetails = async (id) => {
  console.log("People ID from user clicked", id);
  const peopleDetail = `${API_BASE_URL}/person/${id}?api_key=${key}`;

  const data = await axios.get(peopleDetail);
  console.log(" People Data APi", data);
  return data;
};

export const getMovieReview = async (reviewId) => {
  const MovieReview = `${API_BASE_URL}/movie/${reviewId}/reviews?api_key=${key}`;

  const data = await axios.get(MovieReview);
  console.log(" Movie Review Data from API", data);
  return data;
};

export const getTvReview = async (tvReviewId) => {
  const TvReview = `${API_BASE_URL}/tv/${tvReviewId}/reviews?api_key=${key}`;

  const data = await axios.get(TvReview);
  console.log(" TV Review Data from API", data);
  return data;
};

export const getSearchResult = async (query) => {
  const multiSearch = `${API_BASE_URL}/search/multi/?api_key=${key}&query=${query}`;

  const data = await axios.get(multiSearch, {
    headers: {
      // "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  console.log(" TV Review Data from API", data);
  return data;
};
