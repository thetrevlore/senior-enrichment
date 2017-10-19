import axios from 'axios';

// ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';
const DELETE_STUDENT = 'DELETE_STUDENT';
const CREATE_STUDENT = 'CREATE_STUDENT';

// ACTION CREATORS
export function getStudents (students) {
  return { type: GET_STUDENTS, students }
}

export function deleteStudent(student) {
  return { type: DELETE_STUDENT, student }
}

export function createStudent(student) {
  return { type: CREATE_STUDENT, student }
}

// THUNK CREATORS
export function fetchStudents() {

  return function thunk(dispatch) {
    axios.get('/api/students')
    .then(res => res.data)
    .then(students => dispatch(getStudents(students)))
  }
}

export function removeStudent(student) {
  return function thunk(dispatch) {
    axios.delete(`/api/students/${student.id}`)
    .then(res=>res.data)
    .then(deletedStudent => dispatch(deleteStudent(deletedStudent)))
  }
}

export function addStudent(student) {
  return function thunk(dispatch) {
    axios.post('/api/students', student)
    .then(res=>res.data)
    .then(createdStudent => dispatch(createStudent(createdStudent)))
  }
}

// REDUCER
const studentReducer = function(students = [], action) {

  switch(action.type) {

    case GET_STUDENTS: 
      return action.students;
    
    case DELETE_STUDENT:
      return students.filter((student) => action.student.id !== student.id );

    case CREATE_STUDENT:
      return students.concat([action.student]);

    default:
      return students;
  }

};

export default studentReducer;