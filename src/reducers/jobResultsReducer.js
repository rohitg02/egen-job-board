import { FETCH_JOBS, SET_JOB_DETAIL, FLAG_API_REQUEST, UNFLAG_API_REQUEST } from '../actions/types';

const initState = {
  jobs: [],
  jobDetail: {},
  fetching: false,
};

const jobResultsReducer = (state = initState, action) => {
    switch(action.type) {
      case FETCH_JOBS : {
        return {
          ...state,
          jobs: [...action.payload]
        }
      }
      case SET_JOB_DETAIL: {
        return {
          ...state,
          jobDetail: {...action.payload}
        }
      }
      case FLAG_API_REQUEST: {
        return {
          ...state,
          fetching: true
        }
      }
      case UNFLAG_API_REQUEST: {
        return {
          ...state,
          fetching: false
        }
      }
      default:
        return state
    }
}

export default jobResultsReducer;
