import React from 'react';
import { Link } from 'react-router-dom';
// import store from '../store';

export default function AllStudents(props) {
  const students = props.students;
  return (
    <div>
      <h1>All Students</h1>
      <ul>
      {
        students.map((student)=>{
          return <li key={student.id}><Link to={`/students/${student.id}`}>{student.name}</Link></li>
        })
      }
      </ul>
    </div>
  )
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