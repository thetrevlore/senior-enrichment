import React from 'react';
import { Link } from 'react-router-dom';

// export default function AllStudents(props) {

//   const students = props.students;
//   const campuses = props.campuses;
//   const handleStudentDelete = props.handleStudentDelete;

//   return (
//     <div>
//       <h1>All Students</h1>
//       <tbody>
//         <tr>
//           <th>#</th>
//           <th>Name</th>
//           <th>Campus</th>
//         </tr>
//         {
//           students.map((student)=>{
//             let campus = campuses.find((campus) => campus.id === student.campusId);
//             return (
//               <tr key={student.id}>
//                 <th>{student.id}</th>
//                 <th><Link to={`/students/${student.id}`}>{student.name}</Link></th>
//                 <th><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></th>
//                 <th><button onClick={()=>handleStudentDelete(student)}>Delete</button></th>
//               </tr>
//             )
//           })
//         }
//       </tbody>
//     </div>
//   )
// }

export default class AllStudents extends React.Component {
  
    constructor(props) {
      super(props);
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
                    <th><button onClick={()=>this.props.handleStudentDelete(student)}>Delete</button></th>
                  </tr>
                )
              })
            }
          </tbody>
        </div>
      )
    }
  }