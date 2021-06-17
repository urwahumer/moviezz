import * as actions from "../actionTypes/index";
const initialState = {
  isLoading: false,
  specificMovieDetail: []
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

    default:
      return state;
  }
};
