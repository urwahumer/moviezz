import * as actions from "../actionTypes/index";
const initialState = {
    isLoading: false,
    upcomingMoviesList:[],
    specificVideoInfo:[]
   
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case actions.UPCOMING_MOVIES_START:
        return {
          ...state,
          isLoading: true,
        };
      case actions.UPCOMING_MOVIES_FAILED:
        return {
          ...state,
          isLoading: false,

        };
      case actions.UPCOMING_MOVIES_SUCCESS:
        return {
          ...state,
          isLoading: false,
          upcomingMoviesList:action.payLoad
        
        };

        case actions.GET_VIDEO_START:
          return {
            ...state,
            isLoading: true,
          };
        case actions.GET_VIDEO_FAILED:
          return {
            ...state,
            isLoading: false,
  
          };
        case actions.GET_VIDEO_SUCCESS:
          return {
            ...state,
            isLoading: false,
            specificVideoInfo:action.payLoad
          
          };
     

      default:
        return state;
    }
  };
  