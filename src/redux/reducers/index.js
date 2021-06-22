import { combineReducers } from "redux";
import movies from "./movies";
import specificMovie from "./specificMovie";
import genre from "./genre";

const rootReducer = combineReducers({
  movies,
  specificMovie,
  genre
});
export default (state, action) => rootReducer(state, action);
