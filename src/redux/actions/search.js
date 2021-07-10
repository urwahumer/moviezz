import http from "../../Utils/http-service";
import { API_BASE_URL, Api_key, serachMovie } from "../../Utils/urls";
import {
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILED,
  SEARCH_WORD_MOVIES_SUCCESS,
  SEARCH_WORD_MOVIES_FAILED
} from "../actionTypes/search";
import { GENRE_MOVIES_SUCCESS } from "../actionTypes/genre";

//fetch genre List
export const searchMovie = (search_query, genre, page) => async dispatch => {
  try {
    let res;
    res = await http.get(
      `${API_BASE_URL}${serachMovie}?api_key=${Api_key}&language=en-US&query=${search_query}&page=${page}&include_adult=false&genre&with_genre=${genre}`
    );
    let gift = res.data.results;

    dispatch({ type: SEARCH_MOVIES_SUCCESS, payLoad: res.data });
    // dispatch({ type: SEARCH_WORD_MOVIES_SUCCESS, payLoad: search });

    return res;
  } catch (error) {
    return error;
  }
};

export const setSearchWord = search => async dispatch => {
  dispatch({ type: SEARCH_WORD_MOVIES_SUCCESS, payLoad: search });
};

export const clearSearchMovie = () => async dispatch => {
  dispatch({ type: SEARCH_MOVIES_FAILED, payLoad: [] });
  dispatch({ type: SEARCH_WORD_MOVIES_FAILED, payLoad: "" });
};
