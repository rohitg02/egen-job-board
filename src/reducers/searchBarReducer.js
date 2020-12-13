import { UPDATE_FILTERS } from '../actions/types';

const initState = {
  location: '',
  full_time: false,
  description: '',
  lat: '',
  lon: ''
};

const searchBarReducer = (state = initState, action) => {
    switch(action.type) {
      case UPDATE_FILTERS : {
        return {
          ...state,
          ...action.payload
        }
      }
      default:
        return state
    }
}

export default searchBarReducer;
