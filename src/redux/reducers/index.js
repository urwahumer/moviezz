import { combineReducers } from "redux";
import movies from "./movies";
import specificMovie from "./specificMovie";
import genre from "./genre";
import search from "./search";

const rootReducer = combineReducers({
  movies,
  specificMovie,
  genre,
  search
});
export default (state, action) => rootReducer(state, action);
