import axios from 'axios';

// ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

// ACTION CREATORS
export function getCampuses (campuses) {
  return { type: GET_CAMPUSES, campuses }
}

export function deleteCampus(campus) {
  return { type: DELETE_CAMPUS, campus }
}

// THUNK CREATORS
export function fetchCampuses() {

  return function thunk(dispatch) {
    axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => dispatch(getCampuses(campuses)))
  }
}

export function removeCampus(campus) {
  return function thunk(dispatch) {
    axios.delete(`/api/campuses/${campus.id}`)
    .then(res=>res.data)
    .then(deletedCampus => dispatch(deleteCampus(deletedCampus)))
  }
} 

// REDUCER
const campusReducer = function(campuses = [], action) {

  switch(action.type) {

    case GET_CAMPUSES: 
      return action.campuses;

    case DELETE_CAMPUS:
      return campuses.filter((campus) => action.campus.id !== campus.id );

    default: return campuses;
  }

};

export default campusReducer;