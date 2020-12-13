import jsonPositions from '../services/jsonPositions';
import { FETCH_JOBS, SET_JOB_DETAIL } from './types';

export const fetchJobs = (urlFilters = '') => async dispatch => {
  const response = await jsonPositions.get(`/positions.json${urlFilters}`);

  dispatch({ type: FETCH_JOBS, payload: response.data });
};

export const setJobDetail = payload => ({
  type: SET_JOB_DETAIL,
  payload 
});
