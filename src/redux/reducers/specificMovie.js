import * as actions from "../actionTypes/index";
const initialState = {
  isLoading: false,
  specificMovieDetail: [],
  similarMoviesList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SPECIFIC_MOVIE_START:
      return {
        ...state,
        isLoading: true
      };
    case actions.SPECIFIC_MOVIE_FAILED:
      return {
        ...state,
        isLoading: false
      };
    case actions.SPECIFIC_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        specificMovieDetail: action.payLoad
      };
    //Similar Movies
    case actions.SIMILAR_MOVIE_START:
      return {
        ...state,
        isLoading: true
      };
    case actions.SIMILAR_MOVIE_FAILED:
      return {
        ...state,
        isLoading: false
      };
    case actions.SIMILAR_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        similarMoviesList: action.payLoad
      };

    default:
      return state;
  }
};
