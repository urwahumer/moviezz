import http from "../../Utils/http-service";
import { API_BASE_URL, Api_key, serachMovie } from "../../Utils/urls";
import {
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILED
} from "../actionTypes/search";
import { GENRE_MOVIES_SUCCESS } from "../actionTypes/genre";

//fetch genre List
export const searchMovie = (search, genre, page) => async dispatch => {
  console.log(page, search, genre);
  try {
    let res;
    res = await http.get(
      `${API_BASE_URL}${serachMovie}?api_key=${Api_key}&language=en-US&query=${search}&page=${page}&include_adult=false&genre&with_genre=${genre}`
    );
    let gift = res.data.results;
    console.log(res.data);

    dispatch({ type: SEARCH_MOVIES_SUCCESS, payLoad: res.data });

    return res;
  } catch (error) {
    return error;
  }
};

export const clearSearchMovie = () => async dispatch => {
  dispatch({ type: SEARCH_MOVIES_FAILED, payLoad: [] });
};
