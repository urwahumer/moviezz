import { combineReducers } from "redux";
import movies from "./movies";

const rootReducer = combineReducers({
movies
})
export default (state, action) =>
  rootReducer(state, action);