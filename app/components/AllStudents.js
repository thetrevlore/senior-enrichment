import React from 'react';
import { Link } from 'react-router-dom';

export default class AllStudents extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    }
  }
  
  render() {
    const students = this.props.students;
    const campuses = this.props.campuses;
    const handleStudentCreate = this.props.handleStudentCreate;

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
                  <br/>
                  <th><button onClick={()=>this.props.handleStudentDelete(student)}>{`Delete ${student.name}`}</button></th>
                  <br/>
                </tr>
              )
            })
          }
        </tbody>
        <br/>
          <div><button onClick={()=>this.setState({isHidden: false})}>Add Member</button></div>
          {!this.state.isHidden &&
            (
              <form onSubmit={(ev)=>handleStudentCreate(ev)}>
                <label>
                  Name:
                  <input type='text' name='studentName' />
                </label>
    
                <label>
                  Email:
                  <input type='text' name='studentEmail' />
                </label>

                <label>
                  Member House: 
                  <select name='studentCampus'>
                    {
                      campuses.map((campus)=>{
                        return <option value={campus.id} key={campus.id}>{campus.name}</option>
                      })
                    }
                  </select>
                </label>
    
                <input type='submit' value='Create Member' />
              </form>
            )
          }
        <br/>
      </div>
    )
  }
}