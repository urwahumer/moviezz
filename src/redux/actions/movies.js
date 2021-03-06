import http from "../../Utils/http-service";
import {
  API_BASE_URL,
  Api_key,
  trailerUrl,
  UpcomingMoviesUrl
} from "../../Utils/urls";
import {
  UPCOMING_MOVIES_START,
  UPCOMING_MOVIES_FAILED,
  UPCOMING_MOVIES_SUCCESS,
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAILED
} from "../actionTypes/movies";

export const upcomingMovies = data => async dispatch => {
  try {
    let res;
    res = await http.get(
      `${API_BASE_URL}${UpcomingMoviesUrl}?api_key=${Api_key}&language=en-US&page=${data}`
    );
    let gift = res.data.results;
    dispatch({ type: UPCOMING_MOVIES_SUCCESS, payLoad: gift });
    return res;
  } catch (error) {
    return error;
  }
};

export const getVideo = id => async dispatch => {
  try {
    let res;
    res = await http.get(
      `${API_BASE_URL}${trailerUrl}/${id}/videos?api_key=${Api_key}&language=en-US&page=1`
    );

    let gift = res.data.results;

    dispatch({ type: GET_VIDEO_SUCCESS, payLoad: gift });

    return res;
  } catch (error) {
    return error;
  }
};
