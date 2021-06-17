import { combineReducers } from "redux";
import movies from "./movies";
import specificMovie from "./specificMovie";

const rootReducer = combineReducers({
  movies,
  specificMovie
});
export default (state, action) => rootReducer(state, action);
