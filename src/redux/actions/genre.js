import http from "../../Utils/http-service";
import { API_BASE_URL, Api_key, genreMovies } from "../../Utils/urls";
import { GENRE_MOVIES_SUCCESS } from "../actionTypes/genre";

//fetch genre List
export const fetchGenreMovies = (id, page) => async dispatch => {
  try {
    let res;
    res = await http.get(
      `${API_BASE_URL}${genreMovies}?api_key=${Api_key}&with_genres=${id}&page=${page}`
    );
    let gift = res.data.results;
    console.log(res.data);
    dispatch({ type: GENRE_MOVIES_SUCCESS, payLoad: res.data });
    return res;
  } catch (error) {
    return error;
  }
};

// //fetch specific genre movies List
// export const fetchGenreMovies = id => async dispatch => {
//   try {
//     let res;
//     res = await http.get(
//       `${API_BASE_URL}${genreMovies}?api_key=${Api_key}&with_genres=${id}`
//     );
//     let gift = res.data.results;
//     dispatch({ type: GENRE_MOVIES_SUCCESS, payLoad: gift });
//     return res;
//   } catch (error) {
//     return error;
//   }
// };
