import http from "../../Utils/http-service";
import {
  API_BASE_URL,
  Api_key,
  specificMovieUrl,
  similarMovies
} from "../../Utils/urls";
import {
  SPECIFIC_MOVIE_START,
  SPECIFIC_MOVIE_SUCCESS,
  SPECIFIC_MOVIE_FAILED,
  SIMILAR_MOVIE_START,
  SIMILAR_MOVIE_SUCCESS,
  SIMILAR_MOVIE_FAILED
} from "../actionTypes/specificMovie.js";

export const fetchMovieDetails = id => async dispatch => {
  try {
    const res = await http.get(
      `${API_BASE_URL}${specificMovieUrl}/${id}?api_key=${Api_key}&language=en-US&page`
    );
    let gift = res.data;

    dispatch({ type: SPECIFIC_MOVIE_SUCCESS, payLoad: gift });
    return res;
  } catch (error) {}
};

export const fetchSimilarMovies = id => async dispatch => {
  try {
    const res = await http.get(
      `${API_BASE_URL}${specificMovieUrl}/${id}${similarMovies}?api_key=${Api_key}&language=en-US&page`
    );
    let gift = res.data;

    dispatch({ type: SIMILAR_MOVIE_SUCCESS, payLoad: gift });
    return res;
  } catch (error) {}
};
