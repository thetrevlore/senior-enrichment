import axios from 'axios';

// ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';

// ACTION CREATORS
export function getStudents (students) {
  return { type: GET_STUDENTS, students }
}

// THUNK CREATORS
export function fetchStudents() {

  return function thunk(dispatch) {
    axios.get('/api/students')
    .then(res => res.data)
    .then(students => dispatch(getStudents(students)))
  }
}

// REDUCER
const studentReducer = function(students = [], action) {

  switch(action.type) {

    case GET_STUDENTS: 
      return action.students;

    default: return students;
  }
  
};

export default studentReducer;