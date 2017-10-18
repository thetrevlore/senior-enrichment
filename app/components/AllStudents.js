import React from 'react';
import { Link } from 'react-router-dom';
import store from '../store';
import { removeStudent } from '../reducers/studentReducer';

export default class AllStudents extends React.Component {

  constructor(props) {
    super(props);
    // this.state = store.getState();
  }

  // componentDidMount() {
  //   this.unsubscribe = store.subscribe(()=>this.setState(store.getState()))
  // }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  handleDelete(student) {
    store.dispatch(removeStudent(student));
  }
  
  render() {
    const students = this.props.students;
    const campuses = this.props.campuses;

    return (
      <div>
        <h1>All Students</h1>
        <tbody>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Campus</th>
          </tr>
          {
            students.map((student)=>{
              let campus = campuses.find((campus) => campus.id === student.campusId);
              return (
                <tr key={student.id}>
                  <th>{student.id}</th>
                  <th><Link to={`/students/${student.id}`}>{student.name}</Link></th>
                  <th><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></th>
                  <th><button onClick={()=>this.handleDelete(student)}>Delete</button></th>
                </tr>
              )
            })
          }
        </tbody>
      </div>
    )
  }
}

// export default class AllStudents extends Component {

//   constructor(props) {
//     super(props);
//     // this.state = store.getState();
//   }

//   componentDidMount() {
//     // this.unsubscribe = store.subscribe(()=>this.setState(store.getState()));
//   }

//   componentWillUnmount() {
//     // this.unsubscribe();
//   }

//   render() {
//     const students = this.props.students;
//     return (
//       <div>
//         <h1>AllStudents</h1>
//         <ul>
//         {
//           students.map((student)=>{
//             return <li key={student.id}><Link to={`/students/${student.id}`}>{student.name}</Link></li>
//           })
//         }
//         </ul>
//       </div>
//     )
//   }
// }