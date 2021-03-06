import * as actions from "../actionTypes/index";
const initialState = {
  isLoading: false,
  genreMoviesList: [],
  totalPages: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GENRE_MOVIES_START:
      return {
        ...state,
        isLoading: true
      };
    case actions.GENRE_MOVIES_FAILED:
      return {
        ...state,
        isLoading: false
      };
    case actions.GENRE_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        genreMoviesList: action.payLoad.results,
        totalPages: action.payLoad.total_pages
      };

    default:
      return state;
  }
};
