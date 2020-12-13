import { FETCH_JOBS, SET_JOB_DETAIL } from '../actions/types';

const initState = {
  jobs: [],
  jobDetail: {}
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
      default:
        return state
    }
}

export default jobResultsReducer;
