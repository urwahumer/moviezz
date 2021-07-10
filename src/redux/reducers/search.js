import * as actions from "../actionTypes/index";
const initialState = {
  isLoading: false,
  searchMovieListResult: [],
  totalPages: "",
  wordSearch: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_MOVIES_START:
      return {
        ...state,
        isLoading: true
      };
    case actions.SEARCH_MOVIES_FAILED:
      return {
        ...state,
        isLoading: false,
        searchMovieListResult: action.payLoad
      };
    case actions.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchMovieListResult: action.payLoad.results,
        totalPages: action.payLoad.total_pages
      };

    case actions.SEARCH_WORD_MOVIES_START:
      return {
        ...state,
        isLoading: true
      };
    case actions.SEARCH_WORD_MOVIES_FAILED:
      return {
        ...state,
        isLoading: false,
        wordSearch: action.payLoad
      };
    case actions.SEARCH_WORD_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        wordSearch: action.payLoad
      };

    default:
      return state;
  }
};
