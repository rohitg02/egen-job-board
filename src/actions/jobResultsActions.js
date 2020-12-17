import jsonPositions from '../services/jsonPositions';
import { FETCH_JOBS, SET_JOB_DETAIL, FLAG_API_REQUEST, UNFLAG_API_REQUEST } from './types';

export const fetchJobs = (urlFilters = '') => async dispatch => {
  dispatch(setFetchingFlag());

  const response = await jsonPositions.get(`/positions.json${urlFilters}`);
  
  dispatch(unsetFetchingFlag());
  dispatch({ type: FETCH_JOBS, payload: response.data });
};

export const setJobDetail = payload => ({
  type: SET_JOB_DETAIL,
  payload
});

export const setFetchingFlag = () => ({
  type: FLAG_API_REQUEST,
});

export const unsetFetchingFlag = () => ({
  type: UNFLAG_API_REQUEST,
});
