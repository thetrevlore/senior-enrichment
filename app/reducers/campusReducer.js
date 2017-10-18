import axios from 'axios';

// ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';

// ACTION CREATORS
export function getCampuses (campuses) {
  return { type: GET_CAMPUSES, campuses }
}

// THUNK CREATORS
export function fetchCampuses() {

  return function thunk(dispatch) {
    axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => dispatch(getCampuses(campuses)))
  }
}

// REDUCER
const campusReducer = function(campuses = [], action) {

  switch(action.type) {
    
    case GET_CAMPUSES: 
      return action.campuses;

    default: return campuses;
  }

};

export default campusReducer;